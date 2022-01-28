
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
});