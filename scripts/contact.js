document.getElementById("send-button").addEventListener("click", function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the values of the input fields
    const name = document.querySelector("input[name='name']").value.trim();
    const email = document.querySelector("input[name='email']").value.trim();
    const phone = document.querySelector("input[name='phone']").value.trim();
    const message = document.querySelector("textarea[name='message']").value.trim();

    // Validate that all fields are filled
    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Please fill in all fields before submitting.");
        return; // Stop if validation fails
    }

    // Submit the form data using Formspree
    const form = document.getElementById("contact-form");
    const formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
            Accept: "application/json"
        }
    })
    .then(response => {
        if (response.ok) {
            // Notify the user and send the email using SMTP.js after successful submission
            alert("Thank you! Your message has been sent.");
            form.reset(); // Reset the form after submission

            // Send an email using SMTP.js
            Email.send({
                Host: "smtp.elasticemail.com",
                Username: "seinprince2@gmail.com",
                Password: "----------------------",
                To: 'seinprince2@gmail.com',
                From: document.getElementById("email").value,
                Subject: "Katutura Congression Contact Form",
                Body: `
                    Name: ${name}<br>
                    Email: ${email}<br>
                    Phone: ${phone}<br>
                    Message: ${message}
                `
            }).then(
                emailMessage => alert("Email sent: " + emailMessage)
            );
        } else {
            alert("There was a problem submitting your form.");
        }
    })
    .catch(error => {
        alert("There was a problem submitting your form.");
        console.error("Error:", error);
    });
});