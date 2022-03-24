const header = document.querySelector('.header');


window.addEventListener('scroll', () => {
  const scrollSize = window.pageYOffset; //Высота скролла
  const pixels = 10;
  if (scrollSize > pixels) {
    const activeTheme = localStorage.getItem('theme');
    switch (activeTheme) {
      case 'light':
        header.classList.add('box-shadow-light');
        header.classList.remove('box-shadow-dark');
        break;
      case 'dark':
        header.classList.add('box-shadow-dark');
        header.classList.remove('box-shadow-light');
        break;

      default:
        header.classList.remove('box-shadow-dark');
        header.classList.add('box-shadow-light');
        break;
    }
  } else {
    header.classList.remove('box-shadow-dark');
    header.classList.remove('box-shadow-light');
  }
});

const activeTheme = localStorage.getItem('theme');
const scrollSize = window.pageYOffset; //Высота скролла
const pixels = 10;
if (scrollSize > pixels) {
  switch (activeTheme) {
    case 'light':
      header.classList.add('box-shadow-light');
      header.classList.remove('box-shadow-dark');
      break;
    case 'dark':
      header.classList.add('box-shadow-dark');
      header.classList.remove('box-shadow-light');
      break;

    default:
      header.classList.remove('box-shadow-dark');
      header.classList.add('box-shadow-light');
      break;
  }
} else {
  header.classList.remove('box-shadow-dark');
  header.classList.remove('box-shadow-light');
}

