document.getElementById("send-button").addEventListener("click", function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the values of the input fields
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check if all fields are filled
    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Please fill in all fields before submitting.");
        return; // Stop the function if any field is empty
    }

    // You can add more validation for email format, phone format, etc. here if needed

    // If all fields are filled, you can submit the form (optional)
    document.getElementById("contact-form").submit(); // Submit the form programmatically
});

document.getElementById("send-button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default submission

    // Get form data
    const form = document.getElementById("contact-form");
    const formData = new FormData(form);

    // Send form data to Formspree
    fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
            Accept: "application/json"
        }
    })
    .then(response => {
        if (response.ok) {
            alert("Thank you! Your message has been sent.");
            form.reset(); // Reset form after successful submission
        } else {
            alert("There was a problem submitting your form.");
        }
    })
    .catch(error => {
        alert("There was a problem submitting your form.");
        console.error("Error:", error);
    });
});
