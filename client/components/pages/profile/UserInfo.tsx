import { Star, Eye, EyeOff } from "react-feather";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";

import { showHidePasswordHandler } from "components/utils/helpers/showHidePassword";
import { toggleVerification } from "./animation/ToggleVerification";
import { emailRegex, passwordRegex } from "components/utils/regex/Regex";

import Input from "components/lib/inputs/Input";
import TextArea from "components/lib/textarea/TextArea";
import Button from "components/lib/button/Button";
import { parseSocials, removeEmptyValuedEntries } from "./userInfo.utils";
import { parseWeatherItsHttp } from "components/utils/auth/linkParsing";
import { updateUserProfile } from "actions/client/user/profile/profile.action";
import { authenticatedRequest } from "components/utils/auth/tokenValidations";




type IFormInput = {
  full_name: string;
  detailed_description: string;
  email: string;
  current_password: string;
  new_password: string;
  socials: any;
};





const UserInfo = ({ full_name, email, socials }) => {
  const [isVerificated, setIsVerificated] = useState(false);
  const [userSocials, setUserSocials] = useState([]);

  const [isEditable, setIsEditable] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isConfirmPasswordHidden, setConfirmIsPasswordHidden] = useState(true);

  const { register,handleSubmit,formState: { errors },reset } = useForm<IFormInput>();




  useEffect(() => {
    parseSocials(socials, setUserSocials);
  }, []);




  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const updatedData = await removeEmptyValuedEntries(data);
    // const res = await authenticatedRequest(updateUserProfile, updatedData);

    console.log(updatedData);

    // if (res.statusCode != 200) {
    //     setIsEditable(false)
    // }
    // console.log(res);
  };

  return (
    <>
      <div className="user-profile">
        <div className="user-profile__container">
          <div className="user-profile">
            <div className="picture">
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




            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="user-profile__creditionals">
                {/* ===== NAME-SURNAME =====*/}
                <div className="name-surname">
                  <TextArea
                    className="f-size-p2 f-weight-bl "
                    color="white"
                    size="medium"
                    type="text"
                    placeHolder={full_name}
                    width="100%"
                    minHeight="8rem"
                    style={!isEditable ? { background: "none", border: "none" } : {}}
                    readonly={!isEditable ? true : false}
                    {...register("full_name")}
                  />
                </div>




                {/*  ====  DESCRIPTION ===== */}

                <div className="about-user">
                  <TextArea
                    className="f-size-p6 f-weight-m"
                    color="white"
                    size="medium"
                    type="text"
                    width="100%"
                    minHeight="18rem"
                    placeHolder={"ფრონტ-ენდ დეველოპერი 10 წლის გამოცდილებით, ვასწავლი 1000-ზე მეტ მოსწავლეს უნივერსიტეტებსა და სხვადასხვა სასწავლო დაწესებულებაში. ასევე ვასწავლის დიზაინს და ბექ-ენდ დეველოპმენტს."}
                    style={!isEditable ? { background: "none", border: "none" } : {}}
                    readonly={!isEditable ? true : false}
                    {...register("detailed_description")}
                  />
                </div>




                {/*  ======= EMAIL ===== */}

                <div className="email">
                  <div className="heading">
                    <h1 className="f-size-p6 f-weight-b">ელექტრონული ფოსტა</h1>
                  </div>

                  <Input
                    className="f-size-p6 f-weight-m"
                    color="white"
                    size="medium"
                    type="text"
                    width="100%"
                    placeHolder={email}
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
                </div>





                {/*  ======= PASSWORD ===== */}

                <div className="password">
                  <div className="heading">
                    <h1 className="f-size-p6 f-weight-b">ახალი პაროლი</h1>
                  </div>

                  <Input
                    className="f-size-p6 f-weight-m userPassword"
                    color="white"
                    size="medium"
                    placeHolder="ახალი პაროლი"
                    type="password"
                    width="100%"
                    readonly={!isEditable ? true : false}
                    iconRight={
                      <span
                        onClick={() =>
                          showHidePasswordHandler(setIsPasswordHidden,".userPassword")
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




                {/* ======= CONFIRM-PASSWORD ===== */}
                {isEditable && (
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
                  </div>
                )}





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
                          <a
                            href={parseWeatherItsHttp(el.url)}
                            rel={"external"}
                            target="_blank"
                            className="social_url">
                            <div
                              className="box"
                              style={{
                                backgroundImage: `url(/pictures/profile/socials/${
                                el.name + ".svg"}`,}}/>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}




                {/* ======= SOCIALS INPUTS =====  */}
                {isEditable && (
                  <div className="user-socials-inputs">
                    {userSocials?.map((el, i) => (
                      <div className="user-socials-inputs__container" key={i}>
                        {el.url.length > 0 && (
                          <p className="f-size-p6 f-weight-b input-labels">
                              {el.name}
                          </p>
                        )}

                        {el.url.length > 0 && (
                          <Input
                            className="social_inputs"
                            color="green"
                            size="medium"
                            type="text"
                            placeHolder={el.url}
                            width="100%"
                            {...register("socials.name")}
                          />
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
                  color="red"
                  size="large"
                  disabled={false}
                  loading={false}
                  width="100%"
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
