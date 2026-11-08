// ==========================================
// 1. TABS LOGIC & NIGHT MODE
// ==========================================
function openSkincareTab(tabName, btnElement) {
  // Hide all tab contents
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));
  
  // Remove active class from all buttons
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Show the selected tab content and highlight the clicked button
  document.getElementById(tabName).classList.add('active');
  btnElement.classList.add('active');

  // NIGHT MODE LOGIC
  const body = document.body;
  const stepCards = document.querySelectorAll('.routine-step');
  const btnNight = document.getElementById('btnNight');
  const btnMorning = document.getElementById('btnMorning');

  if (tabName === 'night') {
    // Turn on Night Mode
    body.classList.add('night-mode');
    
    // Make the routine cards dark
    stepCards.forEach(card => {
      card.style.background = '#2d2431';
      card.style.borderColor = '#b94e78'; // Keep the pink edge
    });

    // Style the active night button (glowing purple/pink)
    btnNight.style.background = 'var(--pink)';
    btnNight.style.color = 'white';
    btnNight.style.borderColor = 'var(--pink)';
    btnNight.style.boxShadow = '0 0 15px rgba(217, 111, 150, 0.6)';

  } else {
    // Turn off Night Mode
    body.classList.remove('night-mode');
    
    // Reset the routine cards to light mode
    stepCards.forEach(card => {
      card.style.background = '#fafafa';
    });

    // Reset the buttons
    btnNight.style.background = 'white';
    btnNight.style.color = 'var(--muted)';
    btnNight.style.borderColor = '#e8e3f5';
    btnNight.style.boxShadow = 'none';
  }
}

// ==========================================
// 2. MODAL LOGIC FOR GLASS SKIN IMAGES
// ==========================================
function openImageModal(imageSrc) {
  const modal = document.getElementById('imageModal');
  const fullImage = document.getElementById('fullImage');
  
  fullImage.src = imageSrc;
  modal.classList.add('active');
}

function closeImageModal() {
  const modal = document.getElementById('imageModal');
  modal.classList.remove('active');
}