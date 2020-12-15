import { FC, memo, useEffect, useMemo } from "react";
import { useRouter } from "next/router";

//! ===========================OUR IMPORTS
import { ButtonInterface } from "components/global_components/button/Button.interface";
import { getButtonSize, getButtonColors } from "./buttons.style";
import Loading from "components/global_components/button/Button-loading";
import { blockClicks } from './button.utils';

const Button: FC<ButtonInterface> = ({
  title,
  className,
  color,
  size,
  stroke,
  linkStyle,
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



  const { height, minWidth, padding, width, fontSize, fontFamily, iconPosition } = useMemo(() => getButtonSize(size), [size]);
  const { ...colors } = useMemo(() => getButtonColors(color, stroke), [color]);




  return (
    <>
      <button
        onClick={blockClicks(route, disabled, loading, onClick, router)}
        className={`btn ${className}`}
        style={
          disabled
            ? {
              cursor: "not-allowed",
              boxShadow: `${colors.btnShadowDisabled}`,
              opacity: "0.5",
              pointerEvents: 'none'
            }
            : linkStyle
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
          <Loading bgColor={color == 'white' || stroke ? colors.textColor : 'white'} padding={padding} />
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
            background: ${stroke ? 'white' : colors.bg};
            box-shadow: ${colors.defaultShadow};
            width: ${buttonWidth ? buttonWidth : width};
            height: ${height};
            padding: ${padding};
            position: relative;
            border-image: none;
            text-decoration: none;
            cursor: pointer;
            border: ${stroke ? colors.border : 'none'};
            outline: none !important;
            transition: all .2s ease;
          }

          .btn:hover {
            box-shadow: ${colors.defaultShadow};
            background: ${stroke ? colors.textColor :colors.bgHover};
          }
        
          .btn:hover .title {
            color: ${colors.textColorHover};
          }
          .btn:active .title {
            color: ${colors.textColor};

          }
          .btn:hover .icon_base-style {
            color: ${colors.btnIconHover};
          }
          /* .btn:hover .icon_base-style svg * {
            fill: white !important;
          }
          .btn:hover > * {
            stroke: white;
          } */


          .btn:active {
            box-shadow: ${colors.btnShadowActive};
            background: ${colors.bg};
          }

          .btn[data-filled="true"]:enabled:active {
            box-shadow: ${colors.btnShadowActive};
            background: ${colors.bg};
          }

          .btn .title {
            color: ${colors.btnTextActive};
          }
          .btn .icon_base-style {
            color: ${colors.btnIconActive};
          }



          .title {
            color: ${color === 'black' || stroke == true ? colors.textColor : 'white'};
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
            color: ${colors.iconColor};
            filter: ${colors.iconBoxShadow};
            -webkit-filter: ${colors.iconBoxShadow};
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
