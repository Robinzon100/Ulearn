import React, { Fragment, useState, useRef, useEffect } from "react";
import { videoList } from "../interfaces/coursePage.interface";

const sideMenu: React.FC<videoList> = ({
    id,
    title,
    courseChapterTime,
    subTitles,
    handleDisplayVideoNames
}) => {
    const [revealContent, setRevealContent] = useState<boolean>(false);
    const [finished, setFinished] = useState<boolean>(false);
    const ref = useRef();

    

    const handleSetRevealContent = () => {
        setRevealContent((revealContent) => !revealContent);
    };

    //! ეს ცვლის სტილს დაამთავრა თუ არა ესა თუ ის დავალება
    const handleSetFinished = (e) => {
        // debugger;

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
            <div
                key={id}
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
                            <p className=" Eina-semibold paragraph-medium">{title}</p>
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
                    ref={ref}
                >
                    {subTitles.map((sub, index) => (
                        <div
                            key={sub.id}
                            className="card_container__info--details details_not_finished"
                            onClick={(e) => {handleSetFinished(e);handleDisplayVideoNames(e)}}
                            data-title={sub.text}
                        >
                            {/* <div className="details_not_finished"></div> */}
                            <div className="details_heading" >
                                <p className="paragraph-regular-Noto paragraph-medium-small ">
                                    {sub.text}
                                    <span className="Eina-semibold paragraph-smallest">({sub.amountOfMinutes}m)</span>
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
