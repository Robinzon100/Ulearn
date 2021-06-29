import { Star, Eye, EyeOff, Upload, Mail } from 'react-feather';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import Router from "next/router";


import { showHidePasswordHandler } from "components/utils/helpers/showHidePassword";
import { toggleVerification } from "./animation/ToggleVerification";
import { emailRegex, passwordRegex } from "components/utils/regex/Regex";


import Input from "components/lib/inputs/Input";
import TextArea from "components/lib/textarea/TextArea";
import Button from "components/lib/button/Button";
import FileUpload from "components/lib/upload/FileUpload"


import { parseSocials, removeEmptyValuedEntries } from "./userInfo.utils";
import { parseWeatherItsHttp } from "components/utils/auth/linkParsing";
import { updateUserProfile } from "actions/client/user/profile/profile.action";
import { authenticatedRequest } from "components/utils/auth/tokenValidations";
import { uploadAndRead } from "components/lib/upload/utils/FileUploadLogic";
import NextLink from '../../utils/nextLink/NextLink';
import { updateUserProfileImage } from '../../../actions/client/user/profile/profile.action';



type IFormInput = {
  full_name: string;
  description: string;
  email: string;
  current_password: string;
  new_password: string;
  socials: any;
  verified:boolean
};





const UserInfo = ({ full_name, email, description, socials, image_url,verified }) => {
  const { register, handleSubmit, formState: { errors }, reset, getValues } = useForm<IFormInput>();

  // VERIFICATION STATES
  const [isHovered, setIsHovered] = useState(false)
  const [isVerificated, ] = useState(verified);
  const [userSocials, setUserSocials] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isConfirmPasswordHidden, setConfirmIsPasswordHidden] = useState(true);
  const [userInfo, setUserInfo] = useState({ full_name, email, description });


  // FILE STATES
  const [fileUploadError, setFileUploadError] = useState("");
  const [file, setFile] = useState({file:"",base64:""});
  const [authError, setAuthError] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);



  useEffect(() => {
    parseSocials(socials, setUserSocials);
  }, []);





  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const updatedData = await removeEmptyValuedEntries(data);
    const imgForm = new FormData();


    if (!fileUploadError) {

      fetch(file.base64)
        .then(res => {
          return res.blob();
        })
        .then(async (blob) => {
          setBtnLoading(true)
          imgForm.append('user_profile_image', blob);
          const { fileKey } = await authenticatedRequest(updateUserProfileImage, imgForm, null)


          if (fileKey) {
            updatedData.image_url = fileKey
            setBtnLoading(false)
            const res = await authenticatedRequest(updateUserProfile, updatedData, null);
            setAuthError("დაფიქსირდა შეცდომა.შეასწორეთ თქვენი მონაცემები")


            if (res.statusCode == 200) {
              setUserInfo({
                full_name: res.update.full_name,
                email: res.update.email,
                description: res.update.description
              })

              parseSocials(res.update.socials, setUserSocials);
              setAuthError("")
              setBtnLoading(false)
              setIsEditable(false)
              Router.reload()
            }
          }

        });
    }
  };




  return (
    <>
      <div className="user-profile-info">
        <div className="user-profile-info__container">
          <div className="user-profile">

            <div className="picture" style={
              file.base64 == ''  ?
                { backgroundImage: `url(${image_url ?
                    process.env.BACK_END_URL + '/api/images/' + image_url :
                        '/pictures/unregistered_user.svg'
                    })` }
                : { backgroundImage: `url(${file.base64})` }}>


            {isVerificated && (
            <motion.div
                variants={toggleVerification}
                initial={{ maxWidth: "4.2rem", width: "100%" }}
                animate={isHovered ? "opened" : "closed"}
                className="verification-star"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                >
                <div className="star">
                  <Star strokeWidth="0" stroke="#ffd703" fill="#ffd703" />
                </div>


                  <div className="verification-message">
                    <p className="f-size-p8 f-weight-r">ვერიფიცირებული</p>
                  </div>
              </motion.div>
            )}
            </div>

                



{/* 
             {image_url.length == 0 &&
                <h1 className="form_errors f-size-p6 f-weight-r" 
                style={{marginBottom:"2rem"}}>
                    დაამატეთ პროფილის სურათი
                </h1>
             }

 */}




            {/* // FILE UPLOAD */}
            {isEditable &&
              (
                <>
                <h2 className="f-size-p7 f-weight-bl" style={{opacity:"60%"}}>
                    (სურათი უნდა იყოს 30კბ - ზე  ნაკლები)
                </h2>
                <FileUpload
                  height="18rem"
                  uploadSize={300}
                  disabled={!isEditable ? true : false}
                  icon={<Upload size={20} />}
                  onError={(errorType) => setFileUploadError(errorType)}
                  fileProperties={
                    (file,base64) =>
                      setFile({file,base64})
                  }
                  accept=".png,.jpg"
                  onChange={(e) => {
                    uploadAndRead(e)
                  }}
                />
                </>
              )
            }





            {isEditable && (
              <div className="fileUpload-errors">
                <p className="form_errors f-size-p6 f-weight-r">
                  {fileUploadError}
                </p>
              </div>
            )}



            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">


              <div className="user-profile__creditionals">






                {/* ===== NAME-SURNAME =====*/}
                <div className="name-surname">
                  {isEditable ? (
                    <>
                      <div className="heading">
                        <h1 className="f-size-p6 f-weight-b">სახელი და გვარი</h1>
                      </div>
                      <Input
                        autoComplate="off"
                        className={`f-size-p4 f-weight-b ${!isEditable ? "remove_input_styles" : ""}`}
                        color="white"
                        size="medium"
                        type="text"
                        placeHolder={userInfo.full_name}
                        width="100%"
                        isFocused={true}
                        readonly={!isEditable ? true : false}
                        maxLength={256}
                        {...register("full_name")}
                      />
                    </>
                  ) : (
                    <p className="f-size-p2 f-weight-b">{userInfo.full_name}</p>
                  )}
                </div>













                {/*  ====  DESCRIPTION ===== */}

                <div className="about-user">
                  {isEditable ? (
                    <>
                      <div className="heading">
                        <h1 className="f-size-p6 f-weight-b">თქვენს შესახებ</h1>
                      </div>
                      <TextArea
                        className={`f-size-p6 f-weight-m ${!isEditable ? "remove_input_styles" : ""}`}
                        color="white"
                        size="medium"
                        type="text"
                        width="100%"
                        minHeight="18rem"
                        characterMaxSize={250}
                        isFocused={true}
                        placeHolder={userInfo.description}
                        readonly={!isEditable ? true : false}
                        maxLength={1000}
                        {...register("description")}
                      />

                      {errors.description && (
                        <p className="form_errors f-size-p6 f-weight-r">
                          {errors.description.message}
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="f-size-p6 f-weight-m">{userInfo.description}</p>
                  )}
                </div>













                {/*  ======= EMAIL ===== */}

                <div className="email">
                  {isEditable ? (
                    <>
                      <div className="heading">
                        <h1 className="f-size-p6 f-weight-b">ელექტრონული ფოსტა</h1>
                      </div>

                      <Input
                        autoComplate="off"
                        className={`f-weight-m ${!isEditable ? "remove_input_styles" : ""}`}
                        color="white"
                        size="medium"
                        type="text"
                        width="100%"
                        isFocused={true}
                        placeHolder={userInfo.email}
                        readonly={!isEditable ? true : false}
                        {...register("email", {
                          pattern: {
                            value: emailRegex,
                            message: "თქვენი ელექტრონული ფოსტა არასწორია",
                          },
                          validate: () => getValues("email") != userInfo.email
                            || 'ელექტრონული ფოსტები არ უნდა ემთხვეოდეს ერთმანეთს',
                        })}
                      />

                      {errors.email && (
                        <p className="form_errors f-size-p6 f-weight-r">
                          {errors.email.message}
                        </p>
                      )}


                    </>
                  ) :
                    <div className="user-email">
                      <Mail />
                      <p className="f-size-p6 f-weight-b">{userInfo.email}</p>
                    </div>
                  }

                </div>




                {isEditable &&
                  (
                    <>

                      {/*  ======= PASSWORD ===== */}

                      <div className="password">
                        <div className="heading">
                          <h1 className="f-size-p6 f-weight-b">ახალი პაროლი</h1>
                        </div>

                        <Input
                          autoComplate="off"
                          className={`f-size-p6 f-weight-m userPassword`}
                          color="white"
                          size="medium"
                          placeHolder="ახალი პაროლი"
                          type="password"
                          width="100%"
                          isFocused={true}
                          readonly={!isEditable ? true : false}
                          iconRight={
                            <span
                              onClick={() =>
                                showHidePasswordHandler(setIsPasswordHidden, ".userPassword")
                              }
                            >
                              {isPasswordHidden ? <EyeOff /> : <Eye />}
                            </span>
                          }
                          {...register("new_password", {
                            pattern: {
                              value: passwordRegex,
                              message: "თქვენი პაროლი არ არის საკმარისად ძლიერი",
                            },
                          })}
                        />

                        {errors.new_password && (
                          <p className="form_errors f-size-p6 f-weight-r">
                            {errors.new_password.message}
                          </p>
                        )}
                      </div>










                      {/* ======= SOCIALS INPUTS =====  */}
                      <div className="user-socials-inputs">
                        {userSocials?.map((el, i) => (
                          <div className="user-socials-inputs__container" key={i}>

                            <p className="f-size-p6 f-weight-b input-labels">
                              {el.name}
                            </p>

                            <Input
                              autoComplate="off"
                              className="social_inputs"
                              color="green"
                              size="medium"
                              type="text"
                              width="100%"
                              maxLength={2048}
                              placeHolder='ლინკი...'
                              defaultValue={el.url.length > 0 ? el.url : null}
                              //@ts-ignore
                              {...register(`socials.${el.name}`)}
                            />

                          </div>
                        ))}
                      </div>















                      {/* ======= CONFIRM-PASSWORD ===== */}
                      <div className="confirm-password">
                        <div className="heading">
                          <h1 className="f-size-p6 f-weight-b">
                            დაადასტურეთ პაროლით
                          </h1>
                        </div>

                        <Input
                          autoComplate="off"
                          className="f-size-p6 f-weight-m confirm_user_password"
                          color="white"
                          size="medium"
                          type="password"
                          width="100%"
                          placeHolder="შეიყვანეთ პაროლი"
                          disabled={false}
                          readonly={false}
                          iconRight={
                            <span
                              onClick={() =>
                                showHidePasswordHandler(setConfirmIsPasswordHidden,
                                  ".confirm_user_password")
                              }>
                              {isConfirmPasswordHidden ? <EyeOff /> : <Eye />}
                            </span>
                          }
                          {...register("current_password", {
                            required: "აუცილებლად მიუთითეთ თქვენი პაროლი",
                            pattern: {
                              value: passwordRegex,
                              message: "თქვენი პაროლი არ არის საკმარისად ძლიერი",
                            },
                          })}
                        />


                        {errors.current_password && (
                          <p className="form_errors f-size-p6 f-weight-r">
                            {errors.current_password.message}
                          </p>
                        )}
                      </div>
                    </>
                  )
                }


                <p className="auth-error form_errors f-size-p6 f-weight-r">{authError}</p>



                {/* ======= SOCIALS =====  */}
                {!isEditable && (
                  <div className="user-socials">
                    {userSocials?.map((el, i) => (
                      <div
                        className="user-socials__container"
                        key={i}
                        style={el.url.length > 0
                          ? { width: "100%", padding: "1.5rem" }
                          : { display: "none" }}>


                        {el.url.length > 0 && (
                          <NextLink
                            inNewTab={true}
                            route={parseWeatherItsHttp(el.url)}
                            className="social_url">
                            <div
                              className="box"
                              style={{
                                backgroundImage: `url(/pictures/profile/socials/${el.name + ".svg"}`,
                              }} />
                          </NextLink>
                        )}
                      </div>
                    ))}
                  </div>
                )}


















                {/*  ======= ACCEPTBTN ===== */}
                <div className="confirmation-btn">
                  <Button
                    style={!isEditable ? { display: "none" } : {}}
                    color="green"
                    size="large"
                    disabled={false}
                    loading={btnLoading}
                    width="100%"
                    type="submit">
                    <p className="f-weight-r f-size-p6">დადასტურება</p>
                  </Button>
                </div>
              </div>
            </form>













            {/*  ======= EDIT BTN ===== */}

            {!isEditable && (
              <div className="edit-btn">
                <Button
                  onClick={() => {
                    setIsEditable(true)
                    reset({
                      current_password: "",
                    });
                  }}
                  color="yellow"
                  size="large"
                  disabled={false}
                  loading={false}
                  width="100%">
                  <p className="f-weight-r f-size-p6">რედაქტირება</p>
                </Button>
              </div>
            )}













            {/*  ======= CANCEL ===== */}

            {isEditable && (
              <div className="cancel-btn">
                <Button
                  onClick={() => {
                    setFile(
                      {
                        file:"",  
                        base64: `${process.env.BACK_END_URL}/api/images/${image_url}`
                      })
                    setAuthError("")
                    setIsEditable(false);
                    reset({
                      full_name: "",
                      email: "",
                      current_password: "",
                      new_password: "",
                    });
                  }}
                  size="large"
                  disabled={false}
                  loading={false}
                  width="100%"
                  stroke='red'>
                  <p className="f-weight-r f-size-p6">გაუქმება</p>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
