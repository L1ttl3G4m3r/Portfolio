// Get the toggle button and the image inside the button
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeImage = document.getElementById('darkModeImage');

// Get other images you want to toggle
const logoImage = document.getElementById('logoImage'); // Example logo image ID
const loginImage = document.querySelector('.loginBtn img'); // Login button image

// Get social media images by their respective classes or IDs
const behanceImage = document.getElementById('behanceImage');
const pinterestImage = document.getElementById('pinterestImage');
const linkedinImage = document.getElementById('linkedinImage');
const instagramImage = document.getElementById('instagramImage');

// Check if the user has a saved theme preference in localStorage
const currentTheme = localStorage.getItem('theme');

// Apply the saved theme (if any) or default to light mode
if (currentTheme === 'dark') {
  document.body.classList.add('dark');
  darkModeImage.src = '/images/lightModeToggle.svg'; // Change to light mode icon
  // Change other images to dark mode versions
  logoImage.src = '/images/logo-dark.svg'; // Dark mode logo
  loginImage.src = '/images/login-dark.svg'; // Dark mode login icon
  // Change social media icons to dark mode versions
  behanceImage.src = '/images/behance-dark.svg';
  pinterestImage.src = '/images/pinterest-dark.svg';
  linkedinImage.src = '/images/linkedin-dark.svg';
  instagramImage.src = '/images/instagram-dark.svg';
} else {
  document.body.classList.remove('dark');
  darkModeImage.src = '/images/darkModeToggle.svg'; // Keep the dark mode icon
  // Change other images to light mode versions
  logoImage.src = '/images/logo-light.svg'; // Light mode logo
  loginImage.src = '/images/login-light.svg'; // Light mode login icon
  // Change social media icons to light mode versions
  behanceImage.src = '/images/behance-light.svg';
  pinterestImage.src = '/images/pinterest-light.svg';
  linkedinImage.src = '/images/linkedin-light.svg';
  instagramImage.src = '/images/instagram-light.svg';
}

// Toggle the theme when the button is clicked
darkModeToggle.addEventListener('click', () => {
  // Toggle the 'dark' class on the body to switch between themes
  document.body.classList.toggle('dark');
  
  // Update localStorage and the image based on the current theme
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    darkModeImage.src = '/images/lightModeToggle.svg'; // Switch to light mode icon
    // Switch to dark mode images
    logoImage.src = '/images/logo-dark.svg'; // Dark mode logo
    loginImage.src = '/images/login-dark.svg'; // Dark mode login icon
    // Social media icons in dark mode
    behanceImage.src = '/images/behance-dark.svg';
    pinterestImage.src = '/images/pinterest-dark.svg';
    linkedinImage.src = '/images/linkedin-dark.svg';
    instagramImage.src = '/images/instagram-dark.svg';
  } else {
    localStorage.setItem('theme', 'light');
    darkModeImage.src = '/images/darkModeToggle.svg'; // Switch to dark mode icon
    // Switch to light mode images
    logoImage.src = '/images/logo-light.svg'; // Light mode logo
    loginImage.src = '/images/login-light.svg'; // Light mode login icon
    // Social media icons in light mode
    behanceImage.src = '/images/behance-light.svg';
    pinterestImage.src = '/images/pinterest-light.svg';
    linkedinImage.src = '/images/linkedin-light.svg';
    instagramImage.src = '/images/instagram-light.svg';
  }
});
