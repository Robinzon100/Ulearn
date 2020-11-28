

//! =============== SCROLLING
const sideScroll = (element:Element, direction:string, speed:number, distance:number, step:number) => {
    let scrollAmount = 0;
    var slideTimer = setInterval(function () {
      if (direction == "left") {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    
    }, speed);
}
 //! არკვევს თუ სქროლბარმა მიაღწია კონტენტის ბოლოში
const checkIfScrollFinished = (setIsFinishedScrolling,isFinishedScrolling) => {
  const carousel = document.querySelector<HTMLElement>(".carousel_container");
   
  if (carousel.offsetWidth + carousel.scrollLeft >= carousel.scrollWidth) {
    setIsFinishedScrolling(true);
    if(isFinishedScrolling) return
   } else {
    setIsFinishedScrolling(false);
    if(!isFinishedScrolling) return;
   }
}

//* ========== mouseDown
const mouseDown = (e, setIsDown, setStartX, setScrolLeft) => {
  //* აქ mouseX da scroll mainc grdzeldeba,roca scrolling dasruldeba. ar aris didi rame magram daimaxsovre
  const carousel = document.querySelector<HTMLElement>(".carousel_container");
  setIsDown(true);

  let mouseX = e.pageX - carousel.offsetLeft;
  setStartX(mouseX);
  
  let scroll = carousel.scrollLeft;
  setScrolLeft(scroll);

  
    
 
};
//* ========== mouseMove
const mouseMove = (e,isDown:boolean,startX: number,scrolLeft: number,setIsFinishedScrolling,isFinishedScrolling) => {
  
  e.preventDefault();
  const carousel = document.querySelector<HTMLElement>(".carousel_container");
  if (!isDown) return;
  const x = e.pageX - carousel.offsetLeft;
 
  //* თუ უფრო მეტზე გაამრავლე უფრო სწრაფად და მეტზე გადავა
  const walk = (x - startX) * 2; 
  carousel.scrollLeft = scrolLeft - walk;
  checkIfScrollFinished(setIsFinishedScrolling,isFinishedScrolling);
 
  //* ეს თუ მინი მნიშვნელობა იქნება 0 და არ უნდა იყოს
  if(scrolLeft === 0) return; 

  //* ეს იმიტომ სჭირდება,რომ როცა დაასრულებდი სქროლვას,მაინც ემატება walk,შეიძლება ეს ერთი მომხმარებლისთვის
  //* არაფერი იყოს მაგრამ როცა ბევრთან იქნება საქმე,შეიძლება პრობლემა შეიქმნას. ამიტომ,როგორც კი მეტი გახდება
  //* მაშინვე გააჩერებს და ზედმეტად აღარ წავა.
  if(walk > scrolLeft) return; 
  
  //* თუ ეს არ ექნება,მაშინ როცა სკროლვას დაასულებს  და ჩავა ბოლომდე,აქაც walk მაინც გრძელდება,ამიტომ 
  //* როგორც კი True გახდება სკროლვა დასრულდება,ფუნქციაც გაჩერდება
  if(isFinishedScrolling) return;
  
  console.log({scrolLeft,walk})

  
};

//* ========== mouseLeave
const mouseLeave = (setIsDown) => {
  setIsDown(false);
};
//* ========== mouseUp
const mouseUp = (setIsDown) => {
  setIsDown(false);
};

export { mouseDown, mouseMove, mouseLeave, mouseUp,sideScroll,checkIfScrollFinished };
