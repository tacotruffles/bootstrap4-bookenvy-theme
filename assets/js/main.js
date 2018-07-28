$(document).ready(function() {
  // Trigger Menu Overlay and .navbar-toggler animation
  $("nav").click(function() {
    $("nav").toggleClass("change");
  });

  // Lightbox Options
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true
  });

  // Trigger Gallery animation scrolled in/out 350px
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

  // Writers Accordion Interactivity
  $(".writers-accordion").click(function(e) {
    // a button was clicked
    if (e.target.id.split("-")[0] == "button") {
      // Set book img src attribute to show appropriate author's books
      $("#book-1").attr("src", "/assets/img/writers/" + e.target.id.split("-")[1] + "-book1.jpg");
      $("#book-2").attr("src", "/assets/img/writers/" + e.target.id.split("-")[1] + "-book2.jpg");
    }
  });
});
