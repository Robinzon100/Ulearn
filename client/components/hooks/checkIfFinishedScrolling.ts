

//! არკვევს თუ სქროლბარმა მიაღწია კონტენტის ბოლოში
const checkIfScrollFinished = (setIsFinishedScrolling, isFinishedScrolling) => {
    const carousel = document.querySelector<HTMLElement>(".carousel_container");
  
    if (carousel.offsetWidth + carousel.scrollLeft >= carousel.scrollWidth || carousel.scrollLeft > 0) {
      setIsFinishedScrolling(true);
      if (isFinishedScrolling) return;
    } else {
      setIsFinishedScrolling(false);
      if (!isFinishedScrolling) return;
    }
};

export {checkIfScrollFinished};