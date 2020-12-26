import { FC, memo, useEffect, useMemo } from "react";
import { useRouter } from "next/router";

//! ===========================OUR IMPORTS
import { ButtonInterface } from "components/global_components/button/Button.interface";
import { getButtonSize, getButtonColors,getButtonStrokeColors } from "./buttons.style";
import Loading from "components/loading/Loading";
import { blockClicks } from './button.utils';

const Button: FC<ButtonInterface> = ({
  type,
  title,
  className,
  color,
  size,
  stroke,
  style,
  onClick,
  loading,
  icon,
  iconStyle,
  iconRight,
  route,
  disabled,
  buttonWidth
}) => {

  const router = useRouter();

  useEffect(() => {

    if (route && onClick) {
      console.warn("button can only have route or clikHandler");
    }
  }, []);



  const { height,padding, width, fontSize, fontFamily, iconPosition } = useMemo(() => getButtonSize(size), [size]);
  const { ...fillColors } = useMemo(() => getButtonColors(color,stroke), [color,stroke]);
  const { ...strokeColors } = useMemo(() => getButtonStrokeColors(stroke), [stroke]);



  return (
    <>
      <button
        onClick={blockClicks(route, disabled, loading, onClick, router)}
        type={type}
        className={`btn ${className ? className : ""}`}
        style={
          disabled || loading
            ? {
              cursor: "not-allowed",
              boxShadow: `${fillColors.btnShadowDisabled}`,
              opacity: "0.6",
              pointerEvents: 'none'
            }
            : style
        }>
        {size !== "mini" && icon && !loading &&(
          <span
            className="icon_base-style icon"
            style={{ filter: "drop-shadow(0px 2.2px 2.5px rgba(0, 0, 0, 0.14))" }}>
            {icon}
          </span>
        )}

        <p className="title" style={disabled || loading ? { pointerEvents: "none" } : {}}>
          {!loading ? title : null}
        </p>


        {loading && (
          <Loading bgColor={color == 'white' || stroke ? fillColors.textColor : 'white'} padding={padding} />
        )}


        {size !== "mini" && iconRight && !loading && (
          <span className="icon_base-style iconRight">
            {iconRight}
          </span>
        )}






        <style jsx>{`
          .btn {
            user-select: none;
            text-decoration: none;
            display: block;
            border-radius: 8px;
            background: ${stroke ? "white" : fillColors.bg};
            box-shadow: ${stroke ? strokeColors.defaultShadow : fillColors.defaultShadow};
            width: ${buttonWidth ? buttonWidth : width};
            height: ${height};
            padding: ${padding};
            position: relative;
            border-image: none;
            text-decoration: none;
            cursor: pointer;
            border: ${stroke ? strokeColors.border : 'none'};
            outline: none !important;
            transition: all .2s ease;
          }

          .btn:hover {
            box-shadow:  ${stroke ? strokeColors.hoverShadow : fillColors.hoverShadow};
            background: ${stroke && strokeColors.bgHover};
          }

          .btn:active {
            box-shadow: ${stroke ? strokeColors.activeShadow :  '0 0 10px -5px inset'};
            background: ${fillColors.bg ?  fillColors.bg : "white"};
          }
          
          .btn:hover .title {
            color: ${!stroke && !color || stroke || color && color != "white" ?   "white" : strokeColors.textColor };
           }
           .btn:active .title {
            color: ${stroke || color === "white" ? strokeColors.textColor :  "white"};
          } 

          .title {
            color: ${stroke || color === "white" ?   strokeColors.textColor : "white" };
            font-size: ${fontSize};
            font-family: ${fontFamily};
            text-align: center;
            font-weight: 400;
            letter-spacing: 0.5px;
          }


          .icon_base-style {
            position: absolute;
            justify-content: center;
            display: flex;
            position: absolute;
            align-items: center;
            z-index: 1;
            top: 50%;
            color: ${ stroke || color === "white" ?  strokeColors.textColor : "white"};
            filter: ${fillColors.iconBoxShadow};
            -webkit-filter: ${fillColors.iconBoxShadow};
          }

          
          .btn:hover .icon_base-style {
            color: ${!stroke && !color || stroke || color && color != "white" ?   "white" : strokeColors.textColor};
          }

          .btn:active .icon_base-style {
            color: ${stroke || color === "white" ? strokeColors.textColor:  "white"};
          } 

          .icon {
            left: ${iconPosition};
            transform: translate(50%, -50%);
          }

        .iconRight {
            right: ${iconPosition};
            transform: translate(-50%, -50%);
          }
        `}</style>
      </button>
    </>
  );
};

export default memo(Button);
