import { FC, memo, useEffect, useMemo } from "react";
import { useRouter } from "next/router";

//! ─── OWN IMPORTS ────────────────────────────────────────────────────────────────
import { ButtonInterface } from "components/lib/button/Button.interface";
import { getButtonSize, getButtonColors, getButtonStrokeColors } from "./buttons.style";
import Loading from "components/lib/loading/Loading";
import { blockClicks } from './button.utils';






const Button: FC<ButtonInterface> = ({
  type,
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
  width,
  children,
  maxWidth
}) => {

  const router = useRouter();




  useEffect(() => {
    if (route && onClick) {
      console.warn("button can only have route or clikHandler");
    }
  }, []);



  const { ...fillColors } = useMemo(() => getButtonColors(color, stroke), [color, stroke]);
  const { ...strokeColors } = useMemo(() => getButtonStrokeColors(stroke), [stroke]);





  return (
    <>
      <button
        onClick={blockClicks(route, disabled, loading, onClick, router)}
        type={type}
        className={`btn ${className ? className : ""}`}
        style={style}>

        {size !== "mini" && icon && !loading && (
          <span
            className="icon_base-style icon"
            style={iconStyle}>
            {icon}
          </span>
        )}

        <div className="title" style={disabled || loading ? { cursor: "not-allowed", pointerEvents: "none" } : {}}>
          {!loading && children}
        </div>


        {loading && (
          <Loading
            bgColor={color == 'white' || stroke ? fillColors.textColor : 'white'}
            padding={getButtonSize(size).padding} />
        )}


        {size !== "mini" && iconRight && !loading && (
          <span className="icon_base-style iconRight" style={iconStyle}>
            {iconRight}
          </span>
        )}






        <style jsx>{`
          .btn {
            max-width:${maxWidth};
            opacity: ${disabled || loading ? 0.8 : 1};
            cursor: ${disabled || loading ? "not-allowed" : "pointer"};
            pointer-events: ${disabled || loading ? "none" : "auto"};
            user-select: none;
            text-decoration: none;
            display: block;
            border-radius: 8px;
            background: ${stroke ? "white" : fillColors.bg};
            box-shadow: ${stroke ? strokeColors.defaultShadow : fillColors.defaultShadow};
            width: ${width && width};
            height: auto;
            padding: ${getButtonSize(size).padding};
            position: relative;
            border-image: none;
            text-decoration: none;
            border: ${stroke ? strokeColors.border : 'none'};
            outline: none !important;
            transition: all .2s ease;
            user-select: none;
            vertical-align: bottom;
            white-space: nowrap;
          }

          .btn:hover {
            box-shadow:  ${stroke ? strokeColors.hoverShadow : fillColors.hoverShadow};
            background: ${stroke && strokeColors.bgHover};
          }

          .btn:active {
            box-shadow: ${stroke ? strokeColors.activeShadow : '0 0 10px -5px inset'};
            background: ${fillColors.bg ? fillColors.bg : "white"};
          }
          
          .btn:hover .title {
            color: ${!stroke && !color || stroke || color && color != "white" ? "white" : strokeColors.textColor};
           }
           .btn:active .title {
            color: ${stroke || color === "white" ? strokeColors.textColor : "white"};
          } 

          .title {
            color: ${stroke || color === "white" ? strokeColors.textColor : "white"};
            text-align: center;
            letter-spacing: 0.5px;
            margin: ${!width && '0 1rem'}
          }


          .icon_base-style {
            position: absolute;
            justify-content: center;
            display: flex;
            position: absolute;
            align-items: center;
            z-index: 1;
            top: 50%;
            color: ${stroke || color === "white" ? strokeColors.textColor : "white"};
            filter: ${fillColors.iconBoxShadow};
            -webkit-filter: ${fillColors.iconBoxShadow};
          }

          
          .btn:hover .icon_base-style {
            color: ${!stroke && !color || stroke || color && color != "white" ? "white" : strokeColors.textColor};
          }

          .btn:active .icon_base-style {
            color: ${stroke || color === "white" ? strokeColors.textColor : "white"};
          } 

          .icon {
            left: ${getButtonSize(size).iconPosition};
            transform: translate(50%, -50%);
          }

        .iconRight {
            right: ${getButtonSize(size).iconPosition};
            transform: translate(-50%, -50%);
          }
        `}</style>
      </button>
    </>
  );
};

export default memo(Button);
