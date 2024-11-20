function changeImage(imagePath) {
  const shirtImage = document.getElementById('shirtImage');

  // Add fade-out effect
  shirtImage.classList.add('hide');

  setTimeout(() => {
      shirtImage.src = imagePath; // Change the image source
      shirtImage.classList.remove('hide');
      shirtImage.classList.add('show'); // Add fade-in effect
  }, 300);
}
