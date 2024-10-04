class="news-cont"
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
truncateText("#content", 50);