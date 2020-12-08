import { Underline } from "react-feather";

export const changeTabPositionAndColor = (containerClass: string, childrenClass: string) => {
    const colors = ["#338EFF", "#FF5C4D", "#00E267", "#FFD703"];
    
    let navComponent = document.querySelector<HTMLElement>(
        containerClass
    );
    let navArr = navComponent.querySelectorAll<HTMLElement>(
        childrenClass
    );
    let navUnderLine = navComponent.querySelector<HTMLElement>(".underline");

    navUnderLine.style.backgroundColor = colors[0];

    navUnderLine.style.left = `${navArr[0].offsetLeft}px`;
    navUnderLine.style.width = `${navArr[0].offsetWidth}px`;
    navUnderLine.style.top = `${navArr[0].offsetTop + navArr[0].offsetHeight}px`;

    navArr.forEach((navItem) => {
        let navLeftPos = navItem.offsetLeft;
		let navTopPos = navItem.offsetTop;
		let navItemHeight = navItem.offsetHeight;
		let navItemWidth = navItem.offsetWidth;
      //! ეს ანაცვლებს ფერებს რომ დაემთხვეს იმ დივს რომელიც საჭიროა
      let color = colors.shift();
      colors.push(color);



      navItem.addEventListener("click", (e) => {
        navUnderLine.style.left = `${navLeftPos}px`;
		navUnderLine.style.top = `${navTopPos + navItemHeight}px`;
		navUnderLine.style.width = `${navItemWidth}px`;
        navUnderLine.style.backgroundColor = color;
        
      });
    });
}