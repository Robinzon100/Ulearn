import {ButtonStyleInterface,HoverState,ActiveState,ButtonSizeGroup} from "./Button.interface";

export const getButtonStrokeColors = (
  color: string
): HoverState & ActiveState => {
    //! არ იღებს გრადიენტებს ამიტომ არის base stilebidan ფერები
  const buttonStrokeColors = {
    primary: {
      bg: "var(--white)",
      bgHover: "var(--primary-button-gradient)",
      border: "2px solid var(--primary-blue)",
      btnShadow:"var(--btn-shadow-size) var(--btn-primary-shadow)",
      btnShadowActive: "0 0 0 0.4rem  var(--primary-blue)",
      loadingColorBg: "var(--primary-dark)",  
      textColor: "var(--primary-blue)",
      iconColor: "var(--primary-blue)",
      textColorHover: "var(--white)",
      btnIconHover: "var(--white)",
      btnTextActive: "var(--primary-blue)",
      btnIconActive: "var(--primary-blue)",
    },
    blue: {
      bg: "var(--white)",
      bgHover: "var(--blue-button-gradient)",
      border: "2px solid var(--primary-darkBlue)",
      btnShadow:"var(--btn-shadow-size) var(--btn-blue-shadow)",
      btnShadowActive: "0 0 0 0.4rem  var(--primary-darkBlue)",
      loadingColorBg: "var(--primary-dark)",
      textColor: "var(--primary-darkBlue)",
      iconColor: "var(--primary-darkBlue)",
      textColorHover: "var(--white)",
      btnIconHover: "var(--white)",
      btnTextActive: "var(--primary-darkBlue)",
      btnIconActive: "var(--primary-darkBlue)",
    },
    yellow: {
      bg: "var(--white)",
      bgHover: "var(--yellow-button--gradient)",
      border: "2px solid var(--primary-yellow)",
      btnShadow:"var(--btn-shadow-size) var(--btn-yellow-shadow)",
      btnShadowActive: "0 0 0 0.4rem  var(--primary-yellow)",
      loadingColorBg: "var(--primary-dark)",
      textColor: "var(--primary-yellow)",
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
      btnShadow:"var(--btn-shadow-size) var(--btn-green-shadow)",
      btnShadowActive: "0 0 0 0.4rem  var(--primary-green)",
      loadingColorBg: "var(--primary-dark)",
      textColor: "var(--primary-green)",
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
      btnShadow:"var(--btn-shadow-size) var(--btn-green-shadow)",
      btnShadowActive: "0 0 0 0.4rem  var(--primary-red)",
      loadingColorBg: "var(--primary-dark)",
      textColor: "var(--primary-red)",
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
      btnShadow:"var(--btn-shadow-size) var(--btn-black-shadow)",
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
      btnShadow:"var(--btn-shadow-size) var(--btn-white-shadow)",
      btnShadowActive: "none",
      loadingColorBg: "var(--primary-dark)",
    },
  };

  if(!color) return buttonStrokeColors.white

  return buttonStrokeColors[color] || null;
};

export const getButtonColors = (color: string,stroke: boolean): ButtonStyleInterface & HoverState & ActiveState => {
  const buttonStyleInterface = {
    primary: {
      bg: "var(--primary-button-gradient)",
      bgHover: "var(--primary-button-gradient)",
      textColor: "var(--white)",
      loadingColorBg: "var(--white)",
      btnShadow:"var(--btn-shadow-size) var(--btn-primary-shadow)",
      iconBoxShadow: "var(--icon-drop-shadow)",
      iconColor: "var(--white)",
      border: "none",
    },
    blue: {
      bg: "var(--blue-button-gradient)",
      bgHover: "var(--blue-button-gradient)",
      textColor: "var(--white)",
      loadingColorBg: "var(--white)",
      btnShadow:"var(--btn-shadow-size) var(--btn-blue-shadow)",
      iconBoxShadow: "var(--icon-drop-shadow)",
      iconColor: "white",
      border: "none",
    },
    yellow: {
      bg: "var(--yellow-button--gradient)",
      bgHover: "var(--yellow-button--gradient)",
      textColor: "var(--white)",
      loadingColorBg: "var(--white)",
      btnShadow:"var(--btn-shadow-size) var(--btn-yellow-shadow)",
      iconBoxShadow: "var(--icon-drop-shadow)",
      iconColor: "var(--white)",
      border: "none",
    },
    green: {
      bg: "var(--green-button-gradient)",
      bgHover: "var(--green-button-gradient)",
      textColor: "var(--white)",
      loadingColorBg: "var(--white)",
      btnShadow:"var(--btn-shadow-size) var(--btn-green-shadow)",
      iconBoxShadow: "var(--icon-drop-shadow)",
      iconColor: "var(--white)",
      border: "none",
    },
    red: {
      bg: "var(--red-button-gradient)",
      bgHover: "var(--red-button-gradient)",
      textColor: "var(--white)",
      loadingColorBg: "var(--white)",
      btnShadow:"var(--btn-shadow-size) var(--btn-red-shadow)",
      iconBoxShadow: "var(--icon-drop-shadow)",
      iconColor: "var(--white)",
      border: "none",
    },
    black: {
      bg: "var(--black-button-gradient)",
      bgHover: "var(--black-button-gradient)",
      textColor: "var(--white)",
      loadingColorBg: "var(--white)",
      btnShadow:"var(--btn-shadow-size) var(--btn-black-shadow)",
      iconBoxShadow: "var(--icon-drop-shadow)",
      iconColor: "var(--white)",
      border: "none",
    },
    white: {
      bg: "var(--white-button-gradient)",
      bgHover: "var(--white-button-gradient)",
      textColor: "var(--primary-dark)",
      loadingColorBg: "var(--primary-dark)",
      btnShadow:"var(--btn-shadow-size) var(--btn-white-shadow)",
      iconBoxShadow: "var(--icon-drop-shadow)",
      iconColor: "var(--primary-black)",
      border: "none",
    },
  };
  
  if (stroke) return getButtonStrokeColors(color);

  if(!color) return buttonStyleInterface.white
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
      iconPosition:"0%"
    },
    medium: {
      height: "auto",
      width: "auto",
      padding: "var(--medium-button-padding)",
      fontSize: "var(--medium-button-fontSize)",
      fontFamily: "var(--button-fontFamily)",
      iconPosition:"5%"
    },
    large: {
      height: "auto",
      width: "auto",
      padding: "var(--large-button-padding)",
      fontSize: "var(--large-button-fontSize)",
      fontFamily: "var(--button-fontFamily)",
      iconPosition:"6%"
    },
  };

  if(!size) return layouts.medium


  return layouts[size];
};
