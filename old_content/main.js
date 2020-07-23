new Glider(document.querySelector('.glider'), {
  slidesToScroll: 2,
  slidesToShow: 4,
  draggable: true,
  
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
  responsive: [
   {
      
      breakpoint: 50,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 1,
        slidesToScroll: 1,
        itemWidth: 100,
        duration: 0.25
        
      }
    }
    ,{
      // screens greater than >= 360px
      breakpoint: 360,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 1,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
        
      }
    },
    {
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 1
        
      }
    },
    {
      // screens greater than >= 1500px
      breakpoint: 1500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 1
        
      }
    }
  ]
});





// const burger = document.querySelector(".main-burger"); 

const myBurger = () => {
  let nav =  document.querySelector(".mobile-nav"); 
  let burger = document.querySelector(".burger"); 

  /// NEW NAV MENU SUFFELD
  nav.classList.toggle("shuffled-menu");

  /// BURGER TRANSFORMATION
  burger.classList.toggle("new-burger");
  // console.log("Clicled");
}


