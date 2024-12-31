const openButton = document.querySelector("#openMenu");
const dialog = document.querySelector("dialog");
const links = dialog.querySelectorAll("a");

openButton.addEventListener("click", () => {
    dialog.showModal();
});

dialog.addEventListener("click", (event) => {
    if (event.target.nodeName === "DIALOG") {
        dialog.close();
    }
});

// Close the dialog when any link is clicked
links.forEach(link => {
    link.addEventListener("click", () => {
        dialog.close();
    });
});


new Swiper('.card-wrapper', {  
    loop: true,  
    speed: 700,  
    spaceBetween: 30,  
  
    // If we need pagination  
    pagination: {  
      el: '.swiper-pagination',  
      clickable: true,  
      dynamicBullets: true,  
    },  
  
    // Navigation arrows  
    navigation: {  
      nextEl: '.swiper-button-next',  
      prevEl: '.swiper-button-prev',  
    },  
    
    breakpoints: { 
      0: {  
        slidesPerView: 1  
      },  
      768: {  
        slidesPerView: 2  
      },  
      1024: {  
        slidesPerView: 3  
      },  
    }  
  });  
