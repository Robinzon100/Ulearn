export const handleToggle = (setIsToggle,setMouseLeave) => {
    setIsToggle((toggle) => !toggle);
    setMouseLeave(true);
};
export const handleMouseLeave = (setMouseLeave,setIsToggle) => {
    setMouseLeave((mouseLeave) => !mouseLeave);
    setIsToggle(false);
    // setMouseLeave(true);
};

