import { GetBoundingClientRect } from "components/utils/helpers/getBoundingClientRect";

export const cardHoverHandler = (
  e,
  selfRef,
  elProperties,
  setElProperties,
  setIsClicked
) => {
  //Calculates Card width and positions
  // let ww = Math.max(document.documentElement.clientWidth,window.innerWidth || 0);

  const descriptionEl = e.currentTarget.firstChild;
  let el = GetBoundingClientRect(selfRef, elProperties, setElProperties);

  if (Math.round(el.left) > 460) {
    descriptionEl.style.top = `${el.top - el.top - 30}px`;
    descriptionEl.style.right = `${el.width - 20}px`;

  } else {
    if (window.innerWidth > 800) {
      descriptionEl.style.top = `${el.top - el.top - 30}px`;
      descriptionEl.style.left = `${el.width - el.width + 35}px`;

    } else {
      descriptionEl.style.top = `${el.top - el.top - 40}px`;
      descriptionEl.style.right = `${5}rem`;

    }
  }

  setIsClicked((isClicked) => !isClicked);
};
