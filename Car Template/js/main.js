const lightbox = document.getElementById('imageLightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeLightbox = document.getElementById('closeLightbox');
const carImages = document.querySelectorAll('.car-image img');

carImages.forEach(image => {
    image.addEventListener('click', function() {
        lightboxImage.src = image.src;
        lightbox.style.display = 'block';
    });
});

closeLightbox.addEventListener('click', function() {
    lightbox.style.display = 'none';
});

  