
//!! INDEX ARROW ANIMATION
export const arrowAnimation = {
    open: {
        rotate: 0,
        transition: { duration: 0.3 }
    },
    closed:
    {
        rotate: [0, 180],
        transition: { duration: 0.2 }
    }
} 

//!! INDEX DropDownAnimation ANIMATION
export const dropDownAnimation = {
    open: {
        'height': '14rem',
        opacity: 1,
        'display': 'block',
        transition: { duration: 0.2 }
    },
    closed: {
        'height': '0rem',
        opacity: 0,
        'display': 'none',
        transition: {
            duration: 0.2
        }
    },
}