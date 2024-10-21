document.addEventListener("DOMContentLoaded", function () {
  // Select the prayer type spans
  const prayerTypeSpans = document.querySelectorAll(".type-item span");
  let selectedPrayerType = document.querySelector(".type-item span.selected").dataset.value;

  // Function to handle span selection like a radio button
  prayerTypeSpans.forEach((span) => {
    span.addEventListener("click", function () {
      prayerTypeSpans.forEach((s) => s.classList.remove("selected")); // Remove 'selected' class from all spans
      this.classList.add("selected"); // Add 'selected' class to the clicked span
      selectedPrayerType = this.dataset.value; // Update the selected prayer type
    });
  });

  // Handle button click and trigger form submission
  document.getElementById("submit").addEventListener("click", function () {
    // Manually trigger form submission
    document.getElementById("prayer-form").submit();
  });

  // Form submission logic
  document
    .getElementById("prayer-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      // Simple form validation
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const prayerRequest = document
        .getElementById("prayerRequest")
        .value.trim();

      if (!name || !email || !prayerRequest) {
        alert("Please fill in all required fields.");
        return;
      }

      // Regex for validating email
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
        return;
      }

      // Prepare email data
      const formData = {
        name: name,
        email: email,
        phone: document.getElementById("phone").value.trim(),
        prayerType: selectedPrayerType, // Use the selected prayer type
        prayerRequest: prayerRequest,
      };

      // Sending email using SMTP.js
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "seinprince2@gmail.com",
        Password: "------",
        To: "seinprince2@gmail.com",
        From: formData.email,
        Subject: `${formData.name} submitted prayer request`,
        Body: `
              A new prayer request has been submitted.
              Name: ${formData.name}
              Email: ${formData.email}
              Phone: ${formData.phone}
              Prayer Type: ${formData.prayerType}
              Prayer Request: ${formData.prayerRequest}
          `,
      })
        .then(function (message) {
          document.getElementById("submit").textContent = "Prayer submitted";
        })
        .catch(function (error) {
          console.error("Error sending email:", error);
          document.getElementById("submit").textContent = "Sorry, error submitting prayer";
          document.getElementById("error").style.display = "block";
          document.getElementById("error").textContent =
            "There was an error. Please check your internet connection and try again.";
        });
    });
});
