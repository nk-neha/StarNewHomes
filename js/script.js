document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about_section");
    const projectsSection = document.querySelector(".projects__container");

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        },
        { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    // Observe both sections
    observer.observe(aboutSection);
    observer.observe(projectsSection);

    // Navbar scroll behavior
    let prevScrollpos = window.pageYOffset; // Track previous scroll position
    const navbar = document.querySelector('.navbar'); // Select the navbar

    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;

        // Show navbar if scrolling up, hide if scrolling down
        if (prevScrollpos > currentScrollPos) {
            navbar.classList.remove('hidden');
        } else {
            navbar.classList.add('hidden');
        }

        // Update the previous scroll position
        prevScrollpos = currentScrollPos;
    };
});

document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;

    // Close any open accordion item
    document.querySelectorAll(".accordion-item").forEach((item) => {
      if (item !== accordionItem) {
        item.classList.remove("open");
      }
    });

    // Toggle the current accordion item
    accordionItem.classList.toggle("open");
  });
});

const container = document.querySelector('.projects__container');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        container.classList.add('animate');
      }
    });
  },
  { threshold: 0.2 } // Trigger when 20% of the container is visible
);

observer.observe(container);

