import { FC, memo } from "react";
import { useRouter } from "next/router";
import { ButtonInterface } from "components/global_components/button/Button-interface";
import Loading from "components/global_components/loading/loading";
import {useEffect} from 'react';

const Button: FC<ButtonInterface> = ({
  title,
  className,
  backgroudColor,
  btnSizes,
  linkStyle,
  clickHandler,
  loading,
  icon,
  iconStyle,
  iconRight,
  route,
  disabled
}) => {


  useEffect(() => {
    if (route && clickHandler) {
      console.warn('button can only have route or clikHandler')
    }
  }, [])
  
  
  
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => route ? router.push(route) : clickHandler}
        className={`btn ${className} ${backgroudColor}`}
        style={linkStyle}

      >
        {icon && (
          <span className="icon_base-style icon" style={iconStyle}>
            {icon}
          </span>
        )}

        <p className="title">{title}</p>
        {/* <Loading/> */}

        {iconRight && (
          <span className="icon_base-style iconRight" style={iconStyle}>
            {iconRight}
          </span>
        )}

        <style jsx>{`
          .btn {
            text-decoration: none;
            border-radius: 8px;
            width: 30rem;
            padding: 1.5rem;
            display: block;
            text-align: center;
            position: relative;
            border-image: none;
            text-decoration: none;
            cursor: pointer;
            border: none;
            color: var(--white);
            outline: none !important;
          }
          .title {
            color: var(--primary-dark);
          }

          .icon_base-style {
            position: absolute;
            justify-content: center;
            display: flex;
            position: absolute;
            align-items: center;
            z-index: 1;
            top: 50%;
          }

          .icon {
            left: 0;
            transform: translate(50%, -50%);
          }

          .iconRight {
            right: 0;
            transform: translate(-50%, -50%);
          }
        `}</style>
      </button>
    </>
  );
};

export default memo(Button);
