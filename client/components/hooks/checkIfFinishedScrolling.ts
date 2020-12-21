

//! არკვევს თუ სქროლბარმა მიაღწია კონტენტის ბოლოში
const checkIfScrollFinished = (setIsFinishedScrolling, isFinishedScrolling) => {
    const carousel = document.querySelector<HTMLElement>(".carousel_container");
    // debugger
    if (carousel.offsetWidth + carousel.scrollLeft >= carousel.scrollWidth) {
      setIsFinishedScrolling(true);
      if (isFinishedScrolling) return;
    } else {
      setIsFinishedScrolling(false);
      if (!isFinishedScrolling) return;
    }
};

export {checkIfScrollFinished};