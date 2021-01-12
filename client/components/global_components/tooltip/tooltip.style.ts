import {IToolTipColors} from "./tooltip.interface";

const colors = {
    white: {
        background: 'var(--primary-white)',    
    },
    primary: {
        background: 'var(--primary-blue)'
    },
    blue: {
        background: 'var(--primary-blue)'
    },
    yellow: {
        background: 'var(--primary-yellow)'
    },
    green: {
        background: 'var(--primary-green)'
    },
    red: {
        background: 'var(--primary-red)'
    },
    black: {
        background: 'var(--primary-dark)',
    }
}

export const getColors = (color: string): IToolTipColors => {
    if (!color) return colors.white;
    return colors[color]
}
