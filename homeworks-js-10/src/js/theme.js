const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const checkbox = document.querySelector('.theme-switch__toggle');

checkbox.addEventListener('click', changeTheme);

function changeTheme() {
  if (document.body.classList.contains(Theme.LIGHT)) {
    document.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    document.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const currentTheme = localStorage.getItem('theme');
if (currentTheme === Theme.DARK) {
  document.body.classList.add(Theme.DARK);
  checkbox.checked = true;
} else document.body.classList.add(Theme.LIGHT);