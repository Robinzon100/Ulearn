import React from "react";



//* ==========OUR IMPORTS
import {getColors} from "./tooltip.style";

const tooltipContent = ({text,color,offset,top,width}) => {
    
  return (
    <>
      <div className="tooltip_content">
        <div className="inner">
          <span className="inner-arrow"></span>
          <div className="content-text">
          <p className="regular f-size-p5">{text}</p>
          </div>
        </div>
      </div>





      <style jsx>{`
        .tooltip_content {
          background:${getColors(color).background};
          position: absolute;
          width: auto;
          top:${Math.round((top - top) - offset)}px;
          left:${Math.round(width / 2)}px;
          transform: translate(-50%, -100%);
          color: rgb(0, 0, 0);
          border-radius: 5px;
          padding: 0px;
          z-index: 1000;
          box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 30px;
        }

        .inner {
          position: relative;
          padding: 8px 16px;
        }

        .inner-arrow {
          width: 0px;
          height: 0px;
          border-style: solid;
          border-width: 6px 7px 6px 0px;
          border-color: transparent ${getColors(color).background} transparent transparent;
          position: absolute;
          inset: auto auto 3px 50%;
          transform: translate(-50%, 100%) rotate(-90deg);
        }

        .content-text p {
            color:${color === "white" ? "var(--primary-dark)" : "var(--primary-white)"};
        }
      `}</style>
    </>
  );
};

export default tooltipContent;
