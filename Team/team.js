"use strict";
const sidebar = document.getElementById('sidebar');
const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('overlay');
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
