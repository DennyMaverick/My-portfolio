const modalHireMe = document.getElementById('modal-hire-me');
const modalResume = document.getElementById('modal-resume');
const body = document.querySelector('body');

const closeBtnHireMe = modalHireMe.querySelector('.modal__close');

const closeBtnResume = modalResume.querySelector('.modal__close');


// Убирание скролла с большим приорететом для модального окна с контактами при клике вне модального окна и на кнопку закрыть, если модальное окно resume открыто

closeBtnHireMe.addEventListener('click', () => {
  if (modalResume.classList.contains('show')) {
    body.classList.add('no-scroll-important');
  }
});

modalHireMe.addEventListener('click', () => {
  if (modalResume.classList.contains('show')) {
    body.classList.add('no-scroll-important');
  }
});


// Убирание скролла с большим приорететом для модального окна с резюме при клике вне модального окна и на кнопку закрыть
closeBtnResume.addEventListener('click', () => {
  body.classList.remove('no-scroll-important');
});

modalResume.addEventListener('click', () => {
  body.classList.remove('no-scroll-important');
});