// Define your news articles
const newsArticles = [
    {
        title: "Christian Youth Ministry wins choir competition",
        img: "/assets/img/image8.jpg",
        timePosted: "12 Minutes ago",
        author: "",
        content: "Conductor Manuel Sasindere led his choir from the Christian Youth Ministry to victory at the Shabbach Clash Choir Competition on Saturday, and earned a cash prize of N$1500 and a floating trophy. The competition was aimed at uplifting the spirits of the youth, showcasing three competing choirs, after three others withdrew from the contest. The inaugural event was hosted at Freedom Square in Windhoek. “I am excited, thrilled and overwhelmed with joy. Winning this competition has made me believe in my choir...",
        category: "Competition",
        readTime: "4 min read",
        link: "https://neweralive.na/christian-youth-ministry-wins-choir-competition"
    },
    {
        title: "Junior CYM wins Bible Quiz",
        img: "/assets/img/Bible_win.jpg",
        timePosted: "28 Minutes ago",
        author: "Cemil Chipeo",
        content: "On 6th October 2024, the youth hosted a Bible quiz and it was made a success, thanks to the Spiritual Committee the Organizing Committee and the Main Committee from the Senior Youth. Various churches came to participate in the Bible quiz and all the churches came fully equipped with biblical knowledge. It was a tough decision for the judges to decide on a winner. The judges for this marvelous event was Brother Cemil, Sister Chantelle and Sister Melly assisted by Deacon Abel as the MC. Our Junior Youth fought till the end and won the competition.",
        category: "Competition",
        readTime: "5 min read",
        link: "#"
    }
];



/// Dynamically generate the news articles
function generateNewsArticles(articles) { // Accept articles as an argument
    const newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML = ''; // Clear any existing content

    articles.forEach((news) => {
        const newsItem = document.createElement("div");
        newsItem.classList.add("newest");

        newsItem.innerHTML = `
            <img src="${news.img}" alt="" onclick="window.open('${news.link}', '_blank')">
            <div class="new-info">
                <div class="who">
                    <img src="/assets/img/Christian_men.jpg" alt="">
                    <span class="dot"></span>
                    <span class="time-posted">${news.timePosted}</span>
                </div>
                <h1 class="read-more" aria-label="Read more about ${news.title}" onclick="window.open('${news.link}', '_blank')">
                    ${news.title}
                </h1>
                <p><strong>${news.author}</strong></p>
                <p class="news-cont">${news.content}</p> <!-- Full content displayed -->
                <div class="cate">
                    <span>${news.category}</span>
                    <span class="dot"></span>
                    <span>${news.readTime}</span>
                    <button onclick="location.href='${news.link}'">Read more</button>
                </div>
            </div>
        `;

        newsContainer.appendChild(newsItem);
    });
}

// Function to filter news articles based on the search query
function searchNews(query) {
    const filteredArticles = newsArticles.filter((news) => {
        const searchTerm = query.toLowerCase();
        return (
            news.title.toLowerCase().includes(searchTerm) ||
            news.author.toLowerCase().includes(searchTerm) ||
            news.category.toLowerCase().includes(searchTerm) ||
            news.content.toLowerCase().includes(searchTerm) // Include content in search
        );
    });

    // Regenerate the news items based on the filtered articles
    generateNewsArticles(filteredArticles); // Pass filtered articles to the function
}

// Call the function to display all news articles initially
generateNewsArticles(newsArticles);

// Event listener for the search form
document.getElementById("search-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting
    const searchInput = document.getElementById("search-input").value;
    searchNews(searchInput); // Call the search function with the input value
});
