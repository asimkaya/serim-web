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
      "index-6":
        "abfGO; Kara yolu, deniz ve hava yolcu taşımacılığında işletmelerin ihtiyaçlarına göre tasarlanmış bilet rezervasyon ve satış sistemidir. Bulut ve on-premise tabanlı bir çözüm olan sistem satış kanalları, pazarlama ve operasyon yönetimini merkezileştirerek yönetimi şeffaflaştırır ve iş süreçlerini kolaylaştırır. Sistem sektörün lider kurumlarında geliştirilmek suretiyle know-how içermektedir ve beş yılı aşkın süredir kullanılıyor olması ile müşteri deneyiminde kendini kanıtlamıştır.",
      "index-7":
        "Otopark kapasitesinin büyük bir kısmını oluşturan cadde kenarı otoparkları işletmesi iş gücüne dayalıdır, takibi ve yönetimi kolay değildir. Bunu yanında tahsilat problemleri, kayıp kaçak oranları, doluluk oranı tespiti ve en önemlisi de kesilen fişlerin yasal dayanağının olmaması verimliliği düşürmekte ve maliyetlerini artırmaktadır. Sürücüler için otopark giriş çıkışları, manuel süreçler ve güncel teknolojilerin kullanılamaması müşteri memnuniyetsizliğini artırmaktadır.",
      "index-8":
        "HEY Mobilite Teknolojileri bir araç paylaşım ve yönetim platformudur. Platformumuz ölçeklenebilir, kullanıcı dostu ve farklı araç tiplerine uygun bir çözüm sunar. HEY akıllı mobilitede, kendi işini kurmak isteyen girişimciler, araç filolarını takip etmek isteyen şirketler, araca özel çözüm ihtiyacı olan üreticiler (elektrik araç, mopet, elektrikli scooter, forklift vb.), kampüs içi ulaşım çözümüne ihtiyacı olan şirket, kurum ve limanlar için uygun bir çözümdür.",
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

      "ticket-1": "Biletleme Sistemi",
      "ticket-2":
        "abfGO; Kara yolu, deniz ve hava yolcu taşımacılığında işletmelerin ihtiyaçlarına göre tasarlanmış bilet rezervasyon ve satış sistemidir. Bulut ve on-premise tabanlı bir çözüm olan sistem satış kanalları, pazarlama ve operasyon yönetimini merkezileştirerek yönetimi şeffaflaştırır ve iş süreçlerini kolaylaştırır. Sistem sektörün lider kurumlarında geliştirilmek suretiyle know-how içermektedir ve beş yılı aşkın süredir kullanılıyor olması ile müşteri deneyiminde kendini kanıtlamıştır.",
      "ticket-3": "Sisteme Bakış ve Mimari Özet",
      "ticket-4":
        "abfGO son teknoloji prensiplerini kullanarak, modüler yapısı ile ölçeklenebilir olduğunu kanıtlamıştır. Mikro servis temelli mimariye ve performansı arttırılmış satış-rezervasyon motoruna sahiptir. Bu sayede kullanım saatlerinin ve satış kampanyalarının yoğun olduğu saatlerde cevap veren yüksek performanslı alt yapısı olduğunu göstermektedir. Sistemin ölçeklenebilir, sağlam ve otonom olması ile birlikte diğer sistemlerle olan entegrasyonu bir diğer özelliğidir. Sistemin temelini iki önemli teknolojik oluşturmaktadır;",
      "ticket-5": "- Yüksek performanslı mimari",
      "ticket-6": "- API Entegrasyonu",
      "ticket-7": "abfGO Özellikleri",
      "ticket-8": "Satış ve Rezervasyon",
      "ticket-9":
        "abfGO operatör kurumun satış ve pazarlama kapasitesini her zaman arttırmayı hedeflemiştir. Sahip olduğu dinamik fiyat yönetimi ve pazarlama motoru sayesinde kaynakları verimli kullanmayı, koltuk doluluk oranlarını arttırmayı ve kar oranlarını yönetmeyi sağlamaktadır. Sistem aşağıdaki satış kanallarını desteklemektedir;",
      "ticket-10": "- WEB ve Mobil (B2C)",
      "ticket-11": "- Gişe ve Çağrı Merkezi",
      "ticket-12": "- Seyahat Acentaları (B2B)",
      "ticket-13": "Pazarlama",
      "ticket-14":
        "Günümüz dünyasında gelişen teknoloji, yolcuların A noktasından B noktasına gitmeleri dışında farklı ihtiyaçları da beraberinde getirmektedir. Bu ihtiyaçların gelmesiyle oluşan rekabet ortamında pazarda tutunmak ve karlı bir işletme haline gelmek için;",
      "ticket-15": "- Doğru Hedeflenen müşteri segmenti",
      "ticket-16": "- Sadakat Sistemi",
      "ticket-17": "- Akıllı İndirimler",
      "ticket-18": "- Kampanyalar",
      "ticket-19": "gibi hizmetler şirketleri hedeflerine ulaştıracaktır.",
      "ticket-20": "Envanter Yönetimi",
      "ticket-21":
        "abfGO merkezi bir satış sistemi olmakla beraber operatöre koltuk envanterini tanımlama ve kontrol etmek için esnek bir platform sunmaktadır. Koltuk planları, koltuk planlarında güncelleme ve yeni araç tanımlama noktalarında hızlı ve kolay çözümler bulundurmaktadır.",
      "ticket-22": "Araç Profili",
      "ticket-23": "- Kapasite Planlaması",
      "ticket-24": "- Koltuk Planlaması",
      "ticket-25": "- Rezervasyon",
      "ticket-26": "İşletme Yönetimi",
      "ticket-27": "abfGO platformundaki lojistik mimarisi, route planları ve fiyat listeleri gibi bir dizi mantıksal yapıların esnekliğini maksimum düzeyde sunar. İçerisinde barındırdığı şablon yapılarla seferlerin gün, hafta, yaz, kış gibi farklı tarife ve saatler hazır olarak saklanabilmektedir. Bu sayede sefer ve tarife değişimleri hızlı bir şekilde oluşturulmakta ve kolay bir şekilde yönetilebilmektedir.",
      "ticket-28": "Sadakat Programı",
      "ticket-29": "Sistem operatörlerin kendi sadakat kart programlarını ve seviyelerini belirlemelerine imkan sağlar.",
      "ticket-30": "Sadakat kart başvuru sistemi ile sanal kart ve fiziki kart kullanımı Sefer bazlı Puan ve kullanım.",
      "ticket-31": "E-Bilet",
      "ticket-32": "Teknoloji ve mobilitenin yaygınlaştığı dijital dönüşüm dünyasında artık kağıdın yerini elektronik belgeler almaktadır. Biletsiz yolculuk için önemli bir adım olan E-Bilet sistemi aynı zamanda operasyon maliyetlerini de düşüren bir unsurdur.",
      "ticket-33": "Muhasebe Sistemi ve Gelir Kontrolü",
      "ticket-34": "abfGO’yu başarılı kılan önemli bir alt yapı da muhasebe ve gelir kontrolüdür. Programın e-bilet, satış, tahsilat ve vardiya raporları gibi bir dizi kompleks karşılaştırmalar yaparak doğru raporlamayı başarıyla kullanıcıya sağlamaktadır. Nakit akşı ve gelir kontrolü için kullanılan raporların bir kaçı;",
      "ticket-35": "Muhasebe Satış Raporu",
      "ticket-36": "Kasa Raporu",
      "ticket-37": "E-Bilet Raporu",
      "ticket-38": "Bölgesel Raporlar",
      "ticket-39": "Yolcu Bilgilendirme Sistemi",
      "ticket-40": "Yolculara seyahat bilgilendirilmesi ve sefer iptallari gibi durumların iletilmesi noktasında güvenli ve standart metotlar kullanılmaktadır. Aşağıdaki bilgilendirme standartlarında iletişim otonom olarak sağlanmaktadır;",
      "ticket-41": "- Mobil Bildirim",

      "park-1": "Mobil Otopark",
      "park-2": "Otopark kapasitesinin büyük bir kısmını oluşturan cadde kenarı otoparkları işletmesi iş gücüne dayalıdır, takibi ve yönetimi kolay değildir. Bunu yanında tahsilat problemleri, kayıp kaçak oranları, doluluk oranı tespiti ve en önemlisi de kesilen fişlerin yasal dayanağının olmaması verimliliği düşürmekte ve maliyetlerini artırmaktadır.",
      "park-3": "Sürücüler için otopark giriş çıkışları, manuel süreçler ve güncel teknolojilerin kullanılamaması müşteri memnuniyetsizliğini artırmaktadır",
      "park-4": "YAŞANABİLİR ŞEHİR",
      "park-5": "Mobil otopark yönetimi ile kayıp kacak oranını azaltarak gelirlerinizi artırmanızı sağlar. Yapılan araştırmalar şehirlerin trafiğinin bir kısmı araçların park yeri aramakla geçirdiğini göstermektedir. Entegre ve online uygulama ile sürücülerin boş parklara hızlı yönlendirerek şehir trafiğinin rahatlaması sağlanabilmektedir. Tabiki doğal sonucu olarak şehirlerde çevreye etkinlerinden dolayı, karbon emisyon oranlarını düşmesini ve sağlıklı bir şehir oluşmasına katkı sağlamaktadır.",
      "park-6": "VERİMLİLİK",
      "park-7": "ParkoMobil Türkiye'deki otopark yönetimini çözen yenilikçi bir teknolojidir. Otopark yönetimindeki yasal süreçlerini kayıtlı hale getirmek suretiyle verimsizleşen otopark işletmesinin tahsilat oranlaının artmasını sağlamaktadır. Müşteri taleplerinin temassız ve online yapılmasını sağlanması, ödeme kanallarının artışı müşteri memnuniyeti sağlamaktadır. Bu saha yönetimi ve iş gücü verimliğinin etkin kullanılmasını sağlamaktadır.",
      "park-8": "ParkoMobil Özellikleri",
      "park-9": "Plaka Okuma",
      "park-10": "Mobil telefonun kamerası ile plaka ve araç fotoğraflama: OCR teknolojisi kullanılarak fotoğraftan aracın kategorisi ve plakası metine çevrilir.",
      "park-11": "- Plaka Okuma (OCR)",
      "park-12": "- Araç Fotoğraflama",
      "park-13": "- Mobil İşlem",
      "park-14": "- Kategoriye Ayırma",
      "park-15": "Yeni Tebliğ Uyumu",
      "park-16": "Türkiye’de yeni çıkan tebliğe göre ilk defa plakaya fatura kesilecek. (VERGİ USUL KANUNU GENEL TEBLİĞİ (SIRA NO: 509)’NDE DEĞİŞİKLİK YAPILMASINA DAİR TEBLİĞ (SIRA NO: 515)",
      "park-17": "Kanıt ve Belgelendirme",
      "park-18": "GPS koordinat bilgisi ve zaman damgası yapılacağından yasal kanıt bulunduracak. Davalarda yasal delil olması nedeniyle lehte delil oluşturulacak.",
      "park-19": "- Zaman Damgası",
      "park-20": "- Yasal Delil",
      "park-21": "Otomatik Faturalandırma",
      "park-22": "Plaka üzerinden E-Arşiv ve E-Fatura kesmek suretiyle yasal bir belge olmasını sağlayacağından yeni bir süreç olacak, borç tahsilatını kolaylaştıracak.",
      "park-23": "Otopark Doluluk Oranı",
      "park-24": "Sensör kullanmadan, sahadan gelen veriler ve yapay zeka algoritması ile tahminleme yaparak, cadde kenarları için tahmini doluluk boşluk oranlarını verilebilecek.",
      "park-25": "Tahsilat Oranı",
      "park-26": "Müşteri etkileşimi ve ödeme sistemi ile ödemeyi kolaylaştıracak, tahsilatı artıracak.",
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
      "index-6":
        "abfGO; In road, sea and air passenger transportation It is a ticket reservation and sales system designed according to the needs of businesses. cloud and The system, which is an on-premise-based solution, provides sales channels, marketing and operations management. centralizes, makes management transparent and streamlines business processes. system sector It includes know-how by being developed in leading institutions and has been around for more than five years. It has proven itself in customer experience.",
      "index-7":
        "The operation of streetside car parks, which make up a large part of the parking lot capacity, is labor-based, and it is not easy to follow and manage. In addition, collection problems, loss and leakage rates, determination of occupancy rate, and most importantly, the lack of legal basis for cut receipts reduce efficiency and increase costs. Parking lot entrances and exits for drivers, manual processes and the inability to use up-to-date technologies increase customer dissatisfaction.",
      "index-8":
        "HEY Mobility Technologies is a car sharing and management platform. Our platform is scalable, user-friendly and suitable for different vehicle types. offers a suitable solution. In HEY smart mobility, entrepreneurs who want to start their own business, companies that want to follow their fleets, manufacturers that need vehicle-specific solutions (electric vehicle, moped, electric scooter, forklift etc.), to campus transportation solution It is a suitable solution for companies, institutions and ports that need it.",
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
      "index-20": "NEWS",

      "ticket-1": "Ticketing System",
      "ticket-2":
        "abfGO; It is a ticket reservation and sales system designed according to the needs of businesses in land, sea and air passenger transportation. Being a cloud and on-premise-based solution, the system makes management transparent and streamlines business processes by centralizing sales channels, marketing and operations management. The system includes know-how by being developed in the leading institutions of the sector and has proven itself in customer experience with its use for more than five years.",
      "ticket-3": "System Overview and Architectural Summary",
      "ticket-4":
        "abfGO has proven to be scalable with its modular structure, using cutting-edge principles. It has a microservice-based architecture and a performance-enhanced sales-reservation engine. In this way, it shows that it has a high-performance infrastructure that responds during peak hours of usage and sales campaigns. Another feature of the system is that it is scalable, robust and autonomous, as well as its integration with other systems. Two important technologies form the basis of the system;",
      "ticket-5": "- High performance architecture",
      "ticket-6": "- API Integration",
      "ticket-7": "abfGO Features",
      "ticket-8": "Sales and Reservation",
      "ticket-9":
        "abfGO operator has always aimed to increase the sales and marketing capacity of the institution. Thanks to its dynamic price management and marketing engine, it provides efficient use of resources, increasing seat occupancy rates and managing profit rates. The system supports the following sales channels;",
      "ticket-10": "- WEB and Mobile (B2C)",
      "ticket-11": "- Box Office and Call Center",
      "ticket-12": "- Travel Agencies (B2B)",
      "ticket-13": "Marketing",
      "ticket-14":
        "Developing technology in today's world brings along different needs, apart from getting passengers from point A to point B. In order to hold on in the market and become a profitable business in the competitive environment created by these needs;",
      "ticket-15": "- Correctly Targeted Customer Segment",
      "ticket-16": "- Loyalty System",
      "ticket-17": "- Smart Discounts",
      "ticket-18": "- Campaigns",
      "ticket-19": "such services will help companies achieve their goals.",
      "ticket-20": "Inventory Management",
      "ticket-21":
        "abfGO is a centralized sales system and offers the operator a flexible platform to define and control the seat inventory. It has quick and easy solutions for seat plans, updating seat plans and new vehicle identification points.",
      "ticket-22": "- Vehicle Profile",
      "ticket-23": "- Capacity Planning",
      "ticket-24": "- Seat Planning",
      "ticket-25": "- Reservation",
      "ticket-26": "Business Administration",
      "ticket-27": "The logistics architecture on the abfGO platform maximizes the flexibility of a number of logical structures such as route plans and price lists. With the template structures it contains, different tariffs and times of the flights such as days, weeks, summer and winter can be stored ready. In this way, time and tariff changes can be created quickly and easily managed.",
      "ticket-28": "Loyalty Program",
      "ticket-29": "The system allows operators to define their own loyalty card programs and levels.",
      "ticket-30": "Use of virtual and physical cards with the loyalty card application system. Expedition-based Points and usage.",
      "ticket-31": "E-Ticket",
      "ticket-32": "In the world of digital transformation, where technology and mobility have become widespread, electronic documents are now taking the place of paper. The E-Ticket system, which is an important step for ticketless travel, is also a factor that reduces operational costs.",
      "ticket-33": "Accounting System and Income Control",
      "ticket-34": "Another important infrastructure that makes abfGO successful is accounting and income control. The program successfully provides accurate reporting to the user by making complex comparisons such as e-ticket, sales, collection and shift reports. A few of the reports used for cash flow and income control;",
      "ticket-35": "Accounting Sales Report",
      "ticket-36": "Cash Report",
      "ticket-37": "E-Ticket Report",
      "ticket-38": "Regional Reports",
      "ticket-39": "Passenger Information System",
      "ticket-40": "Safe and standard methods are used to inform passengers about travel information and flight cancellations. Communication is provided autonomously in the following information standards;",
      "ticket-41": "- Push-Notification",

      "park-1": "Mobile Parking",
      "park-2": "The operation of streetside car parks, which make up a large part of the parking lot capacity, is labor-based, and it is not easy to follow and manage. In addition, collection problems, loss and leakage rates, determination of occupancy rate, and most importantly, the lack of legal basis for cut receipts reduce efficiency and increase costs.",
      "park-3": "Parking lot entrances and exits for drivers, manual processes and the inability to use up-to-date technologies increase customer dissatisfaction.",
      "park-4": "LIVABLE CITY",
      "park-5": "With mobile parking management, it allows you to increase your income by reducing the loss and loss rate. Research shows that some of the traffic in cities is spent by cars looking for parking spaces. With the integrated and online application, it is possible to relieve the city traffic by directing the drivers to the empty parks quickly. Of course, as a natural result, it contributes to the reduction of carbon emission rates and the formation of a healthy city due to the environmental effects in cities.",
      "park-6": "PRODUCTIVITY",
      "park-7": "ParkoMobil is an innovative technology that solves the parking management in Turkey. By registering the legal processes in parking lot management, it provides an increase in the collection rate of the inefficient parking lot business. Ensuring that customer requests are made contactless and online, and the increase in payment channels provides customer satisfaction. This ensures effective use of field management and workforce efficiency.",
      "park-8": "ParkoMobil Features",
      "park-9": "Plate Reading",
      "park-10": "Photographing license plates and vehicles with the camera of the mobile phone: Using OCR technology, the category and license plate of the vehicle are converted from the photo to text.",
      "park-11": "- Plate Reading (OCR)",
      "park-12": "- Vehicle Photography",
      "park-13": "- Mobile Proccess",
      "park-14": "- Categorization",
      "park-15": "New Communiqué Harmonization",
      "park-16": "According to the new communiqué in Turkey, an invoice will be issued to the plate for the first time. (COMMUNIQUÉ ON THE AMENDMENT OF THE GENERAL COMMUNIQUE OF THE TAX PROCEDURE LAW (ORDER NO: 509) (ORDER NO: 515)",
      "park-17": "Evidence and Documentation",
      "park-18": "It will have legal proof as GPS coordinate information and timestamp will be made. Since there is legal evidence in the cases, favorable evidence will be created.",
      "park-19": "- Timestamp",
      "park-20": "- Legal Evidence",
      "park-21": "Automatic Billing",
      "park-22": "It will be a new process as it will make it a legal document by cutting E-Archive and E-Invoice from the plate, and it will facilitate debt collection.",
      "park-23": "Parking Occupancy Rate",
      "park-24": "It will be possible to give estimated occupancy and vacancy rates for street edges by making estimations with data from the field and artificial intelligence algorithm without using sensors.",
      "park-25": "Collection Rate",
      "park-26": "It will facilitate payment and increase collection with customer interaction and payment system.",

    },
  };

  let userLang = navigator.language || navigator.userLanguage;
  if (localStorage.getItem("language") == null) {
    localStorage.setItem("language", "tr");
  }

  if (localStorage.getItem("language") != "tr") {
    let lang = localStorage.getItem("language");
    lang == "tr" ? $("#dropdownMenuButtonLang").text("TR") : $("#dropdownMenuButtonLang").text("EN");

    $("a,h1,h2,h3,div,span,ul,button,label,p,li").each(function (index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  }

  //dil butonuna tıklanınca
  $(".dropdownMenuButtonLangItem").click(function () {
    localStorage.setItem("language", $(this).attr("name"));
    let lang = localStorage.getItem("language");
    lang == "tr" ? $("#dropdownMenuButtonLang").text("TR") : $("#dropdownMenuButtonLang").text("EN");

    $("a,h1,h2,h3,div,span,ul,button,label,p,li").each(function (index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });
});
