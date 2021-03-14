import  { useState } from "react";
import { videoList } from "../../../interfaces/coursePage.interface";
import { motion } from "framer-motion";

import { sideMenuAnimation } from "components/lib/framer/framerAnimation";

const sideMenu: React.FC<videoList> = ({id,title,courseChapterTime,subTitles},props) => {
  const [revealContent, setRevealContent] = useState<boolean>(false);

  const handleSetRevealContent = () => {
    setRevealContent((revealContent) => !revealContent);
  };

  //! ეს ცვლის სტილს დაამთავრა თუ არა ესა თუ ის დავალება
  const handleSetFinished = (e) => {
    const menuElements = document.querySelectorAll(".details_not_finished");

    menuElements.forEach((element) => {
      if (element.classList.contains("details_finished")) {
        element.classList.remove("details_finished");
      }
    });

    e.currentTarget.classList.toggle("details_finished");
  };

  return (
    <>
      <div key={props.key}
        data-id={id}
        className={
          !revealContent
            ? "side-menu__container"
            : "side-menu__container  without-border"
        }
      >
        <div onClick={handleSetRevealContent} className="card_container">
          <div className="card">
            <div className="card__number">
              <p className="f-size-p6">{id}</p>
            </div>
            <div className="card__text">
              <p className="f-weight-b f-size-p6">{title}</p>
            </div>
            <div className="card__time">
              <p className="f-size-p7">
                {courseChapterTime}m
              </p>
            </div>
          </div>
        </div>
        <motion.div
          className="card_container__info"
          variants={sideMenuAnimation}
          initial={{ height: "0rem" }}
          animate={revealContent ? "open" : "closed"}>
          {subTitles.map(sub => (
            <div
              key={sub.id}
              className="card_container__info--details details_not_finished"
              onClick={(e) => {
                handleSetFinished(e);
                // handleClick(e)
              }}
              data-title={sub.text}>
              <div className="details_heading">
                <p className="f-weight-l f-size-p6">
                  {sub.text}
                  <span className="f-weight-l f-size-p7">
                    ({sub.amountOfMinutes}m)
                  </span>
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default sideMenu;
