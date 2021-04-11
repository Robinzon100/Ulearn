export const GetBoundingClientRect = (selfRef,elProperties,setElProperties) => {
    if (!selfRef || !selfRef.current) return elProperties;
    const rect = selfRef.current.getBoundingClientRect();
    const left = rect.left;
    const top = rect.top;
    const width = rect.width;
    const right = rect.right;

    // console.log({ top, left,width })

    return setElProperties({ left, top,width,right });
}