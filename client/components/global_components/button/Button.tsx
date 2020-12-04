import { FC, memo } from "react";

import { ButtonInterface } from "components/global_components/button/Button-interface";

const Button: FC<ButtonInterface> = (
  {
    title,
    className,
    linkStyle,
    Clickhandler,
    loading,
    icon,
    iconStyle,
    iconRight,
    route,
  },
  ref
) => {
  // const { bg, border, color } = useMemo(() => getButtonColors())

  return (
    <>
      <a
        onClick={Clickhandler}
        className={`btn ${className}`}
        style={linkStyle}
        href={route ? route : null}
      >
        {icon && (
          <span className="icon" style={iconStyle}>
            {icon}
          </span>
        )}

        <p style={{ color: "black" }}>{title}</p>

        {iconRight && (
          <span className="iconRight" style={iconStyle}>
            {iconRight}
          </span>
        )}
      </a>
    </>
  );
};

export default memo(Button);
