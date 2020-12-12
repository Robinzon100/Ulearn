import { FC, memo, useEffect, useMemo } from "react";
import { useRouter } from "next/router";

//! ===========================OUR IMPORTS
import { ButtonInterface } from "components/global_components/button/Button.interface";
import { getButtonSize, getButtonColors } from "./style";
import Loading from "./Button-loading";

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
}) => {
  let clickHandler;
  useEffect(() => {
    
    if (route && onClick) {
      console.warn("button can only have route or clikHandler");
    }

    if (route) {
      clickHandler = () => router.push(route);
    }

    if (disabled || loading) {
      null;
    }

    if (!route && !disabled && !loading) {
      clickHandler = onclick;
    }
  }, []);

  const router = useRouter();
  const {height,iconPosition,padding,width,fontSize,fontFamily} = useMemo(() => getButtonSize(size), [size]);
  
  const { ...colors } = useMemo(() => getButtonColors(color, stroke), [color]);

  return (
    <>
      <button
        data-filled={stroke}
        onClick={onClick}
        className={`btn ${className}`}
        style={disabled || loading ? {
                cursor: "not-allowed",
                boxShadow: `${colors.btnShadowDisabled}`,
                opacity: "0.7",
            }: linkStyle}>


        {size !== "mini" && icon && !loading && (
          <span className="icon_base-style icon">
            {icon}
          </span>
        )}

        <p className="title" style={disabled || loading ? { pointerEvents: "none"} : {}}>
          {!loading ? title : null}
        </p>


        {loading && (
          <Loading bgColor={colors.loadingColorBg} padding={padding} />
        )}


        {size !== "mini" && iconRight && !loading && (
          <span className="icon_base-style iconRight">
            {iconRight}
          </span>
        )}






        <style jsx>{`
          .btn {
            
            text-decoration: none;
            display: block;
            border-radius: 8px;
            background: ${colors.bg};
            box-shadow: ${colors.btnShadow};
            width: ${width};
            height: ${height};
            padding: ${padding};
            position: relative;
            border-image: none;
            text-decoration: none;
            cursor: pointer;
            border: ${colors.border};
            outline: none !important;
            transition: background-color 200ms ease 0ms,
              box-shadow 200ms ease 0ms, border 200ms ease 0ms,
              color 200ms ease 0ms;
          }

          .btn:enabled:hover {
            box-shadow: ${colors.btnShadow};
            background: ${colors.bgHover};
          }
          .btn:disabled:hover {
            box-shadow: ${colors.btnShadow};
            background: ${colors.bgHover};
          }
          .btn:enabled:hover .title {
            color: ${colors.textColorHover};
          }
          .btn:enabled:hover .icon_base-style {
            color: ${colors.btnIconHover};
          }


          .btn:enabled:active {
            box-shadow: ${colors.btnShadowActive};
            background: ${colors.bg};
            
          }

          .btn[data-filled="true"]:enabled:active {
            box-shadow: ${colors.btnShadowActive};
            background: ${colors.bg};
          }

          .btn:enabled:active .title {
            color: ${colors.btnTextActive};
          }
          .btn:enabled:active .icon_base-style {
            color: ${colors.btnIconActive};
          }



          .title {
            color: ${colors.textColor};
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
            color: ${colors.iconColor};
            filter: ${colors.iconBoxShadow};
            -webkit-filter: ${colors.iconBoxShadow};
          }

          .icon {
            left: ${iconPosition};
            transform: translate(50%, -50%);
          }

          .iconRight {
            left: ${iconPosition};
            transform: translate(-50%, -50%);
          }
        `}</style>
      </button>
    </>
  );
};

export default memo(Button);
