document.addEventListener("DOMContentLoaded", function() {
    const sermonItems = document.querySelectorAll('.sermon-item'); // Select all sermon items
    const itemsPerPage = 2; // Number of items per page
    let currentPage = 1; // Start on the first page

    // Total number of pages
    const totalPages = Math.ceil(sermonItems.length / itemsPerPage);

    // Function to display the correct items for the current page
    function showPage(page) {
        // Hide all sermon items
        sermonItems.forEach((item) => item.style.display = 'none');

        // Determine the range of items to show on the current page
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        // Show the items that belong on the current page
        sermonItems.forEach((item, index) => {
            if (index >= start && index < end) {
                item.style.display = 'flex';
            }
        });

        // Update active page number styling
        const pageNumbers = document.querySelectorAll('.pagination-number span');
        pageNumbers.forEach(span => span.classList.remove('active-page'));
        if (pageNumbers[page - 1]) {
            pageNumbers[page - 1].classList.add('active-page'); // Add the active-page class to the current page
        }

        // Disable/Enable Next and Last buttons based on the current page
        const nextButton = document.querySelector('.pagination-number button:nth-of-type(1)');
        const lastButton = document.querySelector('.pagination-number button:nth-of-type(2)');
        nextButton.disabled = currentPage === totalPages;
        lastButton.disabled = currentPage === totalPages;
    }

    // Handle page number clicks
    const pageNumbers = document.querySelectorAll('.pagination-number span');
    pageNumbers.forEach((span, index) => {
        span.addEventListener('click', function() {
            currentPage = index + 1; // Update the current page number
            showPage(currentPage); // Display the correct items for the page
        });
    });

    // Handle "Next" button click
    const nextButton = document.querySelector('.pagination-number button:nth-of-type(1)');
    nextButton.addEventListener('click', function() {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });

    // Handle "Last" button click
    const lastButton = document.querySelector('.pagination-number button:nth-of-type(2)');
    lastButton.addEventListener('click', function() {
        if (currentPage < totalPages) {
            currentPage = totalPages;
            showPage(currentPage);
        }
    });

    // Initialize the first page display
    showPage(currentPage);
});