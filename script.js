function toggleDarkMode() {
  const html = document.documentElement;
  const isDark = html.classList.toggle('dark');
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');

  const btn = document.getElementById('darkModeToggle');
  btn.textContent = isDark ? '☀️ Mode Terang' : '🌙 Mode Gelap';
}

window.addEventListener('DOMContentLoaded', () => {
  const isDark = localStorage.getItem('darkMode') === 'enabled';
  const btn = document.getElementById('darkModeToggle');
  btn.textContent = isDark ? '☀️ Mode Terang' : '🌙 Mode Gelap';
});
