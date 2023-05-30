const images = ["darcy1.jpg", "darcy2.jpg", "darcy3.jpg", "darcy4.jpg"];
    let currentImageIndex = 0;

    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    const sliderImage = document.querySelector(".image-slider img");
    const galleryContainer = document.querySelector(".gallery-container");
    const showGalleryButton = document.querySelector(".show-gallery");

    prevButton.addEventListener("click", showPrevImage);
    nextButton.addEventListener("click", showNextImage);
    showGalleryButton.addEventListener("click", toggleGallery);

    function showPrevImage() {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      sliderImage.src = images[currentImageIndex];
    }

    function showNextImage() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      sliderImage.src = images[currentImageIndex];
    }

    function toggleGallery() {
      if (galleryContainer.style.display === "none") {
        galleryContainer.style.display = "block";
        document.querySelector(".image-slider").style.display = "none";
        showGalleryButton.textContent = "Mostrar slider";
      } else {
        galleryContainer.style.display = "none";
        document.querySelector(".image-slider").style.display = "flex";
        showGalleryButton.textContent = "Mostrar galería";
      }
    }
