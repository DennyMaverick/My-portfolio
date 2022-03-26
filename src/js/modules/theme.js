const switchers = document.querySelectorAll('.switcher');
const darkBtn = document.querySelector('[data-theme="dark"]');
const lightBtn = document.querySelector('[data-theme="light"]');


switchers.forEach((switcher) => {
  const header = document.querySelector('header');
  switcher.addEventListener('click', function () {
    // изменение цвета иконок-переключателей темы при клике на них
    if (this.dataset.theme === "light") {
      darkBtn.style.fill = '#fff';
      lightBtn.style.fill = '#2b2a2c';
    } else {
      lightBtn.style.fill = '#fff';
      darkBtn.style.fill = '#2b2a2c';
    }
    // вызов функции applyTheme + установка значения темы в local storage
    applyTheme(this.dataset.theme);
    localStorage.setItem('theme', this.dataset.theme);
    // изменение тени header при клике на переключатель темы
    const scrollSize = window.pageYOffset; //Высота скролла
    const pixels = 10;
    if (scrollSize > pixels) {
      const activeTheme = localStorage.getItem('theme');
      const header = document.querySelector('header');
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
});

function applyTheme(themeName) {
  // Темное / светлое фото главного экрана
  const images = document.querySelectorAll('.intro__photo');
  const imgLight = document.querySelector('.photo-light');
  const imgDark = document.querySelector('.photo-dark');
  if (themeName === 'light') {
    images.forEach((img) => {
      img.classList.add('hide');
    });
    imgLight.classList.remove('hide');
  } else {
    images.forEach((img) => {
      img.classList.add('hide');
    });
    imgDark.classList.remove('hide');
  }

  // определение url для link
  let urlTheme = `./css/theme/${themeName}.min.css`;
  // замена url в элементе link
  document.querySelector('[title = "theme"]').setAttribute('href', urlTheme);
};


const activeTheme = localStorage.getItem('theme');


if (activeTheme === null) {
  applyTheme('light');
} else {
  applyTheme(activeTheme);
}

if (activeTheme === 'light') {
  darkBtn.style.fill = '#fff';
  lightBtn.style.fill = '#2b2a2c';
} else if (activeTheme === 'dark') {
  lightBtn.style.fill = '#fff';
  darkBtn.style.fill = '#2b2a2c';
} else {
  darkBtn.style.fill = '#fff';
  lightBtn.style.fill = '#2b2a2c';
}