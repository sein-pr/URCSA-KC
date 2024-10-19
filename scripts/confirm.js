document.addEventListener('DOMContentLoaded', function () {
    const fieldsets = document.querySelectorAll('fieldset');
    const nextButtons = document.querySelectorAll('button');
    const choices = document.querySelectorAll('.choice-item .item-content span:first-child');
    const progressBars = document.querySelectorAll('.progress');
    let currentSection = 0; // Track the current section

    // Show only the first fieldset initially
    fieldsets.forEach((fieldset, index) => {
        fieldset.style.display = index === 0 ? 'block' : 'none';
    });

    // Handle "Next" button click
    nextButtons.forEach((button, index) => {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            // If we're not at the last section
            if (currentSection < fieldsets.length - 1) {
                // Hide the current fieldset
                fieldsets[currentSection].style.display = 'none';

                // Increment to the next section
                currentSection++;

                // Show the next fieldset
                fieldsets[currentSection].style.display = 'block';

                // Change background color of the first span in the corresponding .item-content
                choices[currentSection].style.backgroundColor = '#508C9B'; // Change color

                // Change .progress border to solid in the previous section
                if (progressBars[currentSection - 1]) {
                    progressBars[currentSection - 1].classList.add('solid');
                }

                // If we are in the last section, change the button text to "Submit"
                if (currentSection === fieldsets.length - 1) {
                    button.textContent = 'Submit';
                }
            } else {
                // If it's the last section, handle form submission or next step
                alert('Form submitted!'); // Placeholder for actual form submission logic
            }
        });
    });
});

