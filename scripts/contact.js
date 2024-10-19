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
    
    // Call the sendEmail function if all fields are filled
    sendEmail(name, email, phone, message);
});

function sendEmail(name, email, phone, message){
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "urcsa-kc@gmail.com",
        Password: "5C0E5EC75D5DE29F38BF420BC48928D54F58",
        To: 'seinprince2@gmail.com',
        From: email,
        Subject: "URCSA-KC Contact Form Enquiry",
        Body: `
            Name: ${name}<br>
            Email: ${email}<br>
            Phone: ${phone}<br>
            Message: ${message}
        `
    }).then(
        emailMessage => alert("Email sent: " + emailMessage)
    ).catch(error => {
        console.error("Failed to send email:", error);
        alert("There was an error sending the email.");
    });
}
