 
  export const handleAddFavorite = (e,setAddToFavorites) => {
    // debugger
    const hearts = document.querySelectorAll(".heart");
    hearts.forEach((heart) => {
      if (heart.classList.contains("heart-background")) {
        heart.classList.remove("heart-background");
      }
    });
    e.currentTarget.classList.toggle("heart-background");

    setAddToFavorites((addToFavorites) => !addToFavorites);
  };
