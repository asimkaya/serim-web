$(document).ready(function () {
  const arrLang = {
    tr: {
      "nav-1": "Akıllı Şehir Çözümleri",
      "nav-2": "Hizmetlerimiz",
      "nav-3": "Hakkımızda",
      "nav-4": "İletişim",
      "mob-nav-1": "Akıllı Biletleme Sistemi",
      "mob-nav-2": "Mobil Otopark Yönetimi",
      "mob-nav-3": "HeyMobility Paylaşım Platformu",
      "mob-nav-4": "Sadakat Kartı Uygulamaları",
      "mob-nav-5": "Çağrı Merkezi Çözümleri",
      "mob-nav-6": "İçerik Yönetim Sistemi(CMS)",
      "mob-nav-7": "Özel Yazılım",
      "mob-nav-8": "Hakkımızda",
      "mob-nav-9": "Kalite Belgeleri",
      "index-1": "Bizimle İletişime Geçin",
      "index-2": "Hizmetlerimizden detaylı bilgi almak için formu doldurun. Sizinle iletişime geçelim.",
      "index-3": "Kara yolu, deniz ve hava yolcu taşımacılığında işletmelerin ihtiyaçlarına göre tasarlanmış bilet rezervasyon ve satış sistemi...",
      "index-4": "ParkoMobil yenilikçi mobil teknoloji, görüntü işleme ve e-arşiv fatura ile otopark yönetimini kolaylaştırır..",
      "index-5": "HEY Mobilite araç paylaşım ve yönetim platformu için esnek, ölçeklenebilir ve etkin bir çözümdür...",
      "index-6": "abfGO; Kara yolu, deniz ve hava yolcu taşımacılığında işletmelerin ihtiyaçlarına göre tasarlanmış bilet rezervasyon ve satış sistemidir. Bulut ve on-premise tabanlı bir çözüm olan sistem satış kanalları, pazarlama ve operasyon yönetimini merkezileştirerek yönetimi şeffaflaştırır ve iş süreçlerini kolaylaştırır. Sistem sektörün lider kurumlarında geliştirilmek suretiyle know-how içermektedir ve beş yılı aşkın süredir kullanılıyor olması ile müşteri deneyiminde kendini kanıtlamıştır.",
      "index-7": "Otopark kapasitesinin büyük bir kısmını oluşturan cadde kenarı otoparkları işletmesi iş gücüne dayalıdır, takibi ve yönetimi kolay değildir. Bunu yanında tahsilat problemleri, kayıp kaçak oranları, doluluk oranı tespiti ve en önemlisi de kesilen fişlerin yasal dayanağının olmaması verimliliği düşürmekte ve maliyetlerini artırmaktadır. Sürücüler için otopark giriş çıkışları, manuel süreçler ve güncel teknolojilerin kullanılamaması müşteri memnuniyetsizliğini artırmaktadır.",
      "index-8": "HEY Mobilite Teknolojileri bir araç paylaşım ve yönetim platformudur. Platformumuz ölçeklenebilir, kullanıcı dostu ve farklı araç tiplerine uygun bir çözüm sunar. HEY akıllı mobilitede, kendi işini kurmak isteyen girişimciler, araç filolarını takip etmek isteyen şirketler, araca özel çözüm ihtiyacı olan üreticiler (elektrik araç, mopet, elektrikli scooter, forklift vb.), kampüs içi ulaşım çözümüne ihtiyacı olan şirket, kurum ve limanlar için uygun bir çözümdür.",
      "index-9": "İLETİŞİM",
      "index-10": "Daha Fazla Bilgi",
      "index-11": "DAHA FAZLA BİLGİ AL ⮕",
      "index-12": "REFERENSLAR",
      "index-13": "Müşteri Yorumları",
      "index-14": "Ana Sayfa",
      "index-15": "HİZMETLERİMİZ",
      "index-16": "HAKKIMIZDA",
      "index-17": "İLETİŞİM",
      "index-18": "Hızlı Menü",
      "index-19": "Sosyal Medya",
      "index-20": "HABERLER",
    },

    en: {
      "nav-1": "Smart City Solutions",
      "nav-2": "Our Services",
      "nav-3": "About Us",
      "nav-4": "Contact",
      "mob-nav-1": "Smart Ticketing System",
      "mob-nav-2": "Mobile Parking Management",
      "mob-nav-3": "HeyMobility Sharing Platform",
      "mob-nav-4": "Loyality Card Apps",
      "mob-nav-5": "Call Center Solutions",
      "mob-nav-6": "Content Management System(CMS)",
      "mob-nav-7": "Custom Software",
      "mob-nav-8": "About Us",
      "mob-nav-9": "Quality Certificates",
      "index-1": "Contact Us",
      "index-2": "Fill out the form to get detailed information about our services. Let's contact you.",
      "index-3": "In road, sea and air passenger transportation Ticket reservation and sales tailored to the needs of businesses system...",
      "index-4": "ParkoMobil innovative mobile technology, image processing and facilitates parking lot management with e-archive invoice...",
      "index-5": "HEY Mobility is a flexible, scalable and efficient solution for vehicle sharing and management platform...",
      "index-6": "abfGO; In road, sea and air passenger transportation It is a ticket reservation and sales system designed according to the needs of businesses. cloud and The system, which is an on-premise-based solution, provides sales channels, marketing and operations management. centralizes, makes management transparent and streamlines business processes. system sector It includes know-how by being developed in leading institutions and has been around for more than five years. It has proven itself in customer experience.",
      "index-7": "The operation of streetside car parks, which make up a large part of the parking lot capacity, is labor-based, and it is not easy to follow and manage. In addition, collection problems, loss and leakage rates, determination of occupancy rate, and most importantly, the lack of legal basis for cut receipts reduce efficiency and increase costs. Parking lot entrances and exits for drivers, manual processes and the inability to use up-to-date technologies increase customer dissatisfaction.",
      "index-8": "HEY Mobility Technologies is a car sharing and management platform. Our platform is scalable, user-friendly and suitable for different vehicle types. offers a suitable solution. In HEY smart mobility, entrepreneurs who want to start their own business, companies that want to follow their fleets, manufacturers that need vehicle-specific solutions (electric vehicle, moped, electric scooter, forklift etc.), to campus transportation solution It is a suitable solution for companies, institutions and ports that need it.",
      "index-9": "CONTACT",
      "index-10": "More Information",
      "index-11": "GET MORE INFORMATION ⮕",
      "index-12": "REFERENCES",
      "index-13": "Customer Comments",
      "index-14": "Home",
      "index-15": "OUR SERVİCES",
      "index-16": "ABOUT US",
      "index-17": "CONTACT",
      "index-18": "Quick Menu",
      "index-19": "Social Media",
      "index-20": "NEWS"
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
