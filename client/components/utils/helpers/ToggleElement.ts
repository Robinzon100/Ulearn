export const ToggleElement = (id: number,setIsToggled) => {
    setIsToggled(isToggled => ({
        ...isToggled,
        [id]: !isToggled[id]
    }));
}