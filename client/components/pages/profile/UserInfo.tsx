import { Star } from "react-feather";
import { useState } from "react";
import {motion} from "framer-motion"


import {toggleVerification} from "./animation/ToggleVerification";
import Input from "components/lib/inputs/Input";


const UserInfo = () => {
  const [isVerificated, setIsVerificated] = useState(false);

  return (
    <>
      <div className="user-profile">
        <div className="user-profile__container">
          <div className="user-profile">


            <div className="picture">
              <motion.div
                variants={toggleVerification}
                initial={{ maxWidth: "4.2rem",width:"100%" }}
                animate={isVerificated ? "opened" : "closed"}
                className="verification-star"
                onMouseEnter={() => setIsVerificated(true)}
                onMouseLeave={() => setIsVerificated(false)}>
                
                <div className="star">
                <Star  strokeWidth="0" stroke="#ffd703" fill="#ffd703" />

                </div>

                {isVerificated && (
                  <div className="verification-message">
                    <p className="f-size-p8 f-weight-r">ვერიფიცირებული</p>
                  </div>
                )}
              </motion.div>
            </div>


            <div className="user-profile__creditionals">
                    

            <div className="name-surname">
                <Input
                    className="f-size-p2 f-weight-bl"
                    color="white"
                    size="medium"
                    type="text"
                    width="100%"
                    disabled={true}
                    value="სახელა სახელაშვილი"
                    // defaultValue="სახელა სახელაშვილი"
                    style={{background:"none",border:"none"}}
                    readonly={true}
                />
            </div>

            <div className="about-user">
                <Input
                    className="f-size-p2 f-weight-bl"
                    color="white"
                    size="medium"
                    type="text"
                    width="100%"
                    disabled={true}
                    value="სახელა სახელაშვილი"
                    // defaultValue="სახელა სახელაშვილი"
                    style={{background:"none",border:"none"}}
                    readonly={true}
                />
            </div>

            <div className="email"></div>

            <div className="password"></div>

            <div className="user-socials"></div>

            <div className="password"></div>

            <div className="edit-btn"></div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
