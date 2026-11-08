// ==========================================
// 1. TABS LOGIC (Blush, Eyeshadow, Eyebrows)
// ==========================================
function openBasicTab(tabName, btnElement) {
  // Hide all tab contents
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));
  
  // Remove active class from all buttons
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Show selected tab
  document.getElementById(tabName).classList.add('active');
  btnElement.classList.add('active');
}

// ==========================================
// 1. TABS LOGIC (Blush, Eyeshadow, Eyebrows)
// ==========================================
function openBasicTab(tabName, btnElement) {
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));
  
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabName).classList.add('active');
  btnElement.classList.add('active');
}

// ==========================================
// 2. STEP MODAL LOGIC (Only Images)
// ==========================================
const stepImages = {
  1: "https://i.pinimg.com/736x/13/12/a2/1312a2941dc5ea8fa0f17ae1282ec246.jpg",
  2: "https://i.pinimg.com/736x/d0/4f/8c/d04f8c88f624dfa5cf71da44a56e9782.jpg",
  3: "https://i.pinimg.com/736x/7f/e3/2b/7fe32b10daea8e084568fb633c4fa425.jpg",
  4: "https://i.pinimg.com/736x/d7/5a/e0/d75ae0a2194ec558f94cdaf803192ad4.jpg",
  5: "https://i.pinimg.com/736x/f6/1a/80/f61a809e52a383bedc24e37be9b74568.jpg",
  6: "https://i.pinimg.com/736x/8d/37/e2/8d37e2234aaba5d733e5ef49e19fec3a.jpg"
};

function openStepModal(stepNumber) {
  const modal = document.getElementById('stepModal');
  const imgElement = document.getElementById('modalImg');

  if (stepImages[stepNumber]) {
    imgElement.src = stepImages[stepNumber];
    modal.classList.add('active');
  }
}

function closeStepModal() {
  const modal = document.getElementById('stepModal');
  modal.classList.remove('active');
}

// Close modal if user clicks outside the image
window.onclick = function(event) {
  const modal = document.getElementById('stepModal');
  if (event.target === modal) {
    closeStepModal();
  }
}