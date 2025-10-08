const sidebar = document.getElementById('sidebar') as HTMLElement;
const hamburger = document.getElementById('hamburger') as HTMLElement;
const overlay = document.getElementById('overlay') as HTMLElement;

// Toggle sidebar
hamburger.addEventListener('click', () => {
  const isOpen = sidebar.classList.toggle('open');
  hamburger.classList.toggle('active');
  overlay.style.display = isOpen ? 'block' : 'none';
});

// Close sidebar when clicking outside
overlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  hamburger.classList.remove('active');
  overlay.style.display = 'none';
});
