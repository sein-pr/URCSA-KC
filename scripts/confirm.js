document.addEventListener("DOMContentLoaded", function () {
  const fieldsets = document.querySelectorAll("fieldset");
  const nextButtons = document.querySelectorAll("button");
  const choices = document.querySelectorAll(
    ".choice-item .item-content span:first-child"
  );
  const progressBars = document.querySelectorAll(".progress");
  let currentSection = 0; // Track the current section

  // Show only the first fieldset initially
  fieldsets.forEach((fieldset, index) => {
    fieldset.style.display = index === 0 ? "block" : "none";
  });

  // Handle "Next" button click
  nextButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      // Validate current section inputs before moving to the next section
      const inputs =
        fieldsets[currentSection].querySelectorAll("input, textarea");
      let allFilled = true;
      inputs.forEach((input) => {
        if (!input.value.trim()) {
          allFilled = false;
          input.classList.add("error"); // Optionally, add a class to highlight empty fields
        } else {
          input.classList.remove("error"); // Remove error class if input is filled
        }
      });

      if (!allFilled) {
        alert(
          "Please fill in all fields before proceeding to the next section."
        );
        return; // Stop here if not all fields are filled
      }

      // If we're not at the last section
      if (currentSection < fieldsets.length - 1) {
        // Hide the current fieldset
        fieldsets[currentSection].style.display = "none";

        // Increment to the next section
        currentSection++;

        // Show the next fieldset
        fieldsets[currentSection].style.display = "block";

        // Change background color of the first span in the corresponding .item-content
        choices[currentSection].style.backgroundColor = "#201658"; // Change color to indicate progress

        // Update the progress bar in the previous section to solid
        if (progressBars[currentSection - 1]) {
          progressBars[currentSection - 1].style.border = "2px solid #201658"; // Fill progress bar with color
        }

        // If we are in the last section, change the button text to "Submit"
        if (currentSection === fieldsets.length - 1) {
          button.textContent = "Submit";
        }
      } else {
        // If it's the last section, ensure the checkbox is checked before submission
        const confirmCheckbox = document.getElementById("confirm-checkbox");
        if (!confirmCheckbox.checked) {
          alert(
            'Please confirm your submission by checking the "I confirm" checkbox.'
          );
          return; // Stop submission if checkbox isn't checked
        }

        // Submit the form after validation
        const form = document.getElementById("confirmation-form");
        form.submit(); // Submit form when user reaches the last section and checkbox is checked
      }
    });
  });
});

// // Handle form submission with EmailJS
// submitButton.addEventListener("click", function (event) {
//   event.preventDefault();

//   // Check if the confirm checkbox is checked
//   const confirmCheckbox = document.getElementById("confirm-checkbox");
//   if (!confirmCheckbox.checked) {
//     alert("Please confirm the information before submitting.");
//     return;
//   }

//   // Collect form data into an object
//   const formData = {
//     surname: document.getElementById("surname").value,
//     names: document.getElementById("names").value,
//     dob: document.getElementById("dob").value,
//     idNumber: document.getElementById("id-number").value,
//     placeOfBirth: document.getElementById("place-of-birth").value,
//     fatherName: document.getElementById("father-name").value,
//     motherName: document.getElementById("mother-name").value,
//     maritalStatus: document.getElementById("marital-status").value,
//     spouseName: document.getElementById("spouse-name").value,
//     address: document.getElementById("address").value,
//     phone: document.getElementById("phone").value,
//     schoolGrade: document.getElementById("school-grade").value,
//     currentActivity: document.getElementById("current-activity").value,
//     baptised: document.getElementById("baptised").value,
//     denomination: document.getElementById("denomination").value,
//     baptismDate: document.getElementById("baptism-date").value,
//     ministerName: document.getElementById("minister-name").value,
//     witnessNames: document.getElementById("witness-names").value,
//     completedSundaySchool: document.getElementById("completed-sunday-school")
//       .value,
//     activities: document.getElementById("activities").value,
//     sport: document.getElementById("sport").value,
//     reading: document.getElementById("reading").value,
//     films: document.getElementById("films").value,
//   };

//   // Send the form data via EmailJS
//   emailjs.send("service_p92ykug", "Ytemplate_p13rm4f", formData).then(
//     function (response) {
//       alert("Form submitted successfully!");
//     },
//     function (error) {
//       alert("Failed to submit the form. Please try again later.");
//     }
//   );
// });
// Form validation and submission with Formspree and SMTP.js
document
  .getElementById("submit-form")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const form = document.getElementById("confirmation-form");
    const formData = new FormData(form);
    const formDataObj = Object.fromEntries(formData); // Convert FormData to an object

    // Generate and download PDF
    generatePDF(formDataObj);

    // Send the form data to Formspree
    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Thank you! Your information has been submitted.");
          form.reset();

          // Send email notification with PDF using SMTP.js
          sendEmailWithPDF(formDataObj);
        } else {
          alert("There was an issue submitting your form.");
        }
      })
      .catch((error) => {
        alert("An error occurred.");
        console.error("Error:", error);
      });
  });

// Function to generate and download PDF
function generatePDF(formData) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Title
  doc.text("Confirmation Details", 14, 16);

  // Add table
  const tableData = Object.entries(formData).map(([key, value]) => [
    key,
    value,
  ]);

  doc.autoTable({
    head: [["Field", "Value"]],
    body: tableData,
    startY: 30,
  });

  // Save the PDF
  doc.save("confirmation-details.pdf");
}

// Function to send email with PDF attachment
function sendEmailWithPDF(formData) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Create PDF content for email
  doc.text("Confirmation Details", 14, 16);
  const tableData = Object.entries(formData).map(([key, value]) => [
    key,
    value,
  ]);

  doc.autoTable({
    head: [["Field", "Value"]],
    body: tableData,
    startY: 30,
  });

  // Convert PDF to data URI
  const pdfData = doc.output("datauristring");

  // Send email
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "seinprince2@gmail.com",
    Password: "Sein@2001@Sein",
    To: "seinprince2@gmail.com",
    From: "your-email@domain.com",
    Subject: "New Form Submission with PDF",
    Body: "A new form has been submitted. Please find the attached PDF.",
    Attachments: [
      {
        name: "confirmation-details.pdf",
        data: pdfData, // Attach the generated PDF
      },
    ],
  }).then((message) => alert("Email sent: " + message));
}
