export const scrollTop = (top:number) => {

   return window.scrollTo({
        top: top,
        behavior: "smooth"
    });
}