import Swiper from "swiper";
import "swiper/css/swiper.css";


export default function Slider() {
    // const caruselImages = document.querySelectorAll(".carusel_images");
    // const carusel = document.querySelector(".project_layout");
    // const arrows__left = document.querySelector(".arrows__left");
    // const arrows__right = document.querySelector(".arrows__right");
    // console.log(caruselImages);
    // let amountOfClicks = 0;
    // const size = caruselImages[0].clientWidth;
    // let total = 0;
    // let caruselImageWidth = Math.floor(
    //     getComputedStyle(caruselImages[0]).width.split("px")[0]
    // );
    // let caruselImageRightMargin = parseInt(
    //     getComputedStyle(caruselImages[0]).marginRight.split("px")[0]
    // );
    // let amount = caruselImageWidth + caruselImageRightMargin;
    // arrows__left.addEventListener("click", () => {
    //     amountOfClicks++;
    //     if (amountOfClicks == caruselImages.length) {
    //         total = 0;
    //         amountOfClicks = 0;
    //     } else {
    //         // if(amountOfClicks <= 0){
    //         // }
    //         total = total + amount;
    //     }
    //     carusel.style.transform = `translateX(${total}px)`
    //     console.log(arrows__left);
    // })

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        // loop: true,
        spaceBetween: 30,
        grabCursor: true,
        centeredSlides: true,
        // autoplay: {
        // delay: 1500,
        // disableOnInteraction: false,
        // },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }

    });


    return (
        <React.Fragment>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">Slide 1</div>
                    <div className="swiper-slide">Slide 2</div>
                    <div className="swiper-slide">Slide 3</div>
                    <div className="swiper-slide">Slide 4</div>
                    <div className="swiper-slide">Slide 5</div>
                    <div className="swiper-slide">Slide 6</div>
                    <div className="swiper-slide">Slide 7</div>
                </div>

                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        </React.Fragment>
    );



}
