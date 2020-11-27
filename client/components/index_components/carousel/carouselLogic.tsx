import React, { useState } from "react";

//! EXPERIMENTAL
const mouseDown = (e, setIsDown, setStartX, setScrolLeft) => {
  const carousel = document.querySelector<HTMLElement>(".carousel_container");
  setIsDown(true);

  let mouseX = e.pageX - carousel.offsetLeft;
  setStartX(mouseX);

  let scroll = carousel.scrollLeft;
  setScrolLeft(scroll);
};

const mouseMove = (e,isDown: boolean,startX: number,scrolLeft: number,setIsFinishedScrolling) => {
  e.preventDefault();
  const carousel = document.querySelector<HTMLElement>(".carousel_container");
  if (!isDown) return;
  const x = e.pageX - carousel.offsetLeft;

  const walk = (x - startX) * 2; //* თუ უფრო მეტზეგაამრავლე უფრო სწრაფად და მეტზე გადავა
  carousel.scrollLeft = scrolLeft - walk;

  //! არკვევს თუ სქროლბარმა მიაღწია კონტენტის ბოლოში
  if (carousel.offsetWidth + carousel.scrollLeft >= carousel.scrollWidth) {
    setIsFinishedScrolling(true);
    return true;
  } else {
    setIsFinishedScrolling(false);
    return false;
    
  }
};
const mouseLeave = (setIsDown) => {
  setIsDown(false);
};
const mouseUp = (setIsDown) => {
  setIsDown(false);
};

export { mouseDown, mouseMove, mouseLeave, mouseUp };
