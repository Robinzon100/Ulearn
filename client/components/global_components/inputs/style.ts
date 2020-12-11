
import { InputSizeGroup, InputStateGroup } from './Input.interface';




export const getInputSize = (size: string): InputSizeGroup => {

    const sizes = {
        mini: {
            padding: '8px 10px 8px 35px',
            fontSize: '13px',
            focusedPadding: '8px 10px 8px 40px',
            fontFamily:'var(--regular)',
            paddingWithOutIcons:'8px 10px 8px 10px'
        },
        small: {
            padding: '10px 12px 10px 35px',
            fontSize: '15x',
            focusedPadding: '10px 12px 10px 40px',
            fontFamily:'var(--regular)',
            paddingWithOutIcons:'10px 12px 10px 12px'
        },
        medium: {
            padding: '12px 14px 12px 35px',
            fontSize: '17px',
            focusedPadding: '14px 16px 14px 40px',
            fontFamily:'var(--regular)',
            paddingWithOutIcons:'14px 16px 14px 16px'
        },
        large: {
            padding: '14px 16px 14px 35px',
            fontSize: '19px',
            focusedPadding: '16px 18px 16px 40px',
            fontFamily:'var(--regular)',
            paddingWithOutIcons:'16px 18px 16px 18px'
        },
    }

    if (!size) return sizes.medium
    return sizes[size]
}


export const getColors = (color: string): InputStateGroup => {

    const colors = {
        white: {
            defaultBg: 'var(--secondary-lightGrey)',
            textColor: 'var(--primary-dark)',
            borderColor: 'none',
            hoverBg: 'var(--primary-grey)',
            focusedShadow: 'var(--text-input-shadow)',
            focusedBg: 'var(--white)',
            disabled: 'var(--primary-grey)',
        },
        primary: {
            defaultBg: 'var(--secondary-lightGrey)',
            textColor: 'var(--primary-dark)',
            borderColor: '0.9px solid var(--primary-blue)',
            hoverBg: 'var(--primary-grey)',
            focusedShadow: 'var(--text-input-shadow)',
            disabled: 'var(--primary-grey)',
            focusedBg: 'var(--white)',
        },
        blue: {
            defaultBg: 'var(--secondary-lightGrey)',
            textColor: 'var(--primary-dark)',
            borderColor: '0.9px solid var(--primary-blue)',
            hoverBg: 'var(--primary-grey)',
            focusedShadow: 'var(--text-input-shadow)',
            disabled: 'var(--primary-grey)',
            focusedBg: 'var(--white)',
        },
        yellow: {
            defaultBg: 'var(--secondary-lightGrey)',
            textColor: 'var(--primary-dark)',
            borderColor: '0.9px solid var(--primary-yellow)',
            hoverBg: 'var(--primary-grey)',
            focusedShadow: 'var(--text-input-shadow)',
            disabled: 'var(--primary-grey)',
            focusedBg: 'var(--white)',
        },
        green: {
            defaultBg: 'var(--secondary-lightGrey)',
            textColor: 'var(--primary-dark)',
            borderColor: '0.9px solid var(--primary-green)',
            hoverBg: 'var(--primary-grey)',
            focusedShadow: 'var(--text-input-shadow)',
            disabled: 'var(--primary-grey)',
            focusedBg: 'var(--white)',
        },
        red: {
            defaultBg: 'var(--secondary-lightGrey)',
            textColor: 'var(--primary-red)',
            borderColor: '0.9px solid var(--primary-red)',
            hoverBg: 'var(--primary-grey)',
            focusedShadow: 'var(--text-input-shadow)',
            disabled: 'var(--primary-grey)',
            focusedBg: 'var(--white)',
        },
        black: {
            defaultBg: 'var(--secondary-lightGrey)',
            textColor: 'var(--primary-dark)',
            borderColor: ' 0.9px solidvar(--primary-dark)',
            hoverBg: 'var(--primary-grey)',
            focusedShadow: 'var(--text-input-shadow)',
            disabled: 'var(--primary-grey)',
            focusedBg: 'var(--white)',
        }
    }


    if (!color) return colors.white;
    return colors[color]
}



