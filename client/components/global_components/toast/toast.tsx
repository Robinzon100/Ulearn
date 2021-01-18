import { FC, useEffect, useState } from "react";
import {XCircle} from "react-feather";

import { Itoast } from './toast.interface';
import {getColors,getToastSize} from "./toast.style";


const toast:FC<Itoast> = ({
    title,
    delay,
    color,
    width,
    size
}) => {
    

  return (
    <>
      <div className="notification-container noselect bottom-right">
        <div className="notification toast">
          <div>
            <p className="notification-message regular f-size-p3">
              {title}
            </p>
          </div>
          <div className="delete_btn">
              <XCircle color={color === "white" ? "var(--primary-dark)" : "var(--primary-white)"}/>
          </div>
        </div>
      </div>

      <style jsx>{`
        .notification-container {
          box-sizing: border-box;
          position: fixed;
          z-index: 999999;
        }

        .bottom-right {
          transition: transform 0.6s ease-in-out;
          animation: toast-in-right 0.7s;
          /* transform: translate(100%,100%); */
          /* right: -100%;
          top: 90%; */
          bottom: 12px;
          right: 12px;
        }

        .notification {
          background: ${getColors(color).background};
          transition: 0.3s ease;
          position: relative;
          pointer-events: auto;
          overflow: hidden;
          padding:${size ? getToastSize(size).padding : "30px"};
          border-radius: 8px;
          box-shadow: ${getColors(color).defaultShadow};
          display: flex;
          justify-content: space-between;
          align-items: center;
          /* display:inline-block; */
          width: ${width ? width : "auto"};
        }

        .delete_btn {
            margin-left:2rem;
        }

        .notification:hover {
          box-shadow: ${getColors(color).hoverShadow};
          cursor: pointer;
        }

        .notification:focus {
          box-shadow: ${getColors(color).activeShadow};
        }

        .notification-message {
            color:${color === "white" ? "var(--primary-dark)" : "var(--primary-white)"};
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        @keyframes toast-in-right {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes toast-in-left {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default toast;
