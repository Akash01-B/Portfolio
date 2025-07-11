document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById('darkModeToggle');
    const body = document.getElementById('mainBody');
    const icon = document.getElementById('themeIcon');
  
    toggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
  
      if (body.classList.contains('dark-mode')) {
        icon.classList.replace('bx-moon', 'bx-sun');
      } else {
        icon.classList.replace('bx-sun', 'bx-moon');
      }
    });
  });