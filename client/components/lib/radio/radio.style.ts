import {IRadioSizeGroup,IRadioStyle} from "./radio.interface";

export const getRadioColor = (color: string): IRadioStyle => {
  const colors = {
    white: {
      bg: "var(--primary-grey)",
      defaultShadow: "var(--btn-shadow) rgba(var(--primary-white-shadow--rgb),0.2)",
      hoverShadow:"var(--btn-hover-shadow) rgba(var(--primary-white-shadow--rgb),0.45)",
    }
  };
  return colors[color];
};

export const getRadioSize = (size: string): IRadioSizeGroup => {
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
