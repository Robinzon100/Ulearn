import { FC, memo, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { NormalSizes } from "./prop-type";

//! ===========================OUR IMPORTS
import { ButtonInterface } from "components/global_components/button/Button.interface";
import { getButtonSize, getButtonColors, getButtonGhostColors } from "./style";
import Loading from "components/global_components/loading/loading";

const Button: FC<ButtonInterface> = ({title,className,color,size,ghost,linkStyle,onClick,loading,icon,iconStyle,iconRight,route,disabled,
}) => {
  useEffect(() => {
    if (route && onClick) {
      console.warn("button can only have route or clikHandler");
    }
  }, []);

  const router = useRouter();
  const {height,minWidth,padding,width,fontSize,fontFamily} = useMemo(() => getButtonSize(size), [size]);
  const { ...props } = useMemo(() => getButtonColors(color, ghost), [color]);
  
  return (
    <>
      <button
        onClick={() =>
          route ? (!disabled ? router.push(route) : onClick) : null
        }
        className={`btn ${className}`}
        style={disabled ? {cursor: "not-allowed",boxShadow: `${props.btnShadowDisabled}`,opacity:"0.5",} : linkStyle}>
            
        {icon && (
        <span className="icon_base-style icon" style={{filter:"drop-shadow(0px 2.2px 2.5px rgba(0, 0, 0, 0.14))"}}>
            {icon}
           </span>
        )}

        <p className="title" style={disabled ? { pointerEvents: "none" } : {}}>
          {title}
        </p>
        {/* <Loading/> */}

        {iconRight && (
          <span
            className="icon_base-style iconRight" style={{filter:"drop-shadow(0px 2.2px 2.5px rgba(0, 0, 0, 0.14))"}}>
            {iconRight}
          </span>
        )}

        <style jsx>{`
          .btn {
            text-decoration: none;
            display: block;
            border-radius: ${props.borderRadius};
            background: ${props.bg};
            box-shadow: ${props.boxShadowDefault};
            width: ${width};
            height: ${height};
            padding: ${padding};
            position: relative;
            border-image: none;
            text-decoration: none;
            cursor: pointer;
            border: ${props.border};
            outline: none !important;
            transition: background-color 200ms ease 0ms,
              box-shadow 200ms ease 0ms, border 200ms ease 0ms,
              color 200ms ease 0ms;
          }

          .btn:enabled:hover{
            box-shadow: ${props.btnShadowHover};
            background: ${props.bgHover};
            
          }

          .btn:enabled:hover .title {
            color: ${props.textColorHover};
          }
          .btn:enabled:hover .icon_base-style {
            color: ${props.btnIconHover};
          }

          .btn:enabled:active {
            box-shadow: ${props.btnShadowActive};
            border: ${props.btnBorderActive};
            background: ${props.bg};
            
          }

          .btn:enabled:active .title {
            color: ${props.btnTextActive};
          }
          .btn:enabled:active .icon_base-style {
            color: ${props.btnIconActive};
          }


          .title {
            color: ${props.textColor};
            font-size: ${fontSize};
            font-family: ${fontFamily};
            text-align: center;
          }

          .icon_base-style {
            position: absolute;
            justify-content: center;
            display: flex;
            position: absolute;
            align-items: center;
            z-index: 1;
            top: 50%;
            color: ${props.iconColor};
          }

          .icon {
            left: 15px;
            transform: translate(50%, -50%);
          }

          .iconRight {
            right: 15px;
            transform: translate(-50%, -50%);
          }
        `}</style>
      </button>
    </>
  );
};

export default memo(Button);
