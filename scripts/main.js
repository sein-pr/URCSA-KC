let currentIndex = 0;
const images = document.querySelectorAll('.carousel-img img');
const totalImages = images.length;
const indicators = document.querySelectorAll('.indicator');

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
}

function setCurrentImage(index) {
    currentIndex = index;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100; // Move by 100% of the width of one image
    document.querySelector('.carousel-img').style.transform = `translateX(${offset}%)`;
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

// Auto slide
setInterval(showNextImage, 5000); // Change image every 5 seconds

