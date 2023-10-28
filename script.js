// Get references to the button and the resume image
const viewResumeButton = document.getElementById("viewResumeButton");
const resumeImage = document.getElementById("resumeImage");

// Add a click event listener to the button
viewResumeButton.addEventListener("click", function () {
    // Toggle the display of the resume image
    if (resumeImage.style.display === "none") {
        resumeImage.style.display = "block";
    } else {
        resumeImage.style.display = "none";
    }
});
