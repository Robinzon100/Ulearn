import { Star,Eye } from "react-feather";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { toggleVerification } from "./animation/ToggleVerification";
import Input from "components/lib/inputs/Input";
import TextArea from "components/lib/textarea/TextArea";
import Button from "components/lib/button/Button"
import NextLink from './../../utils/nextLink/NextLink';



const UserInfo = ({ full_name, email,password,socials }) => {

  const [isVerificated, setIsVerificated] = useState(false);
  const [userSocials, setUserSocials] = useState([])


    useEffect(() => {
        let getSocials = [];

        for (const [key, value] of Object.entries(socials)) {
            getSocials.push({name:key,url:value})
        }
        setUserSocials(getSocials)

    }, [])


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
                onMouseLeave={() => setIsVerificated(false)}
              >
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



            <div className="user-profile__creditionals">
              <div className="name-surname">
                <TextArea
                  className="f-size-p2 f-weight-bl "
                  color="white"
                  size="medium"
                  type="text"
                  width="100%"
                  disabled={true}
                  value={full_name && full_name}
                  // defaultValue="სახელა სახელაშვილი"
                  style={{ background: "none", border: "none" }}
                  readonly={true}
                  // minHeight="3rem"
                  maxHeight="5rem"
                />
              </div>



              <div className="about-user">
                <TextArea
                  className="f-size-p6 f-weight-r"
                  color="white"
                  size="medium"
                  type="text"
                  width="100%"
                  disabled={true}
                  value="ფრონტ-ენდ დეველოპერი 10 წლის გამოცდილებით, ვასწავლი 1000-ზე მეტ მოსწავლეს უნივერსიტეტებსა და სხვადასხვა სასწავლო დაწესებულებაში. ასევე ვასწავლის დიზაინს და ბექ-ენდ დეველოპმენტს."
                  style={{ background: "none", border: "none" }}
                  readonly={true}
                  minHeight="20rem"
                />
              </div>



              <div className="email">
                <div className="heading">
                  <h1 className="f-size-p6 f-weight-b">ელექტრონული ფოსტა</h1>
                </div>

                <Input
                  className="f-size-p6 f-weight-r"
                  color="white"
                  size="medium"
                  type="text"
                  width="100%"
                  disabled={true}
                  value={email && email}
                  iconRight={<Eye/>}
                  // style={{background:"none",border:"none"}}
                  readonly={true}
                />
              </div>




              <div className="password">
                <div className="heading">
                  <h1 className="f-size-p6 f-weight-b">პაროლი</h1>
                </div>

                <Input
                  className="f-size-p6 f-weight-r"
                  color="white"
                  size="medium"
                  type="password"
                  width="100%"
                  disabled={true}
                  iconRight={<Eye/>}
                  value={password && password}
                  // style={{background:"none",border:"none"}}
                  readonly={true}
                />
              </div>




              <div className="user-socials">
                {userSocials?.map((el,i) => (
                    
                <div key={i}>
                    {el.url.length > 0 && 

                    <a  href={el.url} 
                    className="social_url" >

                        <div className="box"
                            style={{backgroundImage:`url(/pictures/profile/socials/${el.name}.svg)`}}
                        />
                    </a>
                     }
                </div>
                ))}   

              </div>





              <div className="password">

              <div className="heading">
                  <h1 className="f-size-p6 f-weight-b">შეიყვანეთ პაროლი</h1>
                </div>

                <Input
                  className="f-size-p6 f-weight-r"
                  color="white"
                  size="medium"
                  type="password"
                  width="100%"
                  disabled={false}
                //   value={password}
                  readonly={false}
                />
              </div>




              <div className="edit-btn">
              <Button
                // route="/register"
                onClick={() => console.log("clicked")}
                color="yellow"
                size="large"
                disabled={false}
                loading={false}
                width="100%">
                <p className="f-weight-r f-size-p6">
                    რედაქტირება
                </p>
            </Button>
              </div>



            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
