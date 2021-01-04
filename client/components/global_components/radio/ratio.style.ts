import {IRadioSizeGroup,IRadioStyle} from "./radio.interface";

export const getRadioColor = (color: string): IRadioStyle => {
    //* დიდად ამაზე აქტივე შადოუ არ მომწონს. არ ხდება ამ შემთხვევაში თვალს.
    //* ჩექის ნიშანი ისედაც აქვს და კიდევ ბორდერით მითითება აღარ უნდა. დაინახავს რომ დააჭირა ისედაც
    //* კიდევ თვალში რომ არ ვზასოთ
  const colors = {
    white: {
      bg: "var(--primary-grey)",
      border: "none",
      defaultShadow: "var(--btn-shadow) rgba(var(--primary-white-shadow--rgb),0.2)",
      hoverShadow:"var(--btn-hover-shadow) rgba(var(--primary-white-shadow--rgb),0.45)",
    //   activeShadow:"var(--btn-active-shadow) rgba(var(--btn-white-shadow),0.73)",
    },
    primary: {
      textColor: "var(--primary-blue)",
      border: "0.9px solid var(--primary-blue)",
      defaultShadow: "var(--btn-shadow) rgba(var(--primary-shadow--rgb),0.2)",
      hoverShadow:"var(--btn-hover-shadow) rgba(var(--primary-shadow--rgb),0.45)",
    //   activeShadow: "var(--btn-active-stroke) var(--primary-blue)",
    },
    blue: {
      textColor: "var(--primary-blue)",
      border: "0.9px solid var(--primary-blue)",
      defaultShadow: "var(--btn-shadow) rgba(var(--blue-shadow--rgb),0.2)",
      hoverShadow: "var(--btn-hover-shadow) rgba(var(--blue-shadow--rgb),0.45)",
    //   activeShadow: "var(--btn-active-stroke) var(--primary-dark-blue)",
    },
    yellow: {
      textColor: "var(--primary-yellow)",
      border: "0.9px solid var(--primary-yellow))",
      defaultShadow: "var(--btn-shadow) rgba(var(--yellow-shadow--rgb),0.2)",
      hoverShadow:"var(--btn-hover-shadow) rgba(var(--yellow-shadow--rgb),0.45)",
    //   activeShadow: "var(--btn-active-stroke) var(--primary-yellow)",
    },
    green: {
      textColor: "var(--primary-green)",
      border: "0.9px solid var(--primary-green)",
      defaultShadow: "var(--btn-shadow) rgba(var(--green-shadow--rgb),0.2)",
      hoverShadow:"var(--btn-hover-shadow) rgba(var(--green-shadow--rgb),0.45)",
    //   activeShadow: "var(--btn-active-stroke) var(--primary-green)",
    },
    red: {
      textColor: "var(--primary-red)",
      border: "0.9px solid var(--primary-red)",
      defaultShadow: "var(--btn-shadow) rgba(var(--red-shadow--rgb),0.2)",
      hoverShadow: "var(--btn-hover-shadow) rgba(var(--red-shadow--rgb),0.45)",
    //   activeShadow: "var(--btn-active-stroke) var(--primary-red)",
    },
    black: {
      textColor: "var(--secondary-light-black)",
      border: "0.9px solid var(--primary-dark)",
      defaultShadow: "var(--btn-shadow) rgba(var(--black-shadow--rgb),0.2)",
      hoverShadow:"var(--btn-hover-shadow) rgba(var(--black-shadow--rgb),0.45)",
    //   activeShadow: "var(--btn-active-stroke) var(--primary-dark)",
    },
  };
  return colors[color];
};

export const getRadioSize = (size: string): IRadioSizeGroup => {
  const layouts = {
    small: {
      padding: "var(--small-button-padding)",
      fontSize: "var(--small-button-fontSize)",
      iconPosition: "2%"
    },
    medium: {
      padding: "var(--medium-button-padding)",
      fontSize: "var(--medium-button-fontSize)",
      iconPosition: "6%",
    },
    large: {
      padding: "var(--large-button-padding)",
      fontSize: "var(--large-button-fontSize)",
      iconPosition: "8%",
    },
  };
  if(size === "mini") return layouts.small;
  if (!size) return layouts.medium;

  return layouts[size];
};
