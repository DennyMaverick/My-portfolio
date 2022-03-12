const socialLink = document.getElementById('aboutLinkSocial');
const footerSocial = document.querySelector('.footer__social');

socialLink.addEventListener('click', () => {
  footerSocial.style.borderColor = "#629d89";
  setTimeout(function () {
    footerSocial.style.borderColor = "transparent";
  }, 5000);
});

