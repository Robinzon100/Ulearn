import { ButtonStyleInterface,ButtonSizeGroup } from "./Button.interface";

export const buttonStrokeColors = {
  primary: {
    bgHover: "var(--primary-blue)",
    border: "2px solid var(--primary-blue)",
    defaultShadow: "var(--btn-shadow) rgba(var(--primary-shadow--rgb),0.2)",
    hoverShadow:"var(--btn-hover-shadow) rgba(var(--primary-shadow--rgb),0.45)",
    activeShadow:"var(--btn-active-stroke) var(--primary-blue)",
    textColor: "var(--secondary-dark-blue)",
  },
  blue: {
    bgHover: "var(--primary-dark-blue)",
    border: "2px solid var(--primary-dark-blue)",
    defaultShadow: "var(--btn-shadow) rgba(var(--blue-shadow--rgb),0.2)",
    hoverShadow:"var(--btn-hover-shadow) rgba(var(--blue-shadow--rgb),0.45)",
    activeShadow:"var(--btn-active-stroke) var(--primary-dark-blue)",
    textColor: "var(--secondary-dark-dark-blue)",
  },
  yellow: {
    bgHover: "var(--primary-yellow)",
    border: "2px solid var(--primary-yellow)",
    defaultShadow: "var(--btn-shadow) rgba(var(--yellow-shadow--rgb),0.2)",
    hoverShadow:"var(--btn-hover-shadow) rgba(var(--yellow-shadow--rgb),0.45)",
    activeShadow:"var(--btn-active-stroke) var(--primary-yellow)",
    textColor: "var(--secondary-dark-yellow)",
  },
  green: {
    bgHover: "var(--primary-green)",
    border: "2px solid var(--primary-green)",
    defaultShadow: "var(--btn-shadow) rgba(var(--green-shadow--rgb),0.2)",
    hoverShadow:"var(--btn-hover-shadow) rgba(var(--green-shadow--rgb),0.45)",
    activeShadow:"var(--btn-active-stroke) var(--primary-green)",
    textColor: "var(--secondary-dark-green)",
  },
  red: {
    bgHover: "var(--primary-red)",
    border: "2px solid var(--primary-red)",
    defaultShadow: "var(--btn-shadow) rgba(var(--red-shadow--rgb),0.2)",
    hoverShadow:"var(--btn-hover-shadow) rgba(var(--red-shadow--rgb),0.45)",
    activeShadow:"var(--btn-active-stroke) var(--primary-red)",
    textColor: "var(--secondary-dark-red)",
  },
  black: {
    bgHover: "var(--primary-dark)",
    border: "2px solid var(--primary-dark)",
    defaultShadow: "var(--btn-shadow) rgba(var(--black-shadow--rgb),0.2)",
    hoverShadow:"var(--btn-hover-shadow) rgba(var(--black-shadow--rgb),0.45)",
    activeShadow:"var(--btn-active-stroke) var(--primary-dark)",
    textColor: "var(--primary-dark)",
  }

};
export const getButtonStrokeColors = (stroke: string): ButtonStyleInterface => {
    if (!stroke) return buttonStrokeColors.black;
    return buttonStrokeColors[stroke];
};
  
export const buttonStyleInterface = {
  primary: {
    bg: "var(--primary-button-gradient)",
    defaultShadow: "var(--btn-shadow) rgba(var(--primary-shadow--rgb),0.2)",
    hoverShadow:"var(--btn-hover-shadow) rgba(var(--primary-shadow--rgb),0.45)",
    activeShadow:"var(--btn-active-shadow) rgba(var(--btn-primary-shadow),0.73)",
  },
  blue: {
    bg: "var(--blue-button-gradient)",
    defaultShadow: "var(--btn-shadow) rgba(var(--blue-shadow--rgb),0.2)",
    hoverShadow:"var(--btn-hover-shadow) rgba(var(--blue-shadow--rgb),0.45)",
    activeShadow:"var(--btn-active-shadow) rgba(var(--btn-blue-shadow),0.73)",
  },
  yellow: {
    bg: "var(--yellow-button--gradient)",
    defaultShadow: "var(--btn-shadow) rgba(var(--yellow-shadow--rgb),0.2)",
    hoverShadow:"var(--btn-hover-shadow) rgba(var(--yellow-shadow--rgb),0.45)",
    activeShadow:"var(--btn-active-shadow) rgba(var(--btn-yellow-shadow),0.73)",
  },
  green: {
    bg: "var(--green-button-gradient)",
    defaultShadow: "var(--btn-shadow) rgba(var(--green-shadow--rgb),0.2)",
    hoverShadow:"var(--btn-hover-shadow) rgba(var(--green-shadow--rgb),0.45)",
    activeShadow:"var(--btn-active-shadow) rgba(var(--btn-green-shadow),0.73)",
  },
  red: {
    bg: "var(--red-button-gradient)",
    defaultShadow: "var(--btn-shadow) rgba(var(--red-shadow--rgb),0.2)",
    hoverShadow:"var(--btn-hover-shadow) rgba(var(--red-shadow--rgb),0.45)",
    activeShadow:"var(--btn-active-shadow) rgba(var(--btn-red-shadow),0.73)",
  },
  black: {
    bg: "var(--black-button-gradient)",
    textColor: "var(--primary-white)",
    defaultShadow: "var(--btn-shadow) rgba(var(--black-shadow--rgb),0.2)",
    hoverShadow:"var(--btn-hover-shadow) rgba(var(--black-shadow--rgb),0.45)",
    activeShadow:"var(--btn-active-shadow) rgba(var(--btn-black-active),0.73)",
  },
  white: {
    bg: "var(--primary-white-button-gradient)",
    textColor: "var(--primary-dark)",
    defaultShadow: "var(--btn-shadow) rgba(var(--primary-white-shadow--rgb),0.2)",
    hoverShadow:"var(--btn-hover-shadow) rgba(var(--primary-white-shadow--rgb),0.45)",
    activeShadow:"var(--btn-active-shadow) rgba(var(--btn-white-shadow),0.73)",
    iconColor:"var(--primary-dark)"
  },
};


export const getButtonColors = (color: string,stroke:string): ButtonStyleInterface => {
   if (!color && !stroke) return buttonStyleInterface.black;
  return buttonStyleInterface[color];
};

export const getButtonSize = (size: string): ButtonSizeGroup => {
  const layouts = {
    mini: {
      padding: "var(--mini-button-padding)",
    },
    small: {
      padding: "var(--small-button-padding)",
      iconPosition: "2%",
    },
    medium: {
      padding: "var(--medium-button-padding)",
      iconPosition: "6%",
    },
    large: {
      padding: "var(--large-button-padding)",
      iconPosition: "8%",
    },
  };

  if (!size) return layouts.medium;

  return layouts[size];
};
