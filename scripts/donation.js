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
