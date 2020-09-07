import React, { Fragment, useState, useRef } from "react";

interface Props {
  id: number;
  title: string;
  courseTime: number;
  subTitle: string;
  subTaskTime: number;
}

const sideMenu: React.FC<Props> = ({
  id,
  title,
  courseTime,
  subTitle,
  subTaskTime,
}) => {
  const ref = useRef();

  const [revealContent, setRevealContent] = useState<boolean>(false);

  const [finished, setFinished] = useState<boolean>(false);

  const handleSetRevealContent = () => {
    setRevealContent((revealContent) => !revealContent);
  };

  const handleSetFinished = () => {
    setFinished((finished) => !finished);
  };

  return (
    <Fragment>
      <div
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
              <p className="paragraph-regular-Noto paragraph-medium">
                <span className="Eina-semibold">{title}</span>-ის ძირითადები.
              </p>
            </div>
            <div className="card__time">
              <p className="paragraph-light-Noto paragraph-smallest">
                {courseTime}m
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
          <div className="card_container__info--details">
            <div
              className={
                !finished ? "details_not_finished" : "details_finished"
              }
              onClick={handleSetFinished}
            ></div>
            <div className="details_heading">
              <p className="paragraph-regular-Noto paragraph-medium-small ">
                {subTitle}
                <span className="Eina-semibold paragraph-smallest">(5m)</span>
              </p>
            </div>
          </div>
          <div className="card_container__info--details">
            <div className="details_not_finished"></div>
            <div className="details_heading">
              <p className="paragraph-regular-Noto paragraph-medium-small ">
                ჯავასკტიპტის ფუნდამენტები, რისი გაკეთება შეგიძლია
                <span className="Eina-semibold paragraph-smallest">(5m)</span>
              </p>
            </div>
          </div>
          <div className="card_container__info--details">
            <div className="details_not_finished"></div>
            <div className="details_heading">
              <p className="paragraph-regular-Noto paragraph-medium-small ">
                რა არის ცვლადები
                <span className="Eina-semibold paragraph-smallest">
                  ({subTaskTime}m)
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default sideMenu;
