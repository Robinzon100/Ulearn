export const changeTabPositionAndColor = (containerClass: string, childrenClass: string) => {
    const colors = ["#338EFF", "#FF5C4D", "#00E267", "#FFD703"];
    let index = 1;
    const navComponent = document.querySelector<HTMLElement>(
        containerClass
    );
    const navArr = navComponent.querySelectorAll<HTMLElement>(
        childrenClass
    );
    const navUnderLine = navComponent.querySelector<HTMLElement>(".underline");

    navUnderLine.style.backgroundColor = colors[0];

    navUnderLine.style.left = `${navArr[0].offsetLeft}px`;
    navUnderLine.style.width = `${navArr[0].offsetWidth}px`;

    navArr.forEach((navItem) => {
      let navLeftPos = navItem.offsetLeft;
      let navItemWidth = navItem.offsetWidth;
      //! ეს ანაცვლებს ფერებს რომ დაემთხვეს იმ დივს რომელიც საჭიროა
      let color = colors.shift();
      colors.push(color);

      navItem.addEventListener("click", (e) => {
        navUnderLine.style.left = `${navLeftPos}px`;
        navUnderLine.style.width = `${navItemWidth}px`;

        navUnderLine.style.backgroundColor = color;
        // navUnderLine.style.transition = " width 100s";
        // console.log(e.currentTarget);
      });
    });
}