function showFields() {
    const selectedCategory = document.getElementById("prayer-category").value;
  
    const healthFields = document.getElementById("health-fields");
    const relationshipsFields = document.getElementById("relationships-fields");
    const careerFields = document.getElementById("career-fields");
  
    healthFields.style.display = "none";
    relationshipsFields.style.display = "none";
    careerFields.style.display = "none";
  
    if (selectedCategory === "health") {
      healthFields.style.display = "block";
    } else if (selectedCategory === "relationships") {
      relationshipsFields.style.display = "block";
    } else if (selectedCategory === "career") {
      careerFields.style.display = "block";
    }
  }