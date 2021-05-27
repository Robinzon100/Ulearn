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
                    color="white"
                    size="medium"
                    type="text"
                    placeHolder="მოძებნე სასურველი კურსი"
                    width="100%"
                    disabled={false}
                    defaultValue="სახელა სახელაშვილი"
                    style={{background:"none"}}
                    
                />
            </div>

            <div className="about-user"></div>

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
