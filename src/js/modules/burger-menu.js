const burger = document.querySelector('.burger-btn');
const mobileNav = document.querySelector('.mobile-modal');
const mobileLinks = document.querySelectorAll('.mobile-nav__link');
const body = document.querySelector('body');

burger && burger.addEventListener('click', function () {
  mobileNav.classList.toggle('header__mobile-modal-active');
  body.classList.toggle('no-scroll');
});

mobileLinks.forEach(function (item) {
  item.onclick = function () {
    mobileNav.classList.remove('header__mobile-modal-active');
    body.classList.remove('no-scroll');
  }
});

window.addEventListener('resize', () => {
  if (document.documentElement.clientWidth > 992) {
    mobileNav.classList.remove('header__mobile-modal-active');
  }
});