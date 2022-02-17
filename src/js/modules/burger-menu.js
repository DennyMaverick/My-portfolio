const burger = document.querySelector('.burger-btn');
const mobileNav = document.querySelector('.mobile-modal');
const mobileLinks = document.querySelectorAll('.mobile-nav__link');

burger && burger.addEventListener('click', function () {
  mobileNav.classList.toggle('header__mobile-modal-active');
});

mobileLinks.forEach(function (item) {
  item.onclick = function () {
    mobileNav.classList.remove('header__mobile-modal-active');
  }
});

window.addEventListener('resize', () => {
  if (document.documentElement.clientWidth > 992) {
    mobileNav.classList.remove('header__mobile-modal-active');
  }
});