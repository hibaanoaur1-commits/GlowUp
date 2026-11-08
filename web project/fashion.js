// ==========================================
// MODAL LOGIC FOR CLOTHING IMAGES
// ==========================================
function openImageModal(imageSrc) {
  const modal = document.getElementById('imageModal');
  const fullImage = document.getElementById('fullImage');
  
  // Set the image source to the one that was clicked
  fullImage.src = imageSrc;
  
  // Show the modal
  modal.classList.add('active');
}

function closeImageModal() {
  const modal = document.getElementById('imageModal');
  
  // Hide the modal
  modal.classList.remove('active');
}