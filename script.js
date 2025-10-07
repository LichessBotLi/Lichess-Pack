document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('closeBtn');
  const messagesToggle = document.getElementById('messagesToggle');
  const mainContent = document.getElementById('mainContent');

  // --- Toggle sidebar ---
  hamburger.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    overlay.classList.toggle('show', isOpen);
    
    // Optional margin effect (if you want content to shift when sidebar opens)
    mainContent.style.marginLeft = isOpen ? '250px' : '0';

    // Hide submenu when closing
    if (!isOpen) {
      const activeSubmenu = document.querySelector('.has-submenu.active');
      if (activeSubmenu) activeSubmenu.classList.remove('active');
    }
  });

  // --- Close sidebar via overlay click ---
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    hamburger.classList.remove('active');
    overlay.classList.remove('show');
    mainContent.style.marginLeft = '0';
  });

  // --- Close sidebar via close button (if exists) ---
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      sidebar.classList.remove('open');
      hamburger.classList.remove('active');
      overlay.classList.remove('show');
      mainContent.style.marginLeft = '0';
    });
  }

  // --- Toggle Messages submenu ---
  if (messagesToggle) {
    messagesToggle.addEventListener('click', () => {
      messagesToggle.parentElement.classList.toggle('active');
    });
  }
});
