
import { IinputSizeGroup, IinputStateGroup } from './Input.interface';



const sizes = {
    mini: {
        padding: '8px 10px 8px 46px',
        fontSize: '13px',
        focusedPadding: '8px 10px 8px 48px',
        paddingWithOutIcons:'8px 10px 8px 10px'
    },
    small: {
        padding: '10px 12px 10px 46px',
        fontSize: '15px',
        focusedPadding: '10px 12px 10px 48px',
        paddingWithOutIcons:'10px 12px 10px 12px'
    },
    medium: {
        padding: '12px 14px 12px 46px',
        fontSize: '17px',
        focusedPadding: '12px 14px 12px 48px',
        paddingWithOutIcons:'14px 16px 14px 16px'
    },
    large: {
        padding: '14px 16px 14px 46px',
        fontSize: '19px',
        focusedPadding: '14px 16px 14px 48px',
        paddingWithOutIcons:'16px 18px 16px 18px'
    },
}
export const getInputSize = (size: string): IinputSizeGroup => {
    if (!size) return sizes.medium
    return sizes[size]
}


const colors = {
    white: {
        defaultBg: 'var(--primary-grey)',        
        borderColor: '1px solid var(--primary-grey)',
        focusedBorder:'1px solid var(--primary-dark)'
    },
    primary: {
        borderColor: '1px solid var(--primary-blue)',
    },
    blue: {
        borderColor: '1px solid var(--primary-blue)',
    },
    yellow: {
        borderColor: '1px solid var(--primary-yellow)',
    },
    green: {
        borderColor: '1px solid var(--primary-green)',
    },
    red: {
        textColor:"var(--primary-red)",
        borderColor: '1px solid var(--primary-red)',
    },
    black: {
        borderColor: '1px solid var(--primary-dark)',
    }
}

export const getColors = (color: string): IinputStateGroup => {
    if (!color) return colors.white;
    return colors[color]
}



