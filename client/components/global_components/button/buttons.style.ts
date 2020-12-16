import {ButtonStyleInterface,ButtonSizeGroup} from "./Button.interface";

export const buttonStrokeColors = {
  primary: {
    bgHover: "var(--primary-button-gradient)",
    border: "2px solid var(--primary-blue)",
    defaultShadow: "var(--btn-shadow) rgba(var(--btn-primary-shadow),0.2)",
    hoverShadow:"var(--btn-hover-shadow) var(--primary-blue),0.37)",
    activeShadow:"var(--btn-active-stroke) var(--primary-blue)",
    textColor: "var(--secondary-dark-blue)",
  },
  blue: {
    bgHover: "var(--blue-button-gradient)",
    border: "2px solid var(--primary-dark-blue)",
    defaultShadow: "var(--btn-shadow) rgba(var(--btn-blue-shadow),0.2)",
    hoverShadow:"var(--btn-hover-shadow) rgba(var(--btn-blue-shadow),0.37)",
    activeShadow:"var(--btn-active-stroke) var(--primary-dark-blue)",
    textColor: "var(--secondary-dark-dark-blue)",
  },
  yellow: {
    bgHover: "var(--yellow-button--gradient)",
    border: "2px solid var(--primary-yellow)",
    defaultShadow: "var(--btn-shadow) rgba(var(--btn-yellow-shadow),0.2)",
    hoverShadow:"var(--btn-hover-shadow) rgba(var(--btn-yellow-shadow),0.37)",
    activeShadow:"var(--btn-active-stroke) var(--primary-yellow)",
    textColor: "var(--secondary-dark-yellow)",
  },
  green: {
    bgHover: "var(--green-button-gradient)",
    border: "2px solid var(--primary-green)",
    defaultShadow: "var(--btn-shadow) rgba(var(--btn-green-shadow),0.2)",
    hoverShadow:"var(--btn-hover-shadow) rgba(var(--btn-green-shadow),0.37)",
    activeShadow:"var(--btn-active-stroke) var(--primary-green)",
    textColor: "var(--secondary-dark-green)",
  },
  red: {
    bgHover: "var(--red-button-gradient)",
    border: "2px solid var(--primary-red)",
    defaultShadow: "var(--btn-shadow) rgba(var(--btn-red-shadow),0.2)",
    hoverShadow:"var(--btn-hover-shadow) rgba(var(--btn-red-shadow),0.37)",
    activeShadow:"var(--btn-active-stroke) var(--primary-red)",
    textColor: "var(--secondary-dark-red)",
  },
  black: {
    bgHover: "var(--black-button-gradient)",
    border: "2px solid var(--primary-dark)",
    defaultShadow: "var(--btn-shadow) rgba(var(--btn-red-shadow),0.2)",
    hoverShadow:"var(--btn-hover-shadow) rgba(var(--btn-black-shadow),0.37)",
    activeShadow:"var(--btn-active-stroke) var(--primary-dark)",
    textColor: "var(--primary-dark)",
  }

};
export const getButtonStrokeColors = (stroke: string): ButtonStyleInterface => {
    if (!stroke) return buttonStrokeColors.black;
    return buttonStrokeColors[stroke] || null;
  };
  



export const buttonStyleInterface = {
  primary: {
    bg: "var(--primary-button-gradient)",
    defaultShadow: "var(--btn-shadow) rgba(var(--btn-primary-shadow),0.2)",
    hoverShadow:"var(--btn-hover-shadow) rgba(var(--btn-primary-shadow),0.37)",
    activeShadow:"var(--btn-active-shadow) rgba(var(--btn-primary-shadow),0.73)",
  },
  blue: {
    bg: "var(--blue-button-gradient)",
    defaultShadow: "var(--btn-shadow) rgba(var(--btn-blue-shadow),0.2)",
    hoverShadow:"var(--btn-hover-shadow) rgba(var(--btn-blue-shadow),0.37)",
    activeShadow:"var(--btn-active-shadow) rgba(var(--btn-blue-shadow),0.73)",
  },
  yellow: {
    bg: "var(--yellow-button--gradient)",
    defaultShadow: "var(--btn-shadow) rgba(var(--btn-yellow-shadow),0.2)",
    hoverShadow:"var(--btn-hover-shadow) rgba(var(--btn-yellow-shadow),0.37)",
    activeShadow:"var(--btn-active-shadow) rgba(var(--btn-yellow-shadow),0.73)",
  },
  green: {
    bg: "var(--green-button-gradient)",
    defaultShadow: "var(--btn-shadow) rgba(var(--btn-green-shadow),0.2)",
    hoverShadow:"var(--btn-hover-shadow) rgba(var(--btn-green-shadow),0.37)",
    activeShadow:"var(--btn-active-shadow) rgba(var(--btn-green-shadow),0.73)",
  },
  red: {
    bg: "var(--red-button-gradient)",
    defaultShadow: "var(--btn-shadow) rgba(var(--btn-red-shadow),0.2)",
    hoverShadow:"var(--btn-hover-shadow) rgba(var(--btn-red-shadow),0.37)",
    activeShadow:"var(--btn-active-shadow) rgba(var(--btn-red-shadow),0.73)",
  },
  black: {
    bg: "var(--black-button-gradient)",
    textColor: "var(--white)",
    defaultShadow: "var(--btn-shadow) rgba(var(--btn-red-shadow),0.2)",
    hoverShadow:"var(--btn-hover-shadow) rgba(var(--btn-black-shadow),0.37)",
    activeShadow:"var(--btn-active-shadow) rgba(var(--btn-black-active),0.73)",
  },
  white: {
    bg: "var(--white-button-gradient)",
    textColor: "var(--primary-dark)",
    defaultShadow: "var(--btn-shadow) rgba(var(--btn-white-shadow),0.2)",
    hoverShadow:"var(--btn-hover-shadow) rgba(var(--btn-white-shadow),0.37)",
    activeShadow:"var(--btn-active-shadow) rgba(var(--btn-white-shadow),0.73)",
    iconColor:"var(--primary-dark)"
  },
};


export const getButtonColors = (color: string,): ButtonStyleInterface => {
  if (!color) return buttonStyleInterface.white;
//   if (stroke) return getButtonStrokeColors(color);
  return buttonStyleInterface[color] || null;
};

export const getButtonSize = (size: string): ButtonSizeGroup => {
  const layouts = {
    mini: {
      height: "auto",
      width: "auto",
      padding: "var(--mini-button-padding)",
      fontSize: "var(--mini-button-fontSize)",
      fontFamily: "var(--button-fontFamily)",
    },
    small: {
      height: "auto",
      width: "auto",
      padding: "var(--small-button-padding)",
      fontSize: "var(--smal-button-fontSize)",
      fontFamily: "var(--button-fontFamily)",
      iconPosition: "2%",
    },
    medium: {
      height: "auto",
      width: "auto",
      padding: "var(--medium-button-padding)",
      fontSize: "var(--medium-button-fontSize)",
      fontFamily: "var(--button-fontFamily)",
      iconPosition: "6%",
    },
    large: {
      height: "auto",
      width: "auto",
      padding: "var(--large-button-padding)",
      fontSize: "var(--large-button-fontSize)",
      fontFamily: "var(--button-fontFamily)",
      iconPosition: "8%",
    },
  };

  if (!size) return layouts.medium;

  return layouts[size];
};
