const toggleButton = document.getElementById('theme-toggle');
const body = document.body; // solo cambiará el fondo del body

// Cargar tema guardado
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-bg');
  toggleButton.textContent = '☀️';
}

// Cambiar tema al hacer click
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-bg');

  if (body.classList.contains('dark-bg')) {
    toggleButton.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleButton.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});
