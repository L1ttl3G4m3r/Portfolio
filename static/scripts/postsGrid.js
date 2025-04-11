document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeBtn = document.getElementsByClassName('close-btn')[0];
  
    // Get all images in the grid
    const images = document.querySelectorAll('.grid-item img');
  
    images.forEach(image => {
      image.addEventListener('click', (e) => {
        // Set the title and description from the clicked image's data attributes
        modalTitle.textContent = e.target.dataset.title;
        modalDescription.textContent = e.target.dataset.description;
  
        // Display the modal
        modal.style.display = 'block';
      });
    });
  
    // When the user clicks on <span> (x), close the modal
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  