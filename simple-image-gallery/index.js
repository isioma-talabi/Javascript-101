const imagePathsArray = [
  "./assets/image1.png",
  "./assets/image2.png",
  "./assets/image3.png",
  "./assets/image4.png",
  "./assets/image5.png",
  "./assets/image6.png",
  "./assets/image7.png",
  "./assets/image8.png",
  "./assets/image9.png",
  "./assets/image10.png",
];

const imagesContainer = document.getElementById("image-container");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");

let currentImageIndex = 0;

function displayImage() {
  imagesContainer.innerHTML = "";
  const img = document.createElement("img");
  img.src = imagePathsArray[currentImageIndex];
  imagesContainer.appendChild(img);

  currentImageIndex += 1;
  if (currentImageIndex >= imagePathsArray.length) {
    currentImageIndex = 0;
  }
}

nextButton.addEventListener("click", function (e) {
  displayImage();
});

// Display Previous Image

function displayPreviousImage() {
  currentImageIndex -= 1;
  if (currentImageIndex < 0) {
    currentImageIndex = imagePathsArray.length - 1;
  }

  imagesContainer.innerHTML = "";
  const img = document.createElement("img");
  img.src = imagePathsArray[currentImageIndex];
  imagesContainer.appendChild(img);
}

previousButton.addEventListener("click", function (e) {
  displayPreviousImage();
});

displayImage();
