
import { NormalSizes, Colors } from "components/global_components/button/prop-type";
import { ButtonStyleInterface, HoverState, ActiveState, ButtonSizeGroup } from "./Button.interface";


export const getButtonGhostColors = (color: string): HoverState & ActiveState  => {

    const buttonGhostColors: { [key in Colors]: HoverState & ActiveState  } = {
        primary: {
            bg: 'var(--white)',
            boxShadowDefault: 'var(--primary-box-shadow-default)',
            border: '2px solid var(--primary-blue)',
            borderRadius: '8px',
            textColor:'var(--primary-blue)',
            iconColor:'var(--primary-blue)',
            
            bgHover: 'var(--primary-blue)',
            textColorHover: 'var(--white)',
            btnShadowHover: 'var(--primary-box-shadow-active)',
            btnIconHover:'var(--white)',

            btnBorderActive: '4px solid var(--primary-blue)',
            btnTextActive: 'var(--primary-blue)',
            btnIconActive: 'var(--primary-blue)'

        },
        blue: {
            bg: 'var(--white)',
            boxShadowDefault: 'var(--blue-button-gradient-default)',
            border: '2px solid var(--primary-darkBlue)',
            borderRadius: '8px',
            textColor:'var(--primary-darkBlue)',
            iconColor:'var(--primary-darkBlue)',
            
            bgHover: 'var(--primary-darkBlue)',
            textColorHover: 'var(--white)',
            btnShadowHover: 'var(--blue-button-gradient-active)',
            btnIconHover:'var(--white)',

            btnBorderActive: '4px solid var(--primary-darkBlue)',
            btnTextActive: 'var(--primary-darkBlue)',
            btnIconActive: 'var(--primary-darkBlue)'

        },
        yellow: {
            bg: 'var(--white)',
            boxShadowDefault: 'var(--yellow-button--gradient-default)',
            border: '2px solid var(--primary-yellow)',
            borderRadius: '8px',
            textColor:'var(--primary-yellow)',
            iconColor:'var(--primary-yellow)',
            
            bgHover: 'var(--primary-yellow)',
            textColorHover: 'var(--white)',
            btnShadowHover: 'var(--yellow-button--gradient-active)',
            btnIconHover:'var(--white)',

            btnBorderActive: '4px solid var(--primary-yellow)',
            btnTextActive: 'var(--primary-yellow)',
            btnIconActive: 'var(--primary-yellow)'

        },
        green: {
            bg: 'var(--white)',
            boxShadowDefault: 'var(--green-button-gradient-default)',
            border: '2px solid var(--primary-green)',
            borderRadius: '8px',
            textColor:'var(--primary-green)',
            iconColor:'var(--primary-green)',
            
            bgHover: 'var(--primary-green)',
            textColorHover: 'var(--white)',
            btnShadowHover: 'var(--green-button-gradient-active)',
            btnIconHover:'var(--white)',

            btnBorderActive: '4px solid var(--primary-green)',
            btnTextActive: 'var(--primary-green)',
            btnIconActive: 'var(--primary-green)'

        },
        red: {
            bg: 'var(--white)',
            boxShadowDefault: 'var(--red-button-gradient-default)',
            border: '2px solid var(--primary-red)',
            borderRadius: '8px',
            textColor:'var(--primary-red)',
            iconColor:'var(--primary-red)',
            
            bgHover: 'var(--primary-red)',
            textColorHover: 'var(--white)',
            btnShadowHover: 'var(--red-button-gradient-active)',
            btnIconHover:'var(--white)',

            btnBorderActive: '4px solid var(--primary-red)',
            btnTextActive: 'var(--primary-red)',
            btnIconActive: 'var(--primary-red)'

        },
        black: {
            bg: 'var(--white)',
            boxShadowDefault: 'var(--primary-box-shadow-default)',
            border: '2px solid var(--primary-dark)',
            borderRadius: '8px',

            bgHover: 'var(--primary-dark)',
            textColorHover: 'var(--white)',
            btnShadowHover: 'var(--black-button-gradient-active)',
            btnIconHover:'var(--white)',

            btnBorderActive: '4px solid var(--primary-dark)',
            btnTextActive: 'var(--primary-dark)',
            btnIconActive: 'var(--primary-dark)'
        },
        white: {
            bg: 'var(--white)',
            border: '2px solid var(--white)',
            borderRadius: '8px',
            boxShadowDefault: 'var(--white-button-gradient-default)',
            btnShadowHover: 'var(--white-button-gradient-active)'

        }

    }

    return buttonGhostColors[color] || null;
}




export const getButtonColors = (color: string, ghost: boolean): ButtonStyleInterface & HoverState & ActiveState  => {
    
    const buttonStyleInterface: { [key in Colors]: ButtonStyleInterface & HoverState & ActiveState  } = {
        primary: {
            bg: 'var(--primary-button-gradient)',
            textColor: 'var(--white)',
            borderRadius: '8px',
            boxShadowDefault: 'var(--primary-box-shadow-default)',
            btnShadowHover: 'var(--primary-box-shadow-active)',
            btnShadowActive: 'var(--primary-box-shadow-pressed)',
            btnShadowDisabled: 'var(--primary-box-shadow-disabled)',
            iconBoxShadow: 'var(--icon-drop-shadow)',
            iconColor: 'var(--white)',
            border: '1px solid var(--white)'
        },
        blue: {
            bg: 'var(--blue-button-gradient)',
            textColor: 'var(--white)',
            borderRadius: '8px',
            boxShadowDefault: 'var(--blue-button-gradient-default)',
            btnShadowHover: 'var(--blue-button-gradient-active)',
            btnShadowActive: 'var(--blue-button-gradient-pressed',
            btnShadowDisabled: 'var(--blue-button-gradient-disabled)',
            iconBoxShadow: 'var(--icon-drop-shadow)',
            iconColor: "white",
            border: '1px solid var(--blue-button-gradient)'

        },
        yellow: {
            bg: 'var(--yellow-button--gradient)',
            textColor: 'var(--white)',
            borderRadius: '8px',
            boxShadowDefault: 'var(--yellow-button--gradient-default)',
            btnShadowHover: 'var(--primary-box-shadow-active)',
            btnShadowActive: 'var(--primary-box-shadow-pressed)',
            btnShadowDisabled: 'var(--primary-box-shadow-disabled)',
            iconBoxShadow: 'var(--icon-drop-shadow)',
            iconColor: 'var(--white)',
            border: '1px solid var(--yellow-button--gradient)'

        },
        green: {
            bg: 'var(--green-button-gradient)',
            textColor: 'var(--white)',
            borderRadius: '8px',
            boxShadowDefault: 'var(--green-button-gradient)',
            btnShadowHover: 'var(--yellow-button--gradient-active)',
            btnShadowActive: 'var(--yellow-button--gradient-pressed)',
            btnShadowDisabled: 'var(--yellow-button--gradient-disabled)',
            iconBoxShadow: 'var(--icon-drop-shadow)',
            iconColor: 'var(--white)',
            border: '1px solid var(--green-button-gradient)'
        },
        red: {
            bg: 'var(--red-button-gradient)',
            textColor: 'var(--white)',
            borderRadius: '8px',
            boxShadowDefault: 'var(--red-button-gradient-default)',
            btnShadowHover: 'var(--red-button-gradient-active)',
            btnShadowActive: 'var(--red-button-gradient-pressed)',
            btnShadowDisabled: 'var(--red-button-gradient-disabled)',
            iconBoxShadow: 'var(--icon-drop-shadow)',
            iconColor: 'var(--white)',
            border: '1px solid var(--red-button-gradient)'
        },
        black: {
            bg: 'var(--black-button-gradient)',
            textColor: 'var(--white)',
            borderRadius: '8px',
            boxShadowDefault: 'var(--black-button-gradient-default)',
            btnShadowHover: 'var(--black-button-gradient-active)',
            btnShadowActive: 'var(--black-button-gradient-pressed)',
            btnShadowDisabled: 'var(--black-button-gradient-disabled)',
            iconBoxShadow: 'var(--icon-drop-shadow)',
            iconColor: 'var(--white)',
            border: '1px solid var(--black-button-gradient)'
        },
        white: {
            bg: 'var(--white-button-gradient)',
            textColor: 'var(--primary-dark)',
            borderRadius: '8px',
            boxShadowDefault: 'var(--white-button-gradient-default)',
            btnShadowHover: 'var(--white-button-gradient-active)',
            btnShadowActive: 'var(--white-button-gradient-pressed)',
            btnShadowDisabled: 'var(--white-button-gradient-disabled)',
            iconBoxShadow: 'var(--icon-drop-shadow)',
            iconColor: 'var(--primary-black)',
            border: 'var(--white-button-gradient)'
        }
    }

    if (ghost) return getButtonGhostColors(color);

    return buttonStyleInterface[color] || null;
}


export const getButtonSize = (size: NormalSizes = 'medium'): ButtonSizeGroup => {

    const layouts: { [key in NormalSizes]: ButtonSizeGroup } = {
        auto: {
            height: 'auto',
            width: '100%',
            padding: 'var(--mini-button-padding)',
            fontSize: 'var(--mini-button-fontSize)',
            fontFamily: 'var(--button-fontFamily)'
        },
        mini: {
            height: 'auto',
            width: 'auto',
            padding: 'var(--mini-button-padding)',
            fontSize: 'var(--mini-button-fontSize)',
            fontFamily: 'var(--button-fontFamily)'
        },
        small: {
            height: 'auto',
            width: 'auto',
            padding: 'var(--small-button-padding)',
            fontSize: 'var(--smal-button-fontSize)',
            fontFamily: 'var(--button-fontFamily)'
        },
        medium: {
            height: 'auto',
            width: 'auto',
            padding: 'var(--medium-button-padding)',
            fontSize: 'var(--medium-button-fontSize)',
            fontFamily: 'var(--button-fontFamily)'
        },
        large: {
            height: 'auto',
            width: 'auto',
            padding: 'var(--large-button-padding)',
            fontSize: 'var(--large-button-fontSize)',
            fontFamily: 'var(--button-fontFamily)'
        },
    }


    return layouts[size]

}