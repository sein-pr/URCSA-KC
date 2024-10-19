
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
const galleryModalText = document.getElementById('galleryModalText');

// Event listeners for each gallery image
galleryImages.forEach(image => {
    image.onclick = function() {
        galleryModalImage.src = image.src; // Set modal image to the clicked image
        galleryModalText.textContent = image.getAttribute('data-message');
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

document.addEventListener('DOMContentLoaded', function() {
    const introParagraph = document.querySelector('.intro-paragraph');
    const readMoreSpan = document.getElementById('read-more');
    
    // Your content here (for example purposes)
    const fullText = "In the second century the church already was divided into two, namely the Eastern and Western Church. Since these times there has always been people in the church who have been unhappy about certain developments within the church. <br/><br/>  Our church, backdating in history it originates from a movement called 'Protestant'. Protestant because great scholars protested against the only then church 'Roman empire' system and practices. <br/><br/> Many voices from different countries raised against the developments in the Church. However, noticeable that impacted the birth of our church were: <strong>Martin Luther</strong>, who studied to become a priest in the church. He was opposed to the system of indulgence and wrestled with the question, 'How can a person be certain of the grace of God?'. One day he nailed his points of view known as the 95 doctrines to the door of the Church in Wittenberg. As a result, he had to appear before the pope, but he stuck to his point of view. Martin Luther assisted in the publication of a Greek translation of the Bible. In addition, he wrote many books to explain the meaning of the Bible and made it understandable for normal people. The Lutheran Church developed from Luther's standpoint on the Bible and the church. <br/><br/>  The other great voice raised from Switzerland and France was <strong>John Calvin</strong> , who protested in Switzerland and France against the situation within the church. He further wrote a book called 'The Institution' in which he indicated how the church should be reformed and managed through Christian education based on the Bible. Furthermore, he made suggestions on how the church could be made more 'democratic'. He denounced the power of the papal system and wanted lay people to participate more in the activities and life of the Church. He encouraged them to read the Bible themselves, act and live accordingly, and not just accept the guidance of the 'clergy'. <br/><br/>  The Reformed Church system is based on John Calvin's suggestions. This is also the system that our Church follows. <br/><br/> Over time, as more and more voices arose, such as <strong>Zwingli</strong> and <strong>Beza</strong>, this led to a split in the Roman Catholic Church and the establishment of different Protestant churches in Europe. <br/><br/> In the 1490s, missionaries started to come to Africa, whilst in the 1730s, the Christian missionaries bringing in the Protestant churches such as the Lutheran Church and Reformed Church arrived in South Africa. Our Church 'Uniting Reformed in Southern Africa' originates from South Africa, as initially, that was where most missionaries settled. In the 1970s, our church was first established in the coloured communities and later in the black communities in Kaokoland. Back then our church was known by its Afrikaans name (EGKA-Evangelie Reformeerde Kerk in Africa), which translates to Evangelical Reformed Church in Africa. After Namibia's independence, leaders of the Church set and agreed to denounce the above apartheid-era name, and we became what we know today in the whole of Africa: <strong>in Southern Africa</strong>, and in the Afrikaans language <strong>Verenigende Gereformeerde Kerk in Suider Afrika.</strong> ";
    
    // Split text into words
    const words = fullText.split(' ');
    
    // Set the limit of words to be displayed initially
    const wordLimit = 200;
    
    if (words.length > wordLimit) {
        // Create a short version of the content
        const shortText = words.slice(0, wordLimit).join(' ');
        introParagraph.innerHTML = shortText + '...';
        readMoreSpan.style.display = 'inline';  // Show 'Read more'
        
        // Add click event to display full text when 'Read more' is clicked
        readMoreSpan.addEventListener('click', function() {
            introParagraph.innerHTML = fullText;  // Show full content
            readMoreSpan.style.display = 'none';  // Hide 'Read more'
        });
    } else {
        // If the content is already shorter than 1000 words, show it fully
        introParagraph.innerHTML = fullText;
    }
});

