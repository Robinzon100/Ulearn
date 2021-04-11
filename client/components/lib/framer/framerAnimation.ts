//!! INDEX ARROW ANIMATION
export const arrowAnimation = {
    open: {
        rotate: 0,
        transition: { duration: 0.3 },
    },
    closed: {
        rotate: [0, 180],
        transition: { duration: 0.2 },
    },
};

//!! INDEX DropDownAnimation ANIMATION
export const dropDownAnimation = {
    open: {
        height: "auto",
        opacity: 1,
        display: "block",
        transition: { 
            duration: 0.3 
        },
    },
    closed: {
        height: "0rem",
        opacity: 0,
        'display': 'none',
        transition: {
            duration: 0.2,
        },
    },
};
// INDEX SEE MORE ANIMATION
export const seeMoreAnimation = {
    open: {
        height: "21vw",
        opacity: 1,
        display: "block",
        transition: { duration: 0.1 },
    },
    closed: {
        height: "0vw",
        opacity: 0,
        // 'visibility': 'hidden',
        transition: {
            duration: 0.2,
        },
    },
};

export const sideMenuAnimation = {
    open: {
        height: 120,
        opacity: 1,
        display: "block",
        transition: { duration: 0.3 },
    },
    closed: {
        height: 0,
        opacity: 0,
        // display: "none",
        transition: {
            duration: 0.3,
        },
    },
};

//NAVIGATION CATEGORY ANIMATION
export const MainCategoryToggleAnimation = {
    open: {
        height: "47rem",
        opacity: 1,
        display: "block",
        transition: {
            duration: 0.3,
            delayChildren: 0.2,
        },
    },
    closed: {
        height: "0rem",
        opacity: 0,
        display: "none",
        transition: {
            duration: 0.3,
            delayChildren: 0.2,
        },
    },
};
export const MainCategoryChildren = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
};

export const MainCategoryLeftMoveAnimation = {
    left: {
        left: "0rem",
        borderTopRightRadius: "0px",
        borderBottomRightRadius: "0px",
        transition: {
            duration: 0.25
        }
    },
};
export const SubCategoryLeftMoveAnimation = {
    left: {
        left: "32rem",
        display:"block",
        opacity: 1,
        borderTopRightRadius: "0px",
        borderBottomRightRadius: "0px",
        transition: {
            duration: 0.25
        }
    },
};

export const SubSubCategoryLeftMoveAnimation = {
    left: {
        right: "3rem",
        display:"block",
        opacity: 1,
        borderTopRightRadius: "0px",
        borderBottomRightRadius: "0px",
        transition: {
            duration: 0.25
        }
    },
};