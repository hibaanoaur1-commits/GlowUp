// ==========================================
// TABS LOGIC FOR CYCLE SYNCING
// ==========================================
function openCycleTab(tabName, btnElement) {
  // 1. Hide all tab contents
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));
  
  // 2. Remove active class from all buttons
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  // 3. Show the selected tab content and highlight the clicked button
  document.getElementById(tabName).classList.add('active');
  btnElement.classList.add('active');
}