document.addEventListener("DOMContentLoaded", function() {
    const ministries = [
        {
            title: "Sunday School",
            description: "Inspiring our children and Youth to be true followers of Jesus Christ",
            img: "/assets/img/Sunday_school.jpg",
            altText: "sunday school",
            readMoreLink: "#"
        },
        {
            title: "Christian Youth Ministries",
            description: "To act as an ambassador for the URCSA Katutura in spreading the word of God in singing and preaching",
            img: "/assets/img/CYM.jpg",
            altText: "Christian Youth Ministries",
            readMoreLink: "#"
        },
        {
            title: "Christian Women Ministries",
            description: "Women in service of Christ and His Church",
            img: "/assets/img/CWW.jpg",
            altText: "Christian Women Ministries",
            readMoreLink: "cwm.html"
        },
        {
            title: "Christian Men Ministries",
            description: "Men in service of Christ and His Church",
            img: "/assets/img/Christian_men.jpg",
            altText: "Christian Men Ministries",
            readMoreLink: "#"
        }
    ];

    let filteredMinistries = ministries; // This will hold the ministries to display

    // Function to generate ministry items dynamically
    function generateMinistryItems(ministryList) {
        const ministryContainer = document.getElementById("ministry-container");
        ministryContainer.innerHTML = ""; // Clear previous content

        ministryList.forEach(ministry => {
            const ministryItem = document.createElement("div");
            ministryItem.classList.add("ministry-item");

            ministryItem.innerHTML = `
                <div class="image">
                    <img src="${ministry.img}" alt="${ministry.altText}">
                </div>
                <div class="ministry-info">
                    <h2>${ministry.title}</h2>
                    <p>${ministry.description}</p>
                </div>
                <button onclick="location.href='${ministry.readMoreLink}'">Read More</button>
            `;

            ministryContainer.appendChild(ministryItem);
        });
    }

    // Search functionality
    const searchInput = document.querySelector(".top form input"); // Update to your search bar selector
    searchInput.addEventListener("input", function() {
        const searchTerm = this.value.toLowerCase();

        if (searchTerm === "") {
            filteredMinistries = ministries; // Reset to show all if input is cleared
        } else {
            filteredMinistries = ministries.filter(ministry =>
                ministry.title.toLowerCase().includes(searchTerm) ||
                ministry.description.toLowerCase().includes(searchTerm)
            );
        }

        // Generate filtered ministry items
        generateMinistryItems(filteredMinistries);
    });

    // Initially display all ministries
    generateMinistryItems(ministries);
});
