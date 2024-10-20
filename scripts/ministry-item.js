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

function downloadTable() {
  // Get the table
  const table = document.querySelector('table');
  let tableText = '';

  // Loop through the table rows
  for (let row of table.rows) {
      // Get each cell in the row
      let rowText = '';
      for (let cell of row.cells) {
          rowText += cell.innerText + '\t'; // Tab separate each cell value
      }
      tableText += rowText.trim() + '\n'; // New line for each row
  }

  // Create a blob for the txt file
  const blob = new Blob([tableText], { type: 'text/plain' });
  const downloadLink = document.createElement('a');
  
  // Set the file name and download link
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = 'members_list.txt';

  // Programmatically click the download link
  downloadLink.click();
}