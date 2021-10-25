$(document).ready(function () {
  $("#isActiveMenu0").hide();
  $("#isActiveMenu1").hide();
  $("#isActiveMenu2").hide();
  $("#isActiveMenu3").hide();

  $("#isActiveMenu00").hide();
  $("#isActiveMenu01").hide();
  $("#isActiveMenu02").hide();
  $("#isActiveMenu03").hide();

  $(".owl-two").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: true,
    dots: false,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1300: {
        items: 4,
      },
      1500: {
        items: 5,
      },
      1700: {
        items: 6,
      },
    },
  });

  $(".owl-one").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: true,
    dots: true,
    navText: ["<div class='nav-btn button-geri'></div>", "<div class='nav-btn button-ileri'></div>"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
      1300: {
        items: 3,
      },
      1500: {
        items: 3,
      },
      1700: {
        items: 4,
      },
    },
  });
});

function navbarMenuClick(event) {
  event.id == "navbarDropdown" ? $("#isActiveMenu0").show() : $("#isActiveMenu0").hide();
  event.id == "navbarDropdown1" ? $("#isActiveMenu1").show() : $("#isActiveMenu1").hide();
  event.id == "navbarDropdown2" ? $("#isActiveMenu2").show() : $("#isActiveMenu2").hide();
  event.id == "navbarDropdown3" ? $("#isActiveMenu3").show() : $("#isActiveMenu3").hide();
  if (event.id == "navbarDropdown") {
    $("#isActiveMenu00").show();
    $("#isActiveMenu01").hide();
    $("#isActiveMenu02").hide();
    $("#isActiveMenu03").hide();
  }
  if (event.id == "navbarDropdown1") {
    $("#isActiveMenu00").hide();
    $("#isActiveMenu01").show();
    $("#isActiveMenu02").hide();
    $("#isActiveMenu03").hide();
  }
  if (event.id == "navbarDropdown2") {
    $("#isActiveMenu00").hide();
    $("#isActiveMenu01").hide();
    $("#isActiveMenu02").show();
    $("#isActiveMenu03").hide();
  }
  if (event.id == "navbarDropdown3") {
    $("#isActiveMenu00").hide();
    $("#isActiveMenu01").hide();
    $("#isActiveMenu02").hide();
    $("#isActiveMenu03").show();
  }
}

function openNav() {
  $("#mySidenav").removeClass("sidenav").addClass("openSideNav");
  $("#mySidenav").removeClass("closeSideNav").addClass("openSideNav");
}

function closeNav() {
  $("#mySidenav").removeClass("openSideNav").addClass("closeSideNav");
}

function newsClick(element, color) {
  $(".news-information > .tech-header").text(element);
  $(".news-information > .tech-header").css("color", String(color));
}

function checkScreen() {
  if ($(window).width() <= 1000) {
    $(".yorumlar-people-special-left").hide();
    $(".yorumlar-people-special-right").hide();
  } else {
    $(".yorumlar-people-special-left").show();
    $(".yorumlar-people-special-right").show();
  }

  if ($(window).width() < 992) {
    $("#footer-iletisim-div").addClass("mt-5");
    $("#footer-whoweare").addClass("mt-5");
    $("#footer-speed-menu").addClass("mt-5");
  } else {
    $("#footer-iletisim-div").removeClass("mt-5");
    $("#footer-whoweare").removeClass("mt-5");
    $("#footer-speed-menu").removeClass("mt-5");
  }
}

checkScreen();

$(window).bind("resize", function () {
  checkScreen();
});


function RoutePage(route) {
  window.location.href = '././'+route;
}
