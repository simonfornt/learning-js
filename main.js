// Define the picGet function as you did before
const picGet = function blah() {
    const fileInput = document.getElementById('pic');
    const imagePreview = document.getElementById('imagePreview');

    fileInput.addEventListener('change', function() {
        const selectedFile = fileInput.files[0];

        if (selectedFile) {
            const reader = new FileReader();

            reader.addEventListener('load', function() {
                // Set the src attribute of the image element to the data URL
                imagePreview.src = reader.result;
            });

            // Read the selected file as a data URL
            reader.readAsDataURL(selectedFile);
        }
    });
};

// Call the picGet function to set up the file input handling
picGet();

document.getElementById("myBtn").addEventListener("click", function () {
    // Get the input values
    var nameValue = document.getElementById("nameInput").value;
    var detailsValue = document.getElementById("detailsInput").value;
    
    // Create a new div element
    var newDiv = document.createElement("div");

    // Create a new h1 element
    var newH1 = document.createElement("h1");
    newH1.textContent = nameValue;

    // Create a new p element
    var newP = document.createElement("p");
    newP.textContent = detailsValue;

    // Create a new img element
    var newImg = document.createElement('img');
    newImg.src = document.getElementById('imagePreview').src; // Use the source of the existing image

    // Append the new elements to the div container
    var divContainer = document.getElementById("divContainer");
    divContainer.appendChild(newDiv);
    newDiv.appendChild(newH1);
    newDiv.appendChild(newP);
    newDiv.appendChild(newImg);

    // Clear the input fields
    document.getElementById("nameInput").value = "";
    document.getElementById("detailsInput").value = "";
    // document.getElementById('pic').value = "";
    document.getElementById('imagePreview').src = ""; // Clear the input field value
});


