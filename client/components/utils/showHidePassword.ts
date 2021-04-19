export const showHidePasswordHandler = (setIsPasswordHidden,el:string) => {
    let x = document.querySelector<HTMLInputElement>(el);
    if (x.type === "password") {
      x.type = "text";
      setIsPasswordHidden(false)
    } else {
      x.type = "password";
      setIsPasswordHidden(true)
    }
}