let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  document.documentElement.classList.add('darkmode');
  document.getElementById('toggleDarkOn').style.display = 'none';
  document.getElementById('toggleDarkOff').style.display = 'inline-block';
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  document.documentElement.classList.remove('darkmode');
  document.getElementById('toggleDarkOn').style.display = 'inline-block';
  document.getElementById('toggleDarkOff').style.display = 'none';
  localStorage.setItem('darkMode', null);
};

// Initialize on page load
if (darkMode === 'enabled') {
  enableDarkMode();
} else {
  disableDarkMode(); // Force initial state
}

// Toggle on button click
darkModeToggle.addEventListener('click', () => {
  const currentMode = localStorage.getItem('darkMode');
  if (currentMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});