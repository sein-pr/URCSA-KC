const image = document.getElementById('stone');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const closeModalButton = document.getElementById('closeModal');

const bibleClosed = document.getElementById('bibleClosed');
const bibleOpen = document.getElementById('bibleOpen');
const bibleModal = document.getElementById('bibleModal');
const bibleModalImage = document.getElementById('bibleModalImage');
const closeBibleModalButton = document.getElementById('closeBibleModal');

// Event listener for the Stone Writing image
image.onclick = function() {
    modal.style.display = 'block';
    overlay.style.display = 'block';
};

// Event listener for the close button
closeModalButton.onclick = function() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
};

// Close modal when clicking on the overlay
overlay.onclick = function() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
};

// Event listener for the Old Bible images
bibleClosed.onclick = function() {
    bibleModalImage.src = bibleClosed.src; // Set modal image to the clicked image
    bibleModal.style.display = 'block';
    overlay.style.display = 'block';
};

bibleOpen.onclick = function() {
    bibleModalImage.src = bibleOpen.src; // Set modal image to the clicked image
    bibleModal.style.display = 'block';
    overlay.style.display = 'block';
};

// Event listener for closing the Bible modal
closeBibleModalButton.onclick = function() {
    bibleModal.style.display = 'none';
    overlay.style.display = 'none';
};

// Close Bible modal when clicking on the overlay
overlay.onclick = function() {
    bibleModal.style.display = 'none';
    overlay.style.display = 'none';
};

// Gallery modal elements
const galleryImages = document.querySelectorAll('.gallery-image');
const galleryModal = document.getElementById('galleryModal');
const galleryModalImage = document.getElementById('galleryModalImage');
const galleryOverlay = document.getElementById('galleryOverlay');
const closeGalleryModalButton = document.getElementById('closeGalleryModal');

// Event listeners for each gallery image
galleryImages.forEach(image => {
    image.onclick = function() {
        galleryModalImage.src = image.src; // Set modal image to the clicked image
        galleryModal.style.display = 'block';
        galleryOverlay.style.display = 'block';
    };
});

// Close gallery modal when clicking the close button
closeGalleryModalButton.onclick = function() {
    galleryModal.style.display = 'none';
    galleryOverlay.style.display = 'none';
};

// Close gallery modal when clicking the overlay
galleryOverlay.onclick = function() {
    galleryModal.style.display = 'none';
    galleryOverlay.style.display = 'none';
};