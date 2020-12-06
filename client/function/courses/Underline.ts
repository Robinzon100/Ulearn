

export const changeTabPositionAndColor = (containerClass: string, childrenClass: string) => {
    const colors = ["#338EFF", "#FF5C4D", "#00E267", "#FFD703"];
    
    const navComponent = document.querySelector<HTMLElement>(
        containerClass
    );
    const navArr = navComponent.querySelectorAll<HTMLElement>(
        childrenClass
    );
    // const navUnderLine = navComponent.querySelector<HTMLElement>(".underline");

    navArr[0].style.borderBottom = `1px solid ${colors[0]}`;
    navArr[0].classList.toggle("underline_blue")

    // navArr[0].style.left = `${navArr[0].offsetLeft}px`;
    // navArr[0].style.width = `${navArr[0].offsetWidth}px`;

    navArr.forEach((navItem,e) => {
        //! ეს ანაცვლებს ფერებს რომ დაემთხვეს იმ დივს რომელიც საჭიროა
      let color = colors.shift();
      colors.push(color);



      navItem.addEventListener("click", (e) => {
        // debugger
        let target = e.currentTarget as Element;
        if(navItem.classList.contains("active")) {
            navItem.classList.remove("active")

        }else {
            navItem.classList.add("underline_blue")
        }
        
        target.classList.toggle("active");
      });
      

    });
    // e.currentTarget.classList.toggle("active");
}