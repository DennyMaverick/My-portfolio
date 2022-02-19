const header = document.querySelector('.header');


window.addEventListener('scroll', () => {
  const scrollSize = window.pageYOffset; //Высота скролла
  const pixels = 10;
  if (scrollSize > pixels) {
    header.style.boxShadow = "2px 2px 10px #020202";
    header.style.backgroundColor = "white";
  } else {
    header.style.boxShadow = "none";
    header.style.backgroundColor = "transparent";
  }
});