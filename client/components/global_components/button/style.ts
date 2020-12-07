
import {NormalSizes,Colors} from "components/global_components/button/prop-type";


export interface ButtonColors  {
    bg?:string
    textColor?:string
    borderRadius?:string
    iconColor?:string,
    btnBorder?:string,

    boxShadowDefault?:string,
    boxShadowActive?:string,
    boxShadowPressed?:string
    boxShadowDisabled?:string,
    iconBoxShadow?:string,
    
    
}

export interface ButtonHover extends ButtonColors {
    bgHover?:string,
    textColorHover?:string,
    btnBorderHover?:string,
    btnShadowHover?:string
    btnBorderActive?:string
}

export const getButtonGhostColors = (bg:string) :  ButtonHover  => {
    
    const buttonGhostColors : {[key in Colors]: ButtonHover} = {
        primary: {
            bgHover: 'var(--primary-button-gradient)',
            textColorHover:'var(--white)',
            btnBorder:'8px',
            
        },
        blue : {
            bgHover: 'var(--primary-button-gradient)',
            textColorHover:'var(--white)',
            btnBorder:'8px',
            
        },
        yellow: {
            bgHover: 'var(--primary-button-gradient)',
            textColorHover:'var(--white)',
            btnBorder:'8px',
            
        },
        green : {
            bgHover: 'var(--primary-button-gradient)',
            textColorHover:'var(--white)',
            btnBorder:'8px',
            
        },
        red : {
            bgHover: 'var(--primary-button-gradient)',
            textColorHover:'var(--white)',
            btnBorder:'8px',
            
        },
        black : {
            bgHover: 'var(--primary-button-gradient)',
            textColorHover:'var(--white)',
            btnBorder:'8px',
            
        },
        white: {
            bg:"var(--white)",
            boxShadowDefault:'var(--primary-box-shadow-default)',
            bgHover:'var(--primary-dark)',
            textColorHover:'var(--white)',
            btnBorderHover:"2px solid var(--primary-dark)",
            btnBorderActive:"4px solid var(--primary-dark)",
            iconColor:'var(--primary-black)',
            borderRadius:'8px',
            btnShadowHover:'var(--black-button-gradient-active)'
        }
    }
 
    return buttonGhostColors[bg];
}




export const getButtonColors = (bg:string,ghost:boolean) : ButtonColors & ButtonHover  => {
    

    const buttonColors : {[key in Colors]:ButtonColors & ButtonHover} = {
        primary: {
            bg: 'var(--primary-button-gradient)',
            textColor:'var(--white)',
            borderRadius:'8px',
            boxShadowDefault:'var(--primary-box-shadow-default)',
            boxShadowActive:'var(--primary-box-shadow-active)',
            boxShadowPressed:'var(--primary-box-shadow-pressed)',
            boxShadowDisabled:'var(--primary-box-shadow-disabled)',
            iconBoxShadow:'var(--icon-drop-shadow)',
            iconColor:'var(--white)'
        },
        blue : {
            bg: 'var(--blue-button-gradient)',
            textColor:'var(--white)',
            borderRadius:'8px',
            boxShadowDefault:'var(--blue-button-gradient-default)',
            boxShadowActive:'var(--blue-button-gradient-active)',
            boxShadowPressed:'var(--blue-button-gradient-pressed',
            boxShadowDisabled:'var(--blue-button-gradient-disabled)',
            iconBoxShadow:'var(--icon-drop-shadow)',
            iconColor:"white"
        },
        yellow: {
            bg : 'var(--yellow-button--gradient)',
            textColor:'var(--white)',
            borderRadius:'8px',
            boxShadowDefault:'var(--yellow-button--gradient-default)',
            boxShadowActive:'var(--primary-box-shadow-active)',
            boxShadowPressed:'var(--primary-box-shadow-pressed)',
            boxShadowDisabled:'var(--primary-box-shadow-disabled)',
            iconBoxShadow:'var(--icon-drop-shadow)',
            iconColor:'var(--white)'
        },
        green : {
            bg: 'var(--green-button-gradient)',
            textColor:'var(--white)',
            borderRadius:'8px',
            boxShadowDefault:'var(--green-button-gradient)',
            boxShadowActive:'var(--yellow-button--gradient-active)',
            boxShadowPressed:'var(--yellow-button--gradient-pressed)',
            boxShadowDisabled:'var(--yellow-button--gradient-disabled)',
            iconBoxShadow:'var(--icon-drop-shadow)',
            iconColor:'var(--white)'
        },
        red : {
            bg : 'var(--red-button-gradient)',
            textColor:'var(--white)',
            borderRadius:'8px',
            boxShadowDefault:'var(--red-button-gradient-default)',
            boxShadowActive:'var(--red-button-gradient-active)',
            boxShadowPressed:'var(--red-button-gradient-pressed)',
            boxShadowDisabled:'var(--red-button-gradient-disabled)',
            iconBoxShadow:'var(--icon-drop-shadow)',
            iconColor:'var(--white)'
        },
        black : {
            bg : 'var(--black-button-gradient)',
            textColor:'var(--white)',
            borderRadius:'8px',
            boxShadowDefault:'var(--black-button-gradient-default)',
            boxShadowActive:'var(--black-button-gradient-active)',
            boxShadowPressed:'var(--black-button-gradient-pressed)',
            boxShadowDisabled:'var(--black-button-gradient-disabled)',
            iconBoxShadow:'var(--icon-drop-shadow)',
            iconColor:'var(--white)'
        },
        white: {
            bg:'var(--white-button-gradient)',
            textColor:'var(--primary-dark)',
            borderRadius:'8px',
            boxShadowDefault:'var(--white-button-gradient-default)',
            boxShadowActive:'var(--white-button-gradient-active)',
            boxShadowPressed:'var(--white-button-gradient-pressed)',
            boxShadowDisabled:'var(--white-button-gradient-disabled)',
            iconBoxShadow:'var(--icon-drop-shadow)',
            iconColor:'var(--primary-black)',
            
        }
    }

    if (ghost) return getButtonGhostColors(bg);
 
    return buttonColors[bg];
}



export type ButtonStyleGroup = {
    height: string
    width: string
    padding: string
    minWidth?: string
    fontSize?:string
    fontFamily?:string
}

export const getButtonSize = (size: NormalSizes = 'medium'): ButtonStyleGroup => {
    
    const layouts: { [key in NormalSizes]: ButtonStyleGroup } = {
      auto: {
        height: 'auto',
        width: '100%',
        padding: 'var(--mini-button-padding)',
        fontSize:'var(--mini-button-fontSize)',
        fontFamily:'var(--button-fontFamily)'
      },
      mini: {
        height: 'auto',
        width: 'auto',
        padding: 'var(--mini-button-padding)',
        fontSize:'var(--mini-button-fontSize)',
        fontFamily:'var(--button-fontFamily)'
    },
      small: {
        height: 'auto',
        width: 'auto',
        padding: 'var(--small-button-padding)',
        fontSize:'var(--smal-button-fontSize)',
        fontFamily:'var(--button-fontFamily)'
      },
      medium: {
        height: 'auto',
        width: 'auto',
        padding: 'var(--medium-button-padding)',
        fontSize:'var(--medium-button-fontSize)',
        fontFamily:'var(--button-fontFamily)'
      },
      large: {
        height: 'auto',
        width: 'auto',
        padding: 'var(--large-button-padding)',
        fontSize:'var(--large-bytton-fontSize)',
        fontFamily:'var(--button-fontFamily)'
      },
    }
  
  
    return layouts[size] 
    
}