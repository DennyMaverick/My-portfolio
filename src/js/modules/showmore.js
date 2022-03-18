// window.onload = function () {
//   const portfolioShowContainer = document.getElementsByClassName('portfolio__show');
//   const showMoreBtn = document.getElementById('show-more');
//   for (let i = 6; i < portfolioShowContainer.length; i++) {
//     portfolioShowContainer[i].classList.add('hide');
//   }

//   var countD = 6;
//   showMoreBtn.addEventListener("click", function () {
//     countD += 3;
//     if (countD <= portfolioShowContainer.length) {
//       for (let i = 0; i < countD; i++) {
//         portfolioShowContainer[i].classList.remove('hide');
//       }
//     }


//   })
// }


// вариант на jQuery, но некорректен при использовании фильтра
// $(function () {
  // $(".portfolio__show").slice(0, 6).show();
  // $('#show-more').on('click', function (event) {
  //   event.preventDefault();
  //   const elementId = $('.portfolio__show:hidden');
  //   const elementIdShow = $('.portfolio__show');

  //   if (elementId.length > 1) {
  //     $('.portfolio__show:hidden').slice(0, 6).slideDown();
  //   } else {
  //     $('.portfolio__show:hidden').slice(0, 6).slideDown();
  //     $('#show-more').fadeOut();
  //   }
  //   if (elementIdShow.length < 6) {
  //     $('#show-more').fadeOut();
  //   }
  // });
// });