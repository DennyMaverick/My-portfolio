// Показать / скрыть информацию в модальном окне проекта портфолио
const descriptionShow = document.querySelectorAll(".description-show");
const descriptionHide = document.querySelectorAll(".description-hide");

function informationShow() {
  descriptionShow.forEach(function (item) {
    item.addEventListener("click", function () {
      descriptionHide.forEach(function (item) {
        item.classList.remove("hide");
        item.textContent = "Скрыть";
      });
      this.classList.add("hide");
      this.nextElementSibling.classList.remove("hide");
    });
  });
}

function informationHidden() {
  descriptionHide.forEach(function (item) {
    item.addEventListener("click", function () {
      if (this.previousElementSibling.classList.toggle("hide")) {
        descriptionHide.forEach(function (item) {
          item.textContent = "Подробнее";
        });
      } else {
        descriptionHide.forEach(function (item) {
          item.textContent = "Скрыть";
        });
      }
    });
  });
}

function hideEverything() {
  descriptionHide.forEach(function (item) {
    item.previousElementSibling.classList.add("hide");
    descriptionHide.forEach(function (item) {
      item.classList.add('hide');
    });
  });
}

informationShow();
informationHidden();

// При нажатии на кнопку закрытия модального окна проекта, скрывать подробную информацию всех проектов
const closeButtons = document.querySelectorAll(".modal__close");
const modals = document.querySelectorAll(".modal");

closeButtons.forEach(function (item) {
  item.addEventListener("click", function (event) {
    const closestModal = event.target.closest('.modal');
    const descriptionShowClosest = closestModal.querySelector('.description-show');
    descriptionShowClosest.classList.remove('hide');
    hideEverything();
  });
});
// При нажатии вне модального окна проекта, скрывать подробную информацию всех проектов
modals.forEach(function (item) {
  item.addEventListener("click", function (event) {
    const closestModal = event.target.closest('.modal');
    const descriptionShowClosest = closestModal.querySelector('.description-show');
    descriptionShowClosest.classList.remove('hide');
    hideEverything();
  });
});