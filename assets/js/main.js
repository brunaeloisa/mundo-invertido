const invertButton = document.getElementById('switch-theme-button');

invertButton.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');
});
