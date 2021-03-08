import {ISelectSizeGroup,ISelectColorGroup} from "./select.inteface";


const colors = {
    white: {
        iconBgColor: 'var(--primary-grey)'
    },
    primary: {
        iconBgColor: 'var(--primary-blue)'
    },
    blue: {
        iconBgColor: 'var(--primary-blue)'
    },
    yellow: {
        iconBgColor: 'var(--primary-yellow)'
    },
    green: {
        iconBgColor: 'var(--primary-green)'
    },
    red: {
        iconBgColor: 'var(--primary-red)'
    },
    black: {
        iconBgColor: 'var(--primary-dark)'
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
  