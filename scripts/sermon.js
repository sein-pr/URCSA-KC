document.addEventListener("DOMContentLoaded", function() {
    const sermons = [
      {
        title: "What on Earth are we doing here",
        sermonBy: "Nelson, Others",
        category: "God, Pray",
        date: "Sep 22, 2019",
        reference: "Karlie Liebenberg",
        description: "The sermon 'What on Earth Are You Doing Here?' reflects on Jeremiah's struggles with God's calling, highlighting that we are created by God for His purpose, not by accident, and are destined for eternity.",
        img: "/assets/img/why_are_we_here.jpg",
        pdfLink: "/assets/file/sermon-example.pdf",
        readMoreLink: "./sermon-item.html"
      },
      {
        title: "We are here for God",
        sermonBy: "Karlie Liebenberg",
        category: "Purpose",
        date: "Aug 15, 2020",
        reference: "Karlie Liebenberg",
        description: "The story of the Israelites who were rescued from Egypt and moved through the Red Sea is a good example of people forgetting about God.",
        img: "/assets/img/for_God.png",
        pdfLink: "/assets/file/sermon-example.pdf",
        readMoreLink: "./sermon-item2.html"
      },
      {
        title: "We are here to obey God",
        sermonBy: "Karlie Liebenberg",
        category: "Purpose, God",
        date: "May 30, 2021",
        reference: "Karlie Liebenberg",
        description: "Jeremiah's book begins with a touching story of his inner struggle with his calling. His vocation requires him to proclaim destruction and judgment.",
        img: "/assets/img/obey2.png",
        pdfLink: "/assets/file/sermon-example.pdf",
        readMoreLink: "./sermon-item3.html"
      },
      {
        title: "The Power of Grace",
        sermonBy: "Minister Collins",
        category: "Grace, Forgiveness",
        date: "Jan 18, 2022",
        reference: "Karlie Liebenberg",
        description: "God's grace is sufficient for you. It's through grace that we are saved, and by grace, we are renewed. Embrace His grace and live in the freedom it brings",
        img: "/assets/img/Sunday_school.jpg",
        pdfLink: "/assets/file/sermon-example.pdf",
        readMoreLink: "./sermon-item4.html"
      },

      {
        title: "Unconditional Love",
        sermonBy: "Bishop Williams",
        category: "Love, Compassion",
        date: "Dec 24, 2022",
        reference: "Karlie Liebenberg",
        description: "God's love is unconditional. He loved us first, and His love endures forever. Let His love flow through you to others, bringing light and warmth to the world.",
        img: "/assets/img/CWW.jpg",
        pdfLink: "/assets/file/sermon-example.pdf",
        readMoreLink: "./sermon-item5.html"
      },
    ];

    const itemsPerPage = 2; // Number of items per page
    let currentPage = 1; // Start on the first page
    let filteredSermons = sermons; // Initialize with all sermons (unfiltered)

    // Dynamically generate the sermon items in the HTML
    function generateSermonItems(sermonsToShow) {
      const sermonContainer = document.getElementById("sermon-container");
      sermonContainer.innerHTML = ""; // Clear previous items
      sermonsToShow.forEach((sermon) => {
        const sermonItem = document.createElement("div");
        sermonItem.classList.add("sermon-item");
        sermonItem.innerHTML = `
          <div class="img">
            <img src="${sermon.img}" alt="${sermon.title}">
            <div class="content-btn">
              <button><i class="uil uil-play"></i></button>
              <button><i class="uil uil-music-note"></i></button>
              <a href="${sermon.pdfLink}" title="pdf" target="_blank">
                <button><i class="uil uil-book-open"></i></button>
              </a>
            </div>
          </div>
          <div class="sermon-info">
            <h1>${sermon.title}</h1>
            <div class="by">
              <p>Sermon by: <em>${sermon.sermonBy}</em></p>
              <p>Category: <em>${sermon.category}</em></p>
              <p><i class="uil uil-clock"></i> <em>${sermon.date}</em></p>
              <p>Ref <em>${sermon.reference || ''}</em></p>
            </div>
            <p>${sermon.description}</p>
            <button onclick="window.location.href='${sermon.readMoreLink}'">Read More</button>
          </div>
        `;
        sermonContainer.appendChild(sermonItem);
      });
    }

    // Function to display the correct items for the current page
    function showPage(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const sermonsToShow = filteredSermons.slice(start, end);
        generateSermonItems(sermonsToShow);
        
        // Update active page styling (if you have pagination controls)
        updatePagination();
    }

    // Search functionality
    const searchInput = document.querySelector(".top form input");
    searchInput.addEventListener("input", function() {
        const searchTerm = this.value.toLowerCase();
        if (searchTerm === "") {
            filteredSermons = sermons; // Show all sermons if input is cleared
        } else {
            filteredSermons = sermons.filter(sermon =>
                sermon.title.toLowerCase().includes(searchTerm) ||
                sermon.sermonBy.toLowerCase().includes(searchTerm) ||
                sermon.category.toLowerCase().includes(searchTerm)
            );
        }
        currentPage = 1; // Reset to the first page after filtering
        showPage(currentPage);
    });

    // Update the pagination UI (if needed)
    function updatePagination() {
        const totalPages = Math.ceil(filteredSermons.length / itemsPerPage);
        const pageNumbers = document.querySelectorAll('.pagination-number span');
        pageNumbers.forEach((span, index) => {
            span.classList.toggle('active-page', index + 1 === currentPage);
        });

        const nextButton = document.querySelector('.pagination-number button:nth-of-type(1)');
        const lastButton = document.querySelector('.pagination-number button:nth-of-type(2)');
        nextButton.disabled = currentPage === totalPages;
        lastButton.disabled = currentPage === totalPages;
    }

    // Handle "Next" button click
    const nextButton = document.querySelector('.pagination-number button:nth-of-type(1)');
    nextButton.addEventListener('click', function() {
        const totalPages = Math.ceil(filteredSermons.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });

    // Handle "Last" button click
    const lastButton = document.querySelector('.pagination-number button:nth-of-type(2)');
    lastButton.addEventListener('click', function() {
        const totalPages = Math.ceil(filteredSermons.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage = totalPages;
            showPage(currentPage);
        }
    });

    // Handle page number clicks (if you have numbered pagination controls)
    const pageNumbers = document.querySelectorAll('.pagination-number span');
    pageNumbers.forEach((span, index) => {
        span.addEventListener('click', function() {
            currentPage = index + 1;
            showPage(currentPage);
        });
    });

    // Initialize the first page display
    showPage(currentPage);
});
