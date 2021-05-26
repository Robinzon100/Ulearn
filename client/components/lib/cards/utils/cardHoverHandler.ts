import { GetBoundingClientRect } from "components/utils/helpers/getBoundingClientRect";


export const cardHoverHandler = (e,selfRef,elProperties,setElProperties,setIsClicked) => {
    //Calculates Card width and positions
    
    const descriptionEl = e.currentTarget.firstChild;
    const body = document.getElementsByName("body");
    
    // let ww = Math.max(document.documentElement.clientWidth,window.innerWidth || 0);
    // let offSetLeft = e.currentTarget.parentElement.offsetLeft;

    let el = GetBoundingClientRect(selfRef, elProperties, setElProperties);
    let doc = GetBoundingClientRect(body, elProperties, setElProperties);


    // console.log(Math.round(el.right) > (doc.width))

    // console.log(Math.round(el.left))
    // console.log(460 * 2)

    if (Math.round(el.left) > (460)) {
      descriptionEl.style.top = `${el.top - el.top - 30}px`;

      descriptionEl.style.right = `${el.width - 20}px`;
    
    } else {
      descriptionEl.style.top = `${el.top - el.top - 30}px`;
      
      descriptionEl.style.left = `${el.width - el.width + 35}px`;
    }

    setIsClicked((isClicked) => !isClicked);
  };