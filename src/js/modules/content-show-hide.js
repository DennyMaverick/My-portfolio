// Показать / скрыть информацию в модальном окне проекта портфолио
const descriptionShow = document.querySelectorAll(".description-show");
const descriptionHide = document.querySelectorAll(".description-hide");

function informationShow() {
  descriptionShow.forEach(function (item) {
    item.addEventListener("click", function () {
      descriptionHide.forEach(function (item) {
        item.classList.toggle("hide");
      });
      this.classList.add("hide");

      // if (this.nextElementSibling.classList.toggle("hide")) {
      //   this.textContent = "Подробнее";
      // } else {
      //   this.textContent = "Скрыть";
      // }
    });
  });
}

function informationHidden() {
  descriptionHide.forEach(function (item) {
    item.addEventListener("click", function () {
      this.classList.add("hide");
      this.previousElementSibling.classList.add("hide");
      descriptionShow.classList.remove('hide');
      // descriptionShow.forEach(function (item) {
      //   item.textContent = "Подробнее";
      // });
    });
  });
}

function hideEverything() {
  descriptionHide.forEach(function (item) {
    item.classList.add("hide");
    item.previousElementSibling.classList.add("hide");
    // descriptionShow.forEach(function (item) {
    //   item.textContent = "Подробнее";
    // });
  });
}

informationShow();
informationHidden();

// При нажатии на кнопку закрытия модального окна проекта, скрывать подробную информацию всех проектов
const closeButtons = document.querySelectorAll(".modal__close");
const modals = document.querySelectorAll(".modal");

closeButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    hideEverything();
  });
});
// При нажатии вне модального окна проекта, скрывать подробную информацию всех проектов
modals.forEach(function (item) {
  item.addEventListener("click", function () {
    hideEverything();
  });
});