import { ButtonStyleInterface, HoverState, ActiveState, ButtonSizeGroup } from "./Button.interface";

export const getButtonStrokeColors = (color: string): HoverState & ActiveState => {
  //! არ იღებს გრადიენტებს ამიტომ არის base stilebidan ფერები
  const buttonStrokeColors = {
    primary: {
      bg: "var(--white)",
      bgHover: "var(--primary-button-gradient)",
      border: "2px solid var(--primary-blue)",
      btnShadow: "var(--btn-shadow-size) var(--btn-primary-shadow)",
      btnShadowActive: "0 0 0 0.4rem  var(--primary-blue)",
      loadingColorBg: "var(--primary-dark)",
      textColor: "var(--secondary-dark-blue)",
      iconColor: "var(--primary-blue)",
      textColorHover: "var(--white)",
      btnIconHover: "var(--white)",
      btnTextActive: "var(--primary-blue)",
      btnIconActive: "var(--primary-blue)",
    },
    blue: {
      bg: "var(--white)",
      bgHover: "var(--blue-button-gradient)",
      border: "2px solid var(--primary-dark-blue)",
      btnShadow: "var(--btn-shadow-size) var(--btn-blue-shadow)",
      btnShadowActive: "0 0 0 0.4rem  var(--primary-dark-blue)",
      loadingColorBg: "var(--primary-dark)",
      textColor: "var(--primary-dark-blue)",
      iconColor: "var(--primary-dark-blue)",
      textColorHover: "var(--white)",
      btnIconHover: "var(--white)",
      btnTextActive: "var(--primary-dark-blue)",
      btnIconActive: "var(--primary-dark-blue)",
    },
    yellow: {
      bg: "var(--white)",
      bgHover: "var(--yellow-button--gradient)",
      border: "2px solid var(--primary-yellow)",
      btnShadow: "var(--btn-shadow-size) var(--btn-yellow-shadow)",
      btnShadowActive: "0 0 0 0.4rem  var(--primary-yellow)",
      loadingColorBg: "var(--primary-dark)",
      textColor: "var(--secondary-dark-yellow)",
      iconColor: "var(--primary-yellow)",
      textColorHover: "var(--white)",
      btnIconHover: "var(--white)",
      btnTextActive: "var(--primary-yellow)",
      btnIconActive: "var(--primary-yellow)",
    },
    green: {
      bg: "var(--white)",
      bgHover: "var(--green-button-gradient)",
      border: "2px solid var(--primary-green)",
      btnShadow: "var(--btn-shadow-size) var(--btn-green-shadow)",
      btnShadowActive: "0 0 0 0.4rem  var(--primary-green)",
      loadingColorBg: "var(--primary-dark)",
      textColor: "var(--secondary-dark-green)",
      iconColor: "var(--primary-green)",
      textColorHover: "var(--white)",
      btnIconHover: "var(--white)",
      btnTextActive: "var(--primary-green)",
      btnIconActive: "var(--primary-green)",
    },
    red: {
      bg: "var(--white)",
      bgHover: "var(--red-button-gradient)",
      border: "2px solid var(--primary-red)",
      btnShadow: "var(--btn-shadow-size) var(--btn-red-shadow)",
      btnShadowActive: "0 0 0 0.4rem  var(--primary-red)",
      loadingColorBg: "var(--primary-dark)",
      textColor: "var(--secondary-dark-red)",
      iconColor: "var(--primary-red)",
      textColorHover: "var(--white)",
      btnIconHover: "var(--white)",
      btnTextActive: "var(--primary-red)",
      btnIconActive: "var(--primary-red)",
    },
    black: {
      bg: "var(--white)",
      bgHover: "var(--black-button-gradient)",
      border: "2px solid var(--primary-dark)",
      btnShadow: "var(--btn-shadow-size) var(--btn-black-shadow)",
      btnShadowActive: "0 0 0 0.4rem  var(--primary-dark)",
      loadingColorBg: "var(--primary-dark)",
      textColorHover: "var(--white)",
      btnIconHover: "var(--white)",
      btnTextActive: "var(--primary-dark)",
      btnIconActive: "var(--primary-dark)",
    },
    white: {
      bg: "var(--white-button-gradient)",
      bgHover: "var(--white-button-gradient)",
      border: "none",
      btnShadow: "var(--btn-shadow-size) var(--btn-white-shadow)",
      btnShadowActive: "none",
      loadingColorBg: "var(--primary-dark)",
    },
  };

  if (!color) return buttonStrokeColors.white

  return buttonStrokeColors[color] || null;
};
export const buttonStyleInterface = {
  primary: {
    bg: "var(--primary-button-gradient)",
    defaultShadow: "var(--btn-shadow-size) var(--btn-primary-shadow)",
  },
  blue: {
    bg: "var(--blue-button-gradient)",
    defaultShadow: "var(--btn-shadow-size) var(--btn-blue-shadow)",
  },
  yellow: {
    bg: "var(--yellow-button--gradient)",
    defaultShadow: "var(--btn-shadow-size) var(--btn-yellow-shadow)",
  },
  green: {
    bg: "var(--green-button-gradient)",
    defaultShadow: "var(--btn-shadow-size) var(--btn-green-shadow)",
  },
  red: {
    bg: "var(--red-button-gradient)",
    defaultShadow: "var(--btn-shadow-size) var(--btn-red-shadow)",
  },
  black: {
    bg: "var(--black-button-gradient)",
    defaultShadow: "var(--btn-shadow-size) var(--btn-black-shadow)",
  },
  white: {
    bg: "var(--white-button-gradient)",
    defaultShadow: "var(--btn-shadow-size) var(--btn-white-shadow)",
  },
};



export const getButtonColors = (color: string, stroke: boolean): ButtonStyleInterface & HoverState & ActiveState => {
  if (!color) return buttonStyleInterface.white
  if (stroke) return getButtonStrokeColors(color);
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
      iconPosition: "2%"
    },
    medium: {
      height: "auto",
      width: "auto",
      padding: "var(--medium-button-padding)",
      fontSize: "var(--medium-button-fontSize)",
      fontFamily: "var(--button-fontFamily)",
      iconPosition: "6%"
    },
    large: {
      height: "auto",
      width: "auto",
      padding: "var(--large-button-padding)",
      fontSize: "var(--large-button-fontSize)",
      fontFamily: "var(--button-fontFamily)",
      iconPosition: "8%"
    },
  };

  if (!size) return layouts.medium


  return layouts[size];
};
