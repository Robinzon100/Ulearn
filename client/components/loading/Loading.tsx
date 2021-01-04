import { memo } from "react";
import { ILoadingInterface } from "../../interfaces/global.interface";

const Loading: React.FC<ILoadingInterface> = ({bgColor,padding,style,width}) => {
  return (
    <div className="btn-loading" style={style}>
      <div className="dot-wrapper">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>




      <style jsx>{`
        .btn-loading {
          display: inline-flex;
          align-items: center;
          width: 100%;
          height: 100%;
          padding: ${padding};
        }

        .dot-wrapper {
          z-index: 2;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: transparent;
          user-select: none;
        }

        .dot {
          z-index: 2;
          width: 4px;
          height: 26px;
          background: ${bgColor};
          /* opacity: 1; */
          border-radius: 33px;
          transform: scale(1);
          display: inline-block;
          margin: 2px;
        }
        .dot:nth-child(1) {
          animation: pulse 0.5s ease infinite alternate;
          animation-delay: 2.25s;
        }
        .dot:nth-child(2) {
          animation: pulse 0.5s ease infinite alternate;
          animation-delay: 1.5s;
        }
        .dot:nth-child(3) {
          animation: pulse 0.5s ease infinite alternate;
        }
        .dot:nth-child(4) {
          animation: pulse 0.5s ease infinite alternate;
          animation-delay: 1.5s;
        }
        .dot:nth-child(5) {
          animation: pulse 0.5s ease infinite alternate;
          animation-delay: 2.25s;
        }

        @keyframes pulse {
          from,
          40% {
            transform: scale(1.2);
            opacity: 0.8;
          }
          100%,
          to {
            opacity: 1;
            transform: scale(0.8);
          }
        }
      `}</style>
    </div>
  );
};

export default memo(Loading);
