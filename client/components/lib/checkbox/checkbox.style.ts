import {ICheckBoxSizeGroup,ICheckBoxStyle} from "./checkbox.interface";

export const getCheckBoxColor = (color: string): ICheckBoxStyle => {
  const colors = {
    white: {
      bg: "var(--primary-white)",
    //   defaultShadow: "0px 20px 50px -10px rgba(0, 0, 0, 0.14)",
      hoverShadow:"0px 29px 80px -10px rgba(0, 0, 0, 0.12)",
    },
  };
  return colors[color];
};

export const getCheckBoxSize = (size: string): ICheckBoxSizeGroup => {
  const layouts = {
    small: {
      padding: "var(--small-button-padding)",
      fontSize: "var(--small-button-fontSize)",
      iconPosition: "0px 6px"
    },
    medium: {
      padding: "var(--medium-button-padding)",
      fontSize: "var(--medium-button-fontSize)",
      iconPosition: "0px 15px",
    },
    large: {
      padding: "var(--large-button-padding)",
      fontSize: "var(--large-button-fontSize)",
      iconPosition: "0px 22px",
    },
  };
  if (!size) return layouts.medium;
  return layouts[size];
};
