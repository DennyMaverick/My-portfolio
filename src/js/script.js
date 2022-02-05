
$(function () {
  /*  Filter
=========================== */

  let filter = $("[data-filter]");

  filter.on("click", function (event) {
    event.preventDefault(); //убирает стандартное поведение элементов(ссылок)

    let cat = $(this).data("filter"); //получаем значение элемента, по которому
    //производится клик мыши

    if (cat == "all") {
      $("[data-cat]").removeClass("hide");
    } else {
      $("[data-cat]").each(function () {
        let workCat = $(this).data("cat");

        if (workCat != cat) {
          $(this).addClass("hide");
        } else {
          $(this).removeClass("hide");
        }
      });
    }
  });

  // ============ Modal =============

  /*  Modal
=========================== */
  let modalCall = $("[data-modal]");
  let modalClose = $("[data-close]");

  modalCall.on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data("modal");

    $(modalId).addClass("show");

    $("body").addClass("no-scroll");
    //Задержка при анимации модального окна
    setTimeout(function () {
      $(modalId).find(".modal__dialog").css({
        transform: "rotateX(0)",
      });
    }, 200);

    // worksSlider.slick("setPosition");
  });

  modalClose.on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents(".modal");

    //анимация при закрытии модального окна
    modalParent.find(".modal__dialog").css({
      transform: "rotateX(90deg)",
    });

    //временная задержка
    setTimeout(function () {
      modalParent.removeClass("show");
      $("body").removeClass("no-scroll");
    }, 200);
  });
  // Закрытие окна при нажатии на маску
  $(".modal").on("click", function (event) {
    event.preventDefault();

    let $this = $(this);

    $this.find(".modal__dialog").css({
      transform: "rotateX(90deg)",
    });

    setTimeout(function () {
      $this.removeClass("show");
      $("body").removeClass("no-scroll");
    }, 200);
  });

  /*отмена события клика родителя элемента (.modal)
  при клике на блок .modal__dialog окно не будет 
  закрываться*/
  $(".modal__dialog").on("click", function (event) {
    event.stopPropagation();
  });
});