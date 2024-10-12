console.log("hi");

document.addEventListener('DOMContentLoaded', function() {
  const scrollButton = document.getElementById('scrollButton');
  if (scrollButton) { // Check if the button exists
      scrollButton.addEventListener('click', function() {
          const targetParagraph = document.querySelector('ul li p'); // Change the index as needed
          if (targetParagraph) { // Check if the paragraph exists
              targetParagraph.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
          } else {
              console.error('Target paragraph not found.');
          }
      });
  } else {
      console.error('Scroll button not found.');
  }
});


// Carousel
const carouselWrapper = document.querySelector(".carousel-wrapper");
const carouselList = document.querySelector(".carousel-list");
const items = document.querySelectorAll(".carousel-list li");
const leftNav = document.querySelector(".carousel-nav.left");
const rightNav = document.querySelector(".carousel-nav.right");

let currentIndex = 0;

// Function to update the carousel position
function updateCarousel() {
  const itemWidth = carouselWrapper.offsetWidth; // Get the width of the carousel wrapper
  const offset = -currentIndex * itemWidth; // Calculate the offset based on current index
  carouselList.style.transform = `translateX(${offset}px)`; // Apply the calculated offset
}

// Event listener for left navigation button click
leftNav.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--; // Move to the previous item
    updateCarousel();
  }
});

// Event listener for right navigation button click
rightNav.addEventListener("click", () => {
  if (currentIndex < items.length - 1) {
    currentIndex++; // Move to the next item
    updateCarousel();
  }
});

// Initialize carousel position on load
updateCarousel();

// Optionally add event listener for window resize
window.addEventListener("resize", updateCarousel);