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

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImage = document.querySelectorAll('.carousel-slide img');
// buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
//counter
let counter = 1;
const size = carouselImage[0].clientWidth;

carouselSlide.style.transform = 'translate X(' + (-size * counter) + 'px)';
// Button listeners
nextBtn.addEventListener('click', () => {
  if (counter >= carouselImage.length - 1) return;
  carouselSlide.style.transition = "transform 0,45 ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
});
prevBtn.addEventListener('click', () => {
  if (counter <= 0) return
  carouselSlide.style.transition = "transform 0,45 ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
});
carouselSlide.addEventListener('transitioned', () => {
  if (carouselImage[counter].id === 'lastclone') {
    carouselSlide.style.transition = "none";
    counter = carouselImage.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
  }
  if (carouselImage[counter].id === 'firstclone') {
    carouselSlide.style.transition = "none";
    counter = carouselImage.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
  }
});