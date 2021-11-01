$(document).ready(function () {
  $("#isActiveMenu0").hide();
  $("#isActiveMenu1").hide();
  $("#isActiveMenu2").hide();
  $("#isActiveMenu3").hide();

  $("#isActiveMenu00").hide();
  $("#isActiveMenu01").hide();
  $("#isActiveMenu02").hide();
  $("#isActiveMenu03").hide();
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

function DownloadButton(url) {
  let lang = localStorage.getItem("language");
  if (lang == "tr") {
    if (url == "abfgo") {
      const aElement = document.createElement("a");
      aElement.style.display = "none";
      aElement.href = "../assets/pdf/abfgo-tr.pdf";
      aElement.download = "abfgo-tr";
      document.body.appendChild(aElement);
      aElement.click();
      document.body.removeChild(aElement);
    } else if (url == "parkomobil") {
      const aElement = document.createElement("a");
      aElement.style.display = "none";
      aElement.href = "../assets/pdf/parkomobil.pdf";
      aElement.download = "parkomobil";
      document.body.appendChild(aElement);
      aElement.click();
      document.body.removeChild(aElement);
    } else if (url == "heymobility") {
      const aElement = document.createElement("a");
      aElement.style.display = "none";
      aElement.href = "../assets/pdf/heymobility.pdf";
      aElement.download = "heymobility";
      document.body.appendChild(aElement);
      aElement.click();
      document.body.removeChild(aElement);
    }
  } else {
    if (url == "abfgo") {
      const aElement = document.createElement("a");
      aElement.style.display = "none";
      aElement.href = "../assets/pdf/abfgo-en.pdf";
      aElement.download = "abfgo-en";
      document.body.appendChild(aElement);
      aElement.click();
      document.body.removeChild(aElement);
    } else if (url == "parkomobil") {
      const aElement = document.createElement("a");
      aElement.style.display = "none";
      aElement.href = "../assets/pdf/parkomobil.pdf";
      aElement.download = "parkomobil";
      document.body.appendChild(aElement);
      aElement.click();
      document.body.removeChild(aElement);
    } else if (url == "heymobility") {
      const aElement = document.createElement("a");
      aElement.style.display = "none";
      aElement.href = "../assets/pdf/heymobility.pdf";
      aElement.download = "heymobility";
      document.body.appendChild(aElement);
      aElement.click();
      document.body.removeChild(aElement);
    }
  }
}

$(window).on("load", function () {
  $("#loading").hide();
});
