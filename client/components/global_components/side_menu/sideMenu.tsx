import React, { Fragment, useState, useRef } from "react";
import { videoList } from '../../../interfaces/coursePage.interface';



const sideMenu: React.FC<videoList> = ({
  id,
  title,
  courseChapterTime,
  subTitles,
  subTaskTime,
}) => {


  const [revealContent, setRevealContent] = useState<boolean>(false);
  const [finished, setFinished] = useState<boolean>(false);

  const handleSetRevealContent = () => {
    setRevealContent((revealContent) => !revealContent);
  };

  const handleSetFinished = () => {
    setFinished((finished) => !finished);
  };

  return (
    <>
      <div
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
              <p className="Eina-semibold paragraph-medium">{id}</p>
            </div>
            <div className="card__text">
              <p className=" Eina-semibold paragraph-medium">
                {title}
              </p>
            </div>
            <div className="card__time">
              <p className="paragraph-light-Noto paragraph-smallest">
                {courseChapterTime}m
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            !revealContent
              ? "card_container__info clip-path-hide"
              : "clip-path-reveal card_container__info"
          }
        >
          {subTitles.map((sub, index) => (
            <div key={sub.id} className="card_container__info--details" onClick={handleSetFinished}>

              <div
                className={!finished ? "details_not_finished" : "details_finished"}
              ></div>
              <div className="details_heading">
                <p className="paragraph-regular-Noto paragraph-medium-small ">
                  {sub.text}
                  <span className="Eina-semibold paragraph-smallest">(5m)</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default sideMenu;
