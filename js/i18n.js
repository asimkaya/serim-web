$(document).ready(function () {
  const arrLang = {
    tr: {
      "nav-1": "Akıllı Şehir Çözümleri",
      "nav-2": "Hizmetlerimiz",
      "nav-3": "Hakkımızda",
      "nav-4": "İletişim",
      "mob-nav-1": "Biletleme Sistemi",
      "mob-nav-2": "Akıllı Otopark Sistemi",
      "mob-nav-3": "Paylaşım Platformu",
      "mob-nav-4": "Sadakat Kartı Uygulamaları",
      "mob-nav-5": "Çağrı Merkezi Çözümleri",
      "mob-nav-6": "İçerik Yönetim Sistemi(CMS)",
      "mob-nav-7": "Özel Yazılım",
      "mob-nav-8": "Hakkımızda",
      "mob-nav-9": "Kalite Belgeleri",
    },

    en: {
      "nav-1": "Smart City Solutions",
      "nav-2": "Our Services",
      "nav-3": "About Us",
      "nav-4": "Contact",
      "mob-nav-1": "Ticketing System",
      "mob-nav-2": "Smart Parking System",
      "mob-nav-3": "Hey Mobility",
      "mob-nav-4": "Loyality Card Apps",
      "mob-nav-5": "Call Center Solutions",
      "mob-nav-6": "Content Management System(CMS)",
      "mob-nav-7": "Custom Software",
      "mob-nav-8": "About Us",
      "mob-nav-9": "Quality Certificates",
    },
  };

  let userLang = navigator.language || navigator.userLanguage;
  if (localStorage.getItem("language") == null) {
    localStorage.setItem("language", "tr");
  }

  if (localStorage.getItem("language") != "tr") {
    let lang = localStorage.getItem("language");
    lang == "tr" ? $("#dropdownMenuButtonLang").text("TR") : $("#dropdownMenuButtonLang").text("EN");

    $("a,h1,h2,h3,div,span,ul,button,label").each(function (index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  }

  //dil butonuna tıklanınca
  $(".dropdownMenuButtonLangItem").click(function () {
    localStorage.setItem("language", $(this).attr("name"));
    let lang = localStorage.getItem("language");
    lang == "tr" ? $("#dropdownMenuButtonLang").text("TR") : $("#dropdownMenuButtonLang").text("EN");

    $("a,h1,h2,h3,div,span,ul,button,label").each(function (index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });
});
