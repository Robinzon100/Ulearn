export const MobileCategoryAnimation = {
    open: {
        translateX:"0rem",
        opacity: 1,
        display: "block",
        left:"0",
        transition: {
            duration: 0.5,
        },
    },
    closed: {
        // left:"35rem",
        translateX: "40rem",
        opacity: 0,
        display: "none",
        transition: {
            duration: 0.5,
        },
    },
};

export const MobileSubSubCategoryAnimation = {
    open: {
        opacity: 1,
        display: "block",
        transition: {
            duration: 0.5,
        },
    },
    closed: {
        // translateX: "50%",
        opacity: 0,
        display: "none",
        transition: {
            duration: 0.5,
        },
    },
};