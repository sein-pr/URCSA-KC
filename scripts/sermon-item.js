const toggles = document.querySelectorAll(".toggle");
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const dropdown = toggle.nextElementSibling;
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  });
});

document.getElementById("more").addEventListener("click", function () {
  document.getElementById("full-text").style.display = "block";
  this.style.display = "none";
});
