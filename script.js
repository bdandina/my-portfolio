// Cek status dark mode saat halaman dimuat
window.onload = function () {
  const darkMode = localStorage.getItem('darkMode');
  if (darkMode === 'enabled') {
    document.body.classList.add('dark');
  }
};

// Fungsi untuk mengaktifkan/mematikan dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
}
