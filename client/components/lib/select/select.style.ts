import {ISelectSizeGroup,ISelectColorGroup} from "./select.inteface";


const colors = {
    white: {
        iconBgColor: 'var(--primary-grey)',
        boxShadow:'0px 4px 11px rgba(var(--primary-white-shadow--rgb),.44)'
    },
    primary: {
        iconBgColor: 'var(--primary-blue)',
        boxShadow:'0px 4px 11px rgba(var(--primary-shadow--rgb),.44)'
    },
    blue: {
        iconBgColor: 'var(--primary-blue)',
        boxShadow:'0px 4px 11px rgba(var(--blue-shadow--rgb),.44)'
    },
    yellow: {
        iconBgColor: 'var(--primary-yellow)',
        boxShadow:'0px 4px 11px rgba(var(--yellow-shadow--rgb),.44)'
    },
    green: {
        iconBgColor: 'var(--primary-green)',
        boxShadow:'0px 4px 11px rgba(var(--green-shadow--rgb),.44)'
    },
    red: {
        iconBgColor: 'var(--primary-red)',
        boxShadow:'0px 4px 11px rgba(var(--red-shadow--rgb),.44)'
    },
    black: {
        iconBgColor: 'var(--primary-dark)',
        boxShadow:'0px 4px 11px rgba(var(--black-shadow--rgb),.44)'
    }
}

export const getSelectColors = (color: string): ISelectColorGroup => {
    if (!color) return colors.white;
    return colors[color]
}



export const getSelectSize = (size: string): ISelectSizeGroup => {
    const layouts = {
      small: {
        padding: "0px 6px 0px 6px",
        iconPadding:"9px"
      },
      medium: {
        padding: "0px 12px 0px 6px",
        iconPadding:"11px"
      },
      large: {
        padding: "0px 18px 0px 6px",
        iconPadding:"13px"
      },
    };
    
    if (!size) return layouts.medium;
  
    return layouts[size];
  };
  