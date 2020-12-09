export const changeTabPositionAndColor = (Tab) => {
    let main = document.querySelector<HTMLElement>(".Tabs");
    let tabs = main.querySelectorAll<HTMLElement>(".Tab");
    let slider = main.querySelector<HTMLElement>(".Tabs__presentation-slider");
    const colors = ["#338EFF", "#FF5C4D", "#00E267", "#FFD703"];
    // debugger
    slider.style.left = `${tabs[0].offsetLeft}px`;
    // slider.style.top = `${tabs[0].offsetTop + tabs[0].offsetHeight}px`;
    slider.style.width = `${tabs[0].offsetWidth}px`;
    slider.style.backgroundColor = colors[0];
  
  
    tabs.forEach(tab =>{
      let navLeftPos = tab.offsetLeft;
      let navTopPos = tab.offsetTop;
      let navItemHeight = tab.offsetHeight;
      let navItemWidth = tab.offsetWidth;
  
      let color = colors.shift();
      colors.push(color);
  
      tab.addEventListener("click", (e) => {
          const target = e.currentTarget as Element;
          Array.prototype.forEach.call(tabs, function (tab) {
              tab.classList.remove("active");
          });
            
        
          slider.style.left = `${navLeftPos}px`;
            //  slider.style.top = `${navTopPos + navItemHeight}px`;
            slider.style.width = `${navItemWidth}px`;
            
            slider.style.backgroundColor = color;
        
          target.classList.add("active");
      });
    })
  
  };