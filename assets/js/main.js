$(document).ready(function() {
  //Lightbox Options
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true
  });

  $(window).scroll(function() {
    let position = $(this).scrollTop();

    if (position >= 350) {
      $(".first-row").addClass("change");
      $(".second-row").addClass("change");
    } else {
      $(".first-row").removeClass("change");
      $(".second-row").removeClass("change");
    }
  });
});
