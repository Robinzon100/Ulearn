
export const changeTabPositionAndColor = (colorName) => {
  let main = document.querySelector<HTMLElement>(".tabs-heading--list");
  let tabs = main.querySelectorAll<HTMLElement>(".tabs-heading--list__item");
  

  
  tabs[0].style.borderBottom = `3px solid ${colorName}`;
  tabs[0].style.boxShadow = `${colorName} 0px -7px 10px -10px inset`;

  tabs.forEach((tab) => {

    tab.addEventListener("click", (e) => {
      const target = e.currentTarget as Element;
      Array.prototype.forEach.call(tabs, function (tab) {
        tab.classList.remove("active");
        tab.style.borderBottom = "none";
        tab.style.boxShadow = "none";
      });

      tab.style.borderBottom = `3px solid ${colorName}`;
      tab.style.boxShadow = `${colorName} 0px -7px 10px -10px inset`;
      target.classList.toggle("active");
    });
  });
};
