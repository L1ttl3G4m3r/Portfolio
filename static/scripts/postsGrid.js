document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('imageModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const closeBtn = document.getElementsByClassName('close-btn')[0];
  const modalButton = document.querySelector('.buttons button'); //

  const images = document.querySelectorAll('.grid-item img');

  images.forEach(image => {
    image.addEventListener('click', (e) => {
      modalTitle.textContent = e.target.dataset.title;
      modalDescription.textContent = e.target.dataset.description;
      const href = e.target.dataset.href;

      modalButton.onclick = () => {
        window.open(href, '_blank');
      };

      modal.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
