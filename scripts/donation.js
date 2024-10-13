// Get references to the input field and buttons
const inputAmount = document.getElementById('input-amount');
const buttons = document.querySelectorAll('.how-much input[type="button"]');
const customAmountButton = document.getElementById('custom-amount');

// Add click event listeners to the buttons
buttons.forEach(button => {
    button.addEventListener('click', function () {
        // Update input value and focus it
        inputAmount.value = this.value.replace('$', ''); // Remove dollar sign
        inputAmount.focus(); // Focus the input field

        // Remove highlight from input and apply if custom amount is clicked
        if (this.value === 'Custom amount') {
            inputAmount.classList.add('highlight'); // Highlight the input
            inputAmount.value = ''; // Clear the input for custom entry
        } else {
            inputAmount.classList.remove('highlight'); // Remove highlight
        }
    });
});

// Handle the focus out event to remove highlight if needed
inputAmount.addEventListener('focusout', function () {
    this.classList.remove('highlight'); // Remove highlight when losing focus
});


    // Get references to elements
const videoModal = document.getElementById('video-modal');
const openModalBtn = document.getElementById('open-video-modal');
const closeModalBtn = document.getElementById('close-modal');

// Open modal when button is clicked
openModalBtn.addEventListener('click', () => {
    videoModal.classList.toggle('hidden'); // Toggle visibility of the modal
});

// Close modal when 'X' button is clicked
closeModalBtn.addEventListener('click', () => {
    videoModal.classList.toggle('hidden'); // Hide the modal
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === videoModal) {
        videoModal.classList.toggle('hidden'); // Hide the modal if user clicks outside
    }
});
