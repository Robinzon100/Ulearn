
import { InputSizeGroup, InputStateGroup } from './Input.interface';



const sizes = {
    mini: {
        padding: '8px 10px 8px 35px',
        fontSize: '13px',
        focusedPadding: '8px 10px 8px 40px',
        paddingWithOutIcons:'8px 10px 8px 10px'
    },
    small: {
        padding: '10px 12px 10px 35px',
        fontSize: '15x',
        focusedPadding: '10px 12px 10px 40px',
        paddingWithOutIcons:'10px 12px 10px 12px'
    },
    medium: {
        padding: '12px 14px 12px 35px',
        fontSize: '17px',
<<<<<<< HEAD
        focusedPadding: '12px 14px 12px 40px',
        paddingWithOutIcons:'14px 16px 14px 16px'
=======
        focusedPadding: '12px 16px 12px 40px',
        paddingWithOutIcons:'12px 16px 12px 16px'
>>>>>>> 9c146583161f0be1954257c5dd7d9d6acdcd310b
    },
    large: {
        padding: '14px 16px 14px 35px',
        fontSize: '19px',
<<<<<<< HEAD
        focusedPadding: '14px 16px 14px 40px',
        paddingWithOutIcons:'16px 18px 16px 18px'
=======
        focusedPadding: '14px 18px 14px 40px',
        paddingWithOutIcons:'14px 18px 16px 18px'
>>>>>>> 9c146583161f0be1954257c5dd7d9d6acdcd310b
    },
}
export const getInputSize = (size: string): InputSizeGroup => {
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
        borderColor: '0.9px solid var(--primary-yellow))'
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

export const getColors = (color: string): InputStateGroup => {
    if (!color) return colors.white;
    return colors[color]
}



