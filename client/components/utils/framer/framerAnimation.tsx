
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
        // 'display': 'none',
        transition: {
            duration: 0.2
        }
    },
}
// INDEX SEE MORE ANIMATION
export const seeMoreAnimation = {
    open: {
        'height': '21vw',
        opacity: 1,
        'display': 'block',
        transition: { duration: 0.1 }
    },
    closed: {
        'height': '0vw',
        opacity: 0,
        // 'visibility': 'hidden',
        transition: {
            duration: 0.2
        }
    },
}

export const sideMenuAnimation = {
    open: {
        'height': '12rem',
        opacity: 1,
        'display': 'block',
        transition: { duration: 0.3 }
    },
    closed: {
        'height': '0rem',
        opacity: 0,
        // 'visibility': 'hidden',
        transition: {
            duration: 0.3
        }
    },
}
