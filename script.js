// Get the button and the description section
const toggleButton = document.getElementById("description-toggle");
const descriptionSection = document.getElementById("description-section");

// Add a click event listener to the button
toggleButton.addEventListener("click", function() {
    // Toggle the visibility of the description section
    if (descriptionSection.style.display === "block") {
        descriptionSection.style.display = "none";
    } else {
        descriptionSection.style.display = "block";
    }
});
