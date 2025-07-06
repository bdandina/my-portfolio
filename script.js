function toggleDarkMode() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');

  const btn = document.querySelector('button');
  btn.textContent = isDark ? '☀️ Mode Terang' : '🌙 Mode Gelap';
}

// Set teks tombol saat halaman dibuka
window.addEventListener('DOMContentLoaded', () => {
  const isDark = localStorage.getItem('darkMode') === 'enabled';
  const btn = document.querySelector('button');
  btn.textContent = isDark ? '☀️ Mode Terang' : '🌙 Mode Gelap';
});
