function cardRouteHide() {
    if ($(window).width() <= 1100) {
      $(".card-route").fadeOut();
      $(".page-route").removeClass("pe-5");
    } else {
        $(".card-route").fadeIn();
        $(".page-route").addClass("pe-5");

    }
  }
  
  cardRouteHide();
  
  $(window).bind("resize", function () {
    cardRouteHide();
  });
  