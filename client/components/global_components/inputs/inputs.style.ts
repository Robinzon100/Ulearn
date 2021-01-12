
import { IinputSizeGroup, IinputStateGroup } from './Input.interface';



const sizes = {
    mini: {
        padding: '8px 10px 8px 0px',
        fontSize: '13px',
        focusedPadding: '8px 10px 8px 5px',
        paddingWithOutIcons:'8px 10px 8px 10px'
    },
    small: {
        padding: '10px 12px 10px 0px',
        fontSize: '15x',
        focusedPadding: '10px 12px 10px 5px',
        paddingWithOutIcons:'10px 12px 10px 12px'
    },
    medium: {
        padding: '12px 14px 12px 0px',
        fontSize: '17px',
        focusedPadding: '12px 14px 12px 5px',
        paddingWithOutIcons:'14px 16px 14px 16px'
    },
    large: {
        padding: '14px 16px 14px 0px',
        fontSize: '19px',
        focusedPadding: '14px 16px 14px 5px',
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
        borderColor: 'none'
    },
    primary: {
        borderColor: '0.9px solid var(--primary-blue)'
    },
    blue: {
        borderColor: '0.9px solid var(--primary-blue)'
    },
    yellow: {
        borderColor: '0.9px solid var(--primary-yellow)'
    },
    green: {
        borderColor: '0.9px solid var(--primary-green)'
    },
    red: {
        textColor:"var(--primary-red)",
        borderColor: '0.9px solid var(--primary-red)'
    },
    black: {
        borderColor: '0.9px solid var(--primary-dark)'
    }
}

export const getColors = (color: string): IinputStateGroup => {
    if (!color) return colors.white;
    return colors[color]
}



