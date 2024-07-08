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

  // adding functionality on the timeline
  const timelineItems = document.querySelectorAll('.timeline-item');

  window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    timelineItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < triggerBottom) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  });

  // Button to scroll To Top
  const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});