const sidebar = document.getElementById('sidebar');
const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('overlay');
const messagesToggle = document.getElementById('messagesToggle');

// Toggle sidebar
hamburger.addEventListener('click', () => {
  const isOpen = sidebar.classList.toggle('open');
  hamburger.classList.toggle('active', isOpen);
  overlay.classList.toggle('show', isOpen);
});

// Click outside (overlay) to close
overlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  hamburger.classList.remove('active');
  overlay.classList.remove('show');
});

// Toggle submenu
if (messagesToggle) {
  messagesToggle.addEventListener('click', () => {
    messagesToggle.parentElement.classList.toggle('active');
  });
}
