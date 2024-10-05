
function truncateText(selector, maxWords) {
    let element = document.querySelector(selector);
    let text = element.innerText.trim();
    let words = text.split(/\s+/);  // Split the text into an array of words
    if (words.length > maxWords) {
        let truncated = words.slice(0, maxWords).join(" ") + "...";  // Join the first 'maxWords' words and add ellipsis
        element.innerText = truncated;  // Replace the original text with truncated text
    }
}

// Call the function to truncate the paragraph to 50 words
truncateText(".news-cont", 50);


function truncateTextByClass(maxWords) {
    let elements = document.querySelectorAll(".news-item .news-cont"); // Select all elements with the class name
    elements.forEach(function(element) {  // Loop through each element
        let text = element.innerText.trim();
        let words = text.split(/\s+/);  // Split the text into an array of words
        if (words.length > maxWords) {
            let truncated = words.slice(0, maxWords).join(" ") + "...";  // Join the first 'maxWords' words and add ellipsis
            element.innerText = truncated;  // Replace the original text with truncated text
        }
    });
}

// Call the function to truncate all paragraphs with class "truncate" to 50 words
truncateTextByClass(25);


document.addEventListener("DOMContentLoaded", function () {
    const newsItems = [
        {
            title: "Upcoming Charity Drive for Underprivileged Communities",
            content: "The Christian Men's Ministry is organizing a charity drive to support underprivileged communities in the region. The event will take place on November 12, 2024, and will include donations of food, clothing, and school supplies. CMM invites all congregation members and the public to contribute to this noble cause.",
            image: "/assets/img/Christian_men.jpg"
        },
        {
            title: "Annual CMM Leadership Workshop: Building Strong Foundations",
            content: "The CMM is hosting its annual leadership workshop on October 25-26, 2024, focusing on 'Building Strong Foundations in Faith and Service.' The workshop will feature guest speakers, including regional church leaders, who will provide guidance on leading with integrity and purpose. All men in the congregation are encouraged to attend.",
            image: "/assets/img/CMM_workshop.jpg"
        },
        {
            title: "CMM Men's Prayer Group Kicks Off New Year with Service Projects",
            content: "The Christian Men's Ministry has kicked off the new year with a series of community service projects. These initiatives include volunteer work at local shelters and mentorship programs for at-risk youth. CMM encourages all members to join these efforts and live out their faith in service to others.",
            image: "/assets/img/CMM_prayer.jpg"
        }
    ];

    // Function to truncate content to 20 words and add ellipsis
    function truncateContent(content) {
        const words = content.split(" ");
        if (words.length > 20) {
            return words.slice(0, 20).join(" ") + "...";
        }
        return content;
    }

    // Get the modal and container for news content
    const modal = document.querySelector(".news-modal");
    const modalNewsContainer = modal.querySelector(".modal-news-con");

    // Function to update the modal with the latest news item content
    function updateModal(newsItem) {
        const newsTitle = modal.querySelector("h3 span");
        const newsImage = modal.querySelector(".news-item img");
        const newsContent = modal.querySelector(".news-item .news-conte");
        const newsHeadline = modal.querySelector(".news-item h4");

        newsHeadline.innerText = newsItem.title;
        newsContent.innerText = truncateContent(newsItem.content);
        newsImage.src = newsItem.image;
        newsImage.alt = newsItem.title;
    }

    // Hover event handling for news images
    const ministrySections = document.querySelectorAll(".from-ministry img");

    ministrySections.forEach((imgElement, index) => {
        imgElement.addEventListener("mouseenter", function () {
            updateModal(newsItems[index]);

            const rect = imgElement.getBoundingClientRect();
            const imgHeight = rect.height;

            // Place modal directly above the hovered image
            modal.style.top = `${rect.top - imgHeight - modal.offsetHeight - 10}px`; // adjust position above image
            modal.style.left = `${rect.left}px`;

            // Show modal
            modal.style.display = "block";
        });

        imgElement.addEventListener("mouseleave", function () {
            // Hide modal when mouse leaves the image
            modal.style.display = "none";
        });
    });
});
