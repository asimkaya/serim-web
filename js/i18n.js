$(document).ready(function () {
  const arrLang = {
    tr: {
      "nav-1": "Akıllı Şehir Çözümleri",
      "nav-2": "Hizmetlerimiz",
      "nav-3": "Hakkımızda",
      "nav-4": "İletişim",
      "mob-nav-1": "Biletleme Sistemi",
      "mob-nav-2": "Akıllı Otopark Yönetimi",
      "mob-nav-3": "Araç Paylaşım Platformu",
      "mob-nav-4": "Sadakat Kartı Uygulamaları",
      "mob-nav-5": "Çağrı Merkezi Çözümleri",
      "mob-nav-6": "İçerik Yönetim Sistemi(CMS)",
      "mob-nav-7": "Özel Yazılım",
      "mob-nav-8": "Hakkımızda",
      "mob-nav-9": "Kalite Belgeleri",
      "index-1": "Bizimle İletişime Geçin",
      "index-2": "Hizmetlerimizden detaylı bilgi almak için formu doldurun. Sizinle iletişime geçelim.",
      "index-3": "abfGO; deniz, hava ve kara yolcu taşımacılığında işletmelerin ihtiyaçlarına göre tasarlanmış bilet rezervasyon ve satış sistemidir.",
      "index-4": "ParkoMobil yenilikçi teknolojisi ile Cadde Kenarı Otopark Yönetimini kolaylaştırır, sorunlarınızı çözer ve akıllı hale getirir.",
      "index-5": "HEY Mobilite Teknolojileri bir araç paylaşım ve yönetim platformudur. Platformumuz ölçeklenebilir bir çözüm sunar.",
      "index-6": "abfGO; deniz, hava ve kara yolcu taşımacılığında sefer planını esas alarak çalışan işletmelerin ihtiyaçlarına göre tasarlanmış bilet rezervasyon ve satış sistemidir. Bulut ve on-premise tabanlı bir çözüm olan sistem satış kanalları, pazarlama ve operasyon yönetimini merkezileştirerek yönetimi şeffaflaştırır ve iş süreçlerini kolaylaştırır. Sistem sektörün lider kurumlarında geliştirilmek suretiyle know-how içermektedir ve beş yılı aşkın süredir kullanılıyor olması ile müşteri deneyiminde kendini kanıtlamıştır.",
      "index-7": "Otopark kapasitesinin büyük bir kısmını oluşturan cadde kenarı otoparkları işletmesi iş gücüne dayalıdır, takibi ve yönetimi kolay değildir. Bunu yanında tahsilat problemleri, kayıp kaçak oranları, doluluk oranı tespiti ve en önemlisi de kesilen fişlerin yasal dayanağının olmaması verimliliği düşürmekte ve maliyetlerini artırmaktadır. Sürücüler için otopark giriş çıkışları, manuel süreçler ve güncel teknolojilerin kullanılamaması müşteri memnuniyetsizliğini artırmaktadır.",
      "index-8": "Hey Scooter mikro ulaşım için geliştirilmiş bir elektrikli araç konseptidir. Dayanıklı ve etkin bir scooter ile araç paylaşım modeli oluşturmak, yerel markette lider bir pozisyona ulaşmak öncelikli amacımızdır. Kişisel kullanım için de mümkün olduğunca çok kullanıcıya erişerek scooterlerimizi deneyimlemelerini sağlamaktır. Sahip olduğumuz akıllı mobilite çözümümüz, çalışanlarına sürdürülebilir bir ulaşım çözümü sunar.",
      "index-9": "İLETİŞİM"
    },

    en: {
      "nav-1": "Smart City Solutions",
      "nav-2": "Our Services",
      "nav-3": "About Us",
      "nav-4": "Contact",
      "mob-nav-1": "Ticketing System",
      "mob-nav-2": "Smart Parking Management",
      "mob-nav-3": "Sharing Platform",
      "mob-nav-4": "Loyality Card Apps",
      "mob-nav-5": "Call Center Solutions",
      "mob-nav-6": "Content Management System(CMS)",
      "mob-nav-7": "Custom Software",
      "mob-nav-8": "About Us",
      "mob-nav-9": "Quality Certificates",
      "index-1": "Contact Us",
      "index-2": "Fill out the form to get detailed information about our services. Let's contact you.",
      "index-3": "abfGO; It is a ticket reservation and sales system designed according to needs in sea, air and land passenger transportation.",
      "index-4": "With its innovative technology, ParkoMobil simplifies Streetside Parking Management, solves your problems and makes it smart.",
      "index-5": "HEY Mobility Technologies is a vehicle sharing and management platform. Our platform provides a scalable solution.",
      "index-6": "abfGO; It is a ticket reservation and sales system designed according to the needs of businesses operating on the basis of the voyage plan in sea, air and land passenger transportation. Being a cloud and on-premise-based solution, the system makes management transparent and streamlines business processes by centralizing sales channels, marketing and operations management. The system includes know-how by being developed in the leading institutions of the sector.",
      "index-7": "The operation of streetside car parks, which make up a large part of the parking lot capacity, is labor-based, and it is not easy to follow and manage. In addition, collection problems, loss and leakage rates, determination of occupancy rate, and most importantly, the lack of legal basis for cut receipts reduce efficiency and increase costs. Parking lot entrances and exits for drivers, manual processes and the inability to use up-to-date technologies increase customer dissatisfaction.",
      "index-8": "Hey Scooter is an electric vehicle concept developed for micro transportation. Our primary goal is to create a vehicle sharing model with a durable and efficient scooter and to reach a leading position in the local market. For personal use, it is to reach as many users as possible to experience our scooters. Our smart mobility solution offers its employees a sustainable transportation solution.",
      "index-9": "CONTACT",
    },
  };

  let userLang = navigator.language || navigator.userLanguage;
  if (localStorage.getItem("language") == null) {
    localStorage.setItem("language", "tr");
  }

  if (localStorage.getItem("language") != "tr") {
    let lang = localStorage.getItem("language");
    lang == "tr" ? $("#dropdownMenuButtonLang").text("TR") : $("#dropdownMenuButtonLang").text("EN");

    $("a,h1,h2,h3,div,span,ul,button,label,p").each(function (index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  }

  //dil butonuna tıklanınca
  $(".dropdownMenuButtonLangItem").click(function () {
    localStorage.setItem("language", $(this).attr("name"));
    let lang = localStorage.getItem("language");
    lang == "tr" ? $("#dropdownMenuButtonLang").text("TR") : $("#dropdownMenuButtonLang").text("EN");

    $("a,h1,h2,h3,div,span,ul,button,label,p").each(function (index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });
});
