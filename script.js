const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Add this JavaScript to your existing script or create a new file

document.addEventListener('DOMContentLoaded', function() {
    // Add transition effect to all elements inside the body
    const bodyElements = document.querySelectorAll('body *');
    bodyElements.forEach((element) => {
      element.classList.add('show');
    });
  });

