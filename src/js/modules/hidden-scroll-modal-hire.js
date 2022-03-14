const modalHireMe = document.getElementById('modal-hire-me');
const modalResume = document.getElementById('modal-resume');
const body = document.querySelector('body');

const closeButtonHireMe = modalHireMe.querySelector('.modal__close');
const closeButtonResume = modalResume.querySelector('.modal__close');

const sertificates = document.querySelectorAll('.sertificate');

const modalSertificates = document.querySelectorAll('.sertificate-modal');

// Убирание скролла с большим приорететом для модального окна с контактами при клике вне модального окна и на кнопку закрыть, если модальное окно resume открыто


closeButtonHireMe.addEventListener('click', () => {
  if (modalResume.classList.contains('show')) {
    body.classList.add('no-scroll-important');
  }
});

modalHireMe.addEventListener('click', () => {
  if (modalResume.classList.contains('show')) {
    body.classList.add('no-scroll-important');
  }
});

sertificates.forEach((item) => {
  item.addEventListener('click', () => {
    if (modalResume.classList.contains('show')) {
      body.classList.add('no-scroll-important');
    }
  });
});

// sertificate.addEventListener('click', () => {
//   if (modalResume.classList.contains('show')) {
//     body.classList.add('no-scroll-important');
//   }
// });


// Убирание скролла с большим приорететом для модального окна с резюме при клике вне модального окна и на кнопку закрыть
closeButtonResume.addEventListener('click', () => {
  body.classList.remove('no-scroll-important');
});

// closeButtonHireMe.addEventListener('click', () => {
//   body.classList.remove('no-scroll-important');
// });

modalResume.addEventListener('click', () => {
  body.classList.remove('no-scroll-important');
});

modalSertificates.forEach((item) => {
  item.addEventListener('click', () => {
    body.classList.add('no-scroll-important');
  });
});