export const GetBoundingClientRect = (selfRef,elProperties,setElProperties) => {
    if (!selfRef || !selfRef.current) return elProperties;
    let rect = selfRef.current.getBoundingClientRect();
    let left = rect.left;
    let top = rect.top;
    let width = rect.width;
    let right = rect.right;

    setElProperties({ left, top,width,right })


    return { left, top,width,right }
}