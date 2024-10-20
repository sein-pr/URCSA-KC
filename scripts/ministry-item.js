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

function downloadTableAsPDF() {
  // Load jsPDF
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Add title to the PDF
  doc.text("Members List", 14, 10);

  // Get the table headers and data
  const table = document.querySelector("table");
  const headers = [];
  const data = [];

  // Get the headers from the table
  const headerCells = table.querySelectorAll("thead th");
  headerCells.forEach((headerCell) => {
    headers.push(headerCell.innerText);
  });

  // Get the data from the table rows
  const rows = table.querySelectorAll("tbody tr");
  rows.forEach((row) => {
    const rowData = [];
    row.querySelectorAll("td").forEach((cell) => {
      rowData.push(cell.innerText);
    });
    data.push(rowData);
  });

  // Use autoTable plugin to generate the table
  doc.autoTable({
    head: [headers], // Table headers
    body: data, // Table data
    startY: 20, // Y position from where the table starts
    theme: "grid", // Optional theme
  });

  // Save the PDF
  doc.save("members_list.pdf");
}
