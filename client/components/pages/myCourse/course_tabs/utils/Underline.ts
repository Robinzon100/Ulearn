
export const changeTabPositionAndColor = () => {
  let main = document.querySelector<HTMLElement>(".tabs-heading--list");
  let tabs = main.querySelectorAll<HTMLElement>(".tabs-heading--list__item");
  
  const colors = ["#338eff", "#ff5c4d", "#16c93e", "#ffd703"];
  
  
  tabs[0].style.borderBottom = `3px solid ${colors[0]}`;
  tabs[0].style.boxShadow = `${colors[0]} 0px -7px 10px -10px inset`;

  tabs.forEach((tab) => {
    let color = colors.shift();
    colors.push(color);

    tab.addEventListener("click", (e) => {
      const target = e.currentTarget as Element;
      Array.prototype.forEach.call(tabs, function (tab) {
        tab.classList.remove("active");
        tab.style.borderBottom = "none";
        tab.style.boxShadow = "none";
      });

      tab.style.borderBottom = `3px solid ${color}`;
      tab.style.boxShadow = `${color} 0px -7px 10px -10px inset`;
      target.classList.toggle("active");
    });
  });
};
