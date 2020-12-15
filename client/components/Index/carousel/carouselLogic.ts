import {checkIfScrollFinished} from "../../hooks/checkIfFinishedScrolling";


//! =============== SCROLLING
const sideScroll = (element:HTMLElement,direction: string,speed: number,distance: number,step: number,setIsFinishedScrolling,
) => {
  let scrollAmount = 0;
  
  var slideTimer = setInterval(() => {
    
    if (direction == "left") {
        element.scrollLeft -= step;
        if (element.scrollLeft === 0) {
        setIsFinishedScrolling(false);
        }
    
    } else {
        element.scrollLeft += step;
        // if (element.scrollLeft > 0) {
        //     setIsFinishedScrolling(true);
        // }
  
       if (element.offsetWidth + element.scrollLeft >= element.scrollWidth) {
        setIsFinishedScrolling(true);
       }
    // checkIfScrollFinished(setIsFinishedScrolling, isFinishedScrolling);
       
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);

};


//* ========== mouseDown
const mouseDown = (e, setIsDown, setStartX, setScrolLeft) => {
 
  const carousel = document.querySelector<HTMLElement>(".carousel_container");
  setIsDown(true);

  let mouseX = e.pageX - carousel.offsetLeft;
  setStartX(mouseX);

  let scroll = carousel.scrollLeft;
  setScrolLeft(scroll);

  if(scroll === 0) return
  console.log({ mouseX, scroll });
};
//* ========== mouseMove
const mouseMove = (e,isDown: boolean,startX: number,scrolLeft: number,setIsFinishedScrolling,isFinishedScrolling
) => {
  e.preventDefault();
  const carousel = document.querySelector<HTMLElement>(".carousel_container");
  if (!isDown) return;
  const x = e.pageX - carousel.offsetLeft;

 
  const walk = (x - startX) * 2;
  carousel.scrollLeft = scrolLeft - walk;
  checkIfScrollFinished(setIsFinishedScrolling, isFinishedScrolling);


  if (scrolLeft === 0) return;

  if (walk > scrolLeft) return;

  if (isFinishedScrolling) return;
};

//* ========== mouseLeave
const mouseLeave = (setIsDown) => {
  setIsDown(false);
};
//* ========== mouseUp
const mouseUp = (setIsDown) => {
  setIsDown(false);
};

export {
  mouseDown,
  mouseMove,
  mouseLeave,
  mouseUp,
  sideScroll,
  checkIfScrollFinished,
  
};
