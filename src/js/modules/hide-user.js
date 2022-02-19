const user = document.querySelector('.user');

if (document.documentElement.clientWidth < 768) {
  user.classList.add('hide');
} else {
  user.classList.remove('hide');
}

window.addEventListener('resize', () => {
  if (document.documentElement.clientWidth < 768) {
    user.classList.add('hide');
  } else {
    user.classList.remove('hide');
  }
})