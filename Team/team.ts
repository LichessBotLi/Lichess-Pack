document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('overlay');
  const messagesToggle = document.getElementById('messagesToggle');
  const mainContent = document.getElementById('mainContent');

  // --- Toggle sidebar ---
   hamburger.addEventListener('click', (e) => {  
    e.stopPropagation();  
    const isOpen = sidebar.classList.toggle('open');  
    hamburger.classList.toggle('active', isOpen);  
    overlay.classList.toggle('show', isOpen);
    // Hide submenu when closing
    if (!isOpen) {
      const activeSubmenu = document.querySelector('.has-submenu.active');
      if (activeSubmenu) activeSubmenu.classList.remove('active');
    }
  });

  // --- Prevent clicks inside sidebar from closing ---
  sidebar.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // --- Close sidebar via overlay click ---
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    hamburger.classList.remove('active');
    overlay.classList.remove('show');
  });

  // --- Toggle Messages submenu ---
  if (messagesToggle) {
    messagesToggle.addEventListener('click', () => {
      messagesToggle.parentElement.classList.toggle('active');
    });
  }
});
