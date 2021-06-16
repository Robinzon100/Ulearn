import { Star, Eye, EyeOff, Upload } from 'react-feather';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";



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
import { b64toBlob } from 'components/utils/file/blob.utils';




type IFormInput = {
  full_name: string;
  description: string;
  email: string;
  current_password: string;
  new_password: string;
  socials: any;
};


let profileImage


const UserInfo = ({ full_name, email, description, socials, image_url }) => {
  const [isVerificated, setIsVerificated] = useState(false);
  const [userSocials, setUserSocials] = useState([]);

  const [isEditable, setIsEditable] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isConfirmPasswordHidden, setConfirmIsPasswordHidden] = useState(true);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>();
  const [userInfo,] = useState({ full_name, email, description });
  const [imageBase64, setImageBase64] = useState<string>(image_url)




  useEffect(() => {
    parseSocials(socials, setUserSocials);
  }, []);



  // const imageUploadHandler = () => {

  // }


  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const updatedData = await removeEmptyValuedEntries(data);
    const res = await authenticatedRequest(updateUserProfile, updatedData, null);
    const imgForm = new FormData();

    fetch(imageBase64)
      .then(res => {
        return res.blob();
      })
      .then(blob => {
        imgForm.append('user_profile_image', blob);
      });


    if (res.statusCode == 200) {
      setIsEditable(false)
    }
  };






  return (
    <>
      <div className="user-profile-info">
        <div className="user-profile-info__container">
          <div className="user-profile">
            <div
              className="picture" style={{ backgroundImage: `url(${imageBase64})` }}>
              <motion.div
                variants={toggleVerification}
                initial={{ maxWidth: "4.2rem", width: "100%" }}
                animate={isVerificated ? "opened" : "closed"}
                className="verification-star"
                onMouseEnter={() => setIsVerificated(true)}
                onMouseLeave={() => setIsVerificated(false)}>
                <div className="star">
                  <Star strokeWidth="0" stroke="#ffd703" fill="#ffd703" />
                </div>


                {isVerificated && (
                  <div className="verification-message">
                    <p className="f-size-p8 f-weight-r">ვერიფიცირებული</p>
                  </div>
                )}
              </motion.div>
            </div>


            {/* // FILE UPLOAD */}
            {isEditable &&
              (
                <FileUpload
                  height="18rem"
                  disabled={!isEditable ? true : false}
                  icon={<Upload size={20} />}
                  uploadSize={20}
                  onError={(errorType) => console.error(errorType)}
                  accept=".pdf,.png,.jpg"
                  onChange={() => {
                    uploadAndRead(setImageBase64)
                  }}
                />
              )
            }





            <form onSubmit={handleSubmit(onSubmit)}>


              <div className="user-profile__creditionals">






                {/* ===== NAME-SURNAME =====*/}
                <div className="name-surname">
                  {isEditable ? (
                    <>
                      <div className="heading">
                        <h1 className="f-size-p6 f-weight-b">სახელი და გვარი</h1>
                      </div>
                      <Input
                        className={`f-size-p4 f-weight-b ${!isEditable ? "remove_input_styles" : ""}`}
                        color="white"
                        size="medium"
                        type="text"
                        placeHolder={userInfo.full_name}
                        width="100%"
                        isFocused={true}
                        readonly={!isEditable ? true : false}
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
                            message: "სწორად ჩაწერეთ თქვენი ელექტრონული ფოსტა",
                          },
                        })}
                      />

                      {errors.email && (
                        <p className="form_errors f-size-p6 f-weight-r">
                          {errors.email.message}
                        </p>
                      )}


                    </>
                  ) : <p className="f-size-p6 f-weight-m">{userInfo.email}</p>}

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
                              className="social_inputs"
                              color="green"
                              size="medium"
                              type="text"
                              width="100%"
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
                    loading={false}
                    width="100%"
                    type="submit"
                  >
                    <p className="f-weight-r f-size-p6">დადასტურება</p>
                  </Button>
                </div>
              </div>
            </form>













            {/*  ======= EDIT BTN ===== */}

            {!isEditable && (
              <div className="edit-btn">
                <Button
                  onClick={() => setIsEditable(true)}
                  color="yellow"
                  size="large"
                  disabled={false}
                  loading={false}
                  width="100%"
                >
                  <p className="f-weight-r f-size-p6">რედაქტირება</p>
                </Button>
              </div>
            )}













            {/*  ======= CANCEL ===== */}

            {isEditable && (
              <div className="cancel-btn">
                <Button
                  onClick={() => {
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
                  stroke='red'
                >
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
