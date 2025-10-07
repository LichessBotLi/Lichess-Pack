const sidebar = document.getElementById('sidebar');
const hamburger = document.getElementById('hamburger');
const closeBtn = document.getElementById('closeBtn');
const messagesToggle = document.getElementById('messagesToggle');
const mainContent = document.getElementById('mainContent');

// Toggle sidebar open/close
hamburger.addEventListener('click', () => {
  const isOpen = sidebar.style.width === '250px';
  sidebar.style.width = isOpen ? '0' : '250px';
  mainContent.style.marginLeft = isOpen ? '0' : '250px';
  hamburger.classList.toggle('active');

  // Hide submenu if closing sidebar
  if (isOpen) {
    document.querySelector('.has-submenu').classList.remove('active');
  }
});

// Close sidebar with close button
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    sidebar.style.width = '0';
    mainContent.style.marginLeft = '0';
    hamburger.classList.remove('active');
  });
}

// Toggle Messages submenu
if (messagesToggle) {
  messagesToggle.addEventListener('click', () => {
    messagesToggle.parentElement.classList.toggle('active');
  });
}
