export const handleToggle = (setIsToggle,setMouseLeave) => {
    setIsToggle(true);
    setMouseLeave(true);
};
export const handleMouseLeave = (setMouseLeave,setIsToggle) => {
    setMouseLeave(false);
    setIsToggle(false);
};

