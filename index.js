let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#darkModeButton');

const enableDarkMode = () => {
  document.documentElement.classList.add('darkmode');
  document.getElementById('darkOn').style.display = 'none';
  document.getElementById('lightModeLogo').style.display = 'none'
  document.getElementById('darkOff').style.display = 'inline-block';
  document.getElementById('darkModeLogo').style.display = 'block'

  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  document.documentElement.classList.remove('darkmode');
  document.getElementById('darkOn').style.display = 'inline-block';
  document.getElementById('lightModeLogo').style.display = 'block'
  document.getElementById('darkOff').style.display = 'none';
  document.getElementById('darkModeLogo').style.display = 'none'
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