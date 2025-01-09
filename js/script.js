// Select elements
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelector('.nav-links');
  const burger = document.querySelector('.hamburger-menu');
  const navbar = document.querySelector('.navbar');

  // Toggle mobile menu
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('bar-change');
  });

  // Sticky navbar and background change on scroll
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    // Add/remove sticky class
    navbar.classList.toggle('sticky', scrollPosition > 0);
  
    // Add/remove scrolled class
    if (scrollPosition > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  
});


// Box click interaction
$(".box").click(function () {
  $(".box").removeClass("active");
  $(this).addClass("active");
});

// Swiper.js configuration
new Swiper('.card-wrapper', {
  loop: true,
  speed: 700,
  spaceBetween: 30,

  // Pagination
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

  // Responsive breakpoints
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

// Focus and blur effects on contact inputs
function handleFocus() {
  this.parentNode.classList.add("focus");
}

function handleBlur() {
  if (this.value === "") {
    this.parentNode.classList.remove("focus");
  }
}

contactInputs.forEach((input) => {
  input.addEventListener("focus", handleFocus);
  input.addEventListener("blur", handleBlur);
});
