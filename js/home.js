$(document).ready(function () {
  $("#isActiveMenu0").hide();
  $("#isActiveMenu1").hide();
  $("#isActiveMenu2").hide();
  $("#isActiveMenu3").hide();

  $("#isActiveMenu00").hide();
  $("#isActiveMenu01").hide();
  $("#isActiveMenu02").hide();
  $("#isActiveMenu03").hide();

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: true,
    dots: false,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
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
      }
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
