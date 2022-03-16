const socialLink = document.getElementById('aboutLinkSocial');
const footerSocials = document.querySelectorAll('.footer__social-image');

socialLink.addEventListener('click', () => {
  footerSocials.forEach((item) => {
    // item.style.fill = '#363699';
    item.classList.add('footer__social-color-changed');
    setTimeout(function () {
      footerSocials.forEach((item) => {
        // item.style.fill = '#BBBBCC';
        item.classList.remove('footer__social-color-changed');
      });
    }, 1500);
  })
});

