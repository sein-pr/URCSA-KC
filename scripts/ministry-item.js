let isTableVisible = false;

function toggleTable() {
  const tableDiv = document.getElementById("member-list");
  const button = document.getElementById("toggleMember");

  if (isTableVisible) {
    tableDiv.classList.remove("active");
    setTimeout(() => {
      tableDiv.style.display = "none";
    }, 500);
    button.textContent = "Members";
  } else {
    tableDiv.style.display = "block";
    setTimeout(() => {
      tableDiv.classList.add("active");
    }, 10);
    button.textContent = "Hide Members";
  }

  isTableVisible = !isTableVisible;
}
