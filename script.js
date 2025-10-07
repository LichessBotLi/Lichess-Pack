const sidebar = document.getElementById('sidebar');
const hamburger = document.getElementById('hamburger');
const closeBtn = document.getElementById('closeBtn');
const messagesToggle = document.getElementById('messagesToggle');
const mainContent = document.getElementById('mainContent');

hamburger.addEventListener('click', () => {
  sidebar.style.width = '250px';
  mainContent.style.marginLeft = '250px';
});

closeBtn.addEventListener('click', () => {
  sidebar.style.width = '0';
  mainContent.style.marginLeft = '0';
});

messagesToggle.addEventListener('click', () => {
  messagesToggle.parentElement.classList.toggle('active');
});
