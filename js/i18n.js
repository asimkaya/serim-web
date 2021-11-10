$(document).ready(function () {
  const arrLang = {
    tr: {
      "nav-1": "Akıllı Şehir Çözümleri",
      "nav-2": "Hizmetlerimiz",
      "nav-3": "Hakkımızda",
      "nav-4": "İletişim",
      "mob-nav-1": "abfGo Akıllı Biletleme Sistemi",
      "mob-nav-2": "ParkoMobil Otopark Yönetimi",
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
        "abfGo; Kara yolu, deniz ve hava yolcu taşımacılığında işletmelerin ihtiyaçlarına göre tasarlanmış bilet rezervasyon ve satış sistemidir. Bulut ve on-premise tabanlı bir çözüm olan sistem satış kanalları, pazarlama ve operasyon yönetimini merkezileştirerek yönetimi şeffaflaştırır ve iş süreçlerini kolaylaştırır. Sistem sektörün lider kurumlarında geliştirilmek suretiyle know-how içermektedir ve beş yılı aşkın süredir kullanılıyor olması ile müşteri deneyiminde kendini kanıtlamıştır.",
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
        "abfGo; Kara yolu, deniz ve hava yolcu taşımacılığında işletmelerin ihtiyaçlarına göre tasarlanmış bilet rezervasyon ve satış sistemidir. Bulut ve on-premise tabanlı bir çözüm olan sistem satış kanalları, pazarlama ve operasyon yönetimini merkezileştirerek yönetimi şeffaflaştırır ve iş süreçlerini kolaylaştırır. Sistem sektörün lider kurumlarında geliştirilmek suretiyle know-how içermektedir ve beş yılı aşkın süredir kullanılıyor olması ile müşteri deneyiminde kendini kanıtlamıştır.",
      "ticket-3": "Sisteme Bakış ve Mimari Özet",
      "ticket-4":
        "abfGo son teknoloji prensiplerini kullanarak, modüler yapısı ile ölçeklenebilir olduğunu kanıtlamıştır. Mikro servis temelli mimariye ve performansı arttırılmış satış-rezervasyon motoruna sahiptir. Bu sayede kullanım saatlerinin ve satış kampanyalarının yoğun olduğu saatlerde cevap veren yüksek performanslı alt yapısı olduğunu göstermektedir. Sistemin ölçeklenebilir, sağlam ve otonom olması ile birlikte diğer sistemlerle olan entegrasyonu bir diğer özelliğidir. Sistemin temelini iki önemli teknolojik oluşturmaktadır;",
      "ticket-5": "- Yüksek performanslı mimari",
      "ticket-6": "- API Entegrasyonu",
      "ticket-7": "abfGo Özellikleri",
      "ticket-8": "Satış ve Rezervasyon",
      "ticket-9":
        "abfGo operatör kurumun satış ve pazarlama kapasitesini her zaman arttırmayı hedeflemiştir. Sahip olduğu dinamik fiyat yönetimi ve pazarlama motoru sayesinde kaynakları verimli kullanmayı, koltuk doluluk oranlarını arttırmayı ve kar oranlarını yönetmeyi sağlamaktadır. Sistem aşağıdaki satış kanallarını desteklemektedir;",
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
        "abfGo merkezi bir satış sistemi olmakla beraber operatöre koltuk envanterini tanımlama ve kontrol etmek için esnek bir platform sunmaktadır. Koltuk planları, koltuk planlarında güncelleme ve yeni araç tanımlama noktalarında hızlı ve kolay çözümler bulundurmaktadır.",
      "ticket-22": "Araç Profili",
      "ticket-23": "- Kapasite Planlaması",
      "ticket-24": "- Koltuk Planlaması",
      "ticket-25": "- Rezervasyon",
      "ticket-26": "İşletme Yönetimi",
      "ticket-27":
        "abfGo platformundaki lojistik mimarisi, route planları ve fiyat listeleri gibi bir dizi mantıksal yapıların esnekliğini maksimum düzeyde sunar. İçerisinde barındırdığı şablon yapılarla seferlerin gün, hafta, yaz, kış gibi farklı tarife ve saatler hazır olarak saklanabilmektedir. Bu sayede sefer ve tarife değişimleri hızlı bir şekilde oluşturulmakta ve kolay bir şekilde yönetilebilmektedir.",
      "ticket-28": "Sadakat Programı",
      "ticket-29": "Sistem operatörlerin kendi sadakat kart programlarını ve seviyelerini belirlemelerine imkan sağlar.",
      "ticket-30": "Sadakat kart başvuru sistemi ile sanal kart ve fiziki kart kullanımı Sefer bazlı Puan ve kullanım.",
      "ticket-31": "E-Bilet",
      "ticket-32":
        "Teknoloji ve mobilitenin yaygınlaştığı dijital dönüşüm dünyasında artık kağıdın yerini elektronik belgeler almaktadır. Biletsiz yolculuk için önemli bir adım olan E-Bilet sistemi aynı zamanda operasyon maliyetlerini de düşüren bir unsurdur.",
      "ticket-33": "Muhasebe Sistemi ve Gelir Kontrolü",
      "ticket-34":
        "abfGo’yu başarılı kılan önemli bir alt yapı da muhasebe ve gelir kontrolüdür. Programın e-bilet, satış, tahsilat ve vardiya raporları gibi bir dizi kompleks karşılaştırmalar yaparak doğru raporlamayı başarıyla kullanıcıya sağlamaktadır. Nakit akşı ve gelir kontrolü için kullanılan raporların bir kaçı;",
      "ticket-35": "Muhasebe Satış Raporu",
      "ticket-36": "Kasa Raporu",
      "ticket-37": "E-Bilet Raporu",
      "ticket-38": "Bölgesel Raporlar",
      "ticket-39": "Yolcu Bilgilendirme Sistemi",
      "ticket-40":
        "Yolculara seyahat bilgilendirilmesi ve sefer iptallari gibi durumların iletilmesi noktasında güvenli ve standart metotlar kullanılmaktadır. Aşağıdaki bilgilendirme standartlarında iletişim otonom olarak sağlanmaktadır;",
      "ticket-41": "- Mobil Bildirim",

      "park-1": "Mobil Otopark",
      "park-2":
        "Otopark kapasitesinin büyük bir kısmını oluşturan cadde kenarı otoparkları işletmesi iş gücüne dayalıdır, takibi ve yönetimi kolay değildir. Bunu yanında tahsilat problemleri, kayıp kaçak oranları, doluluk oranı tespiti ve en önemlisi de kesilen fişlerin yasal dayanağının olmaması verimliliği düşürmekte ve maliyetlerini artırmaktadır.",
      "park-3":
        "Sürücüler için otopark giriş çıkışları, manuel süreçler ve güncel teknolojilerin kullanılamaması müşteri memnuniyetsizliğini artırmaktadır",
      "park-4": "YAŞANABİLİR ŞEHİR",
      "park-5":
        "Mobil otopark yönetimi ile kayıp kacak oranını azaltarak gelirlerinizi artırmanızı sağlar. Yapılan araştırmalar şehirlerin trafiğinin bir kısmı araçların park yeri aramakla geçirdiğini göstermektedir. Entegre ve online uygulama ile sürücülerin boş parklara hızlı yönlendirerek şehir trafiğinin rahatlaması sağlanabilmektedir. Tabiki doğal sonucu olarak şehirlerde çevreye etkinlerinden dolayı, karbon emisyon oranlarını düşmesini ve sağlıklı bir şehir oluşmasına katkı sağlamaktadır.",
      "park-6": "VERİMLİLİK",
      "park-7":
        "ParkoMobil Türkiye'deki otopark yönetimini çözen yenilikçi bir teknolojidir. Otopark yönetimindeki yasal süreçlerini kayıtlı hale getirmek suretiyle verimsizleşen otopark işletmesinin tahsilat oranlaının artmasını sağlamaktadır. Müşteri taleplerinin temassız ve online yapılmasını sağlanması, ödeme kanallarının artışı müşteri memnuniyeti sağlamaktadır. Bu saha yönetimi ve iş gücü verimliğinin etkin kullanılmasını sağlamaktadır.",
      "park-8": "ParkoMobil Özellikleri",
      "park-9": "Plaka Okuma",
      "park-10":
        "Mobil telefonun kamerası ile plaka ve araç fotoğraflama: OCR teknolojisi kullanılarak fotoğraftan aracın kategorisi ve plakası metine çevrilir.",
      "park-11": "- Plaka Okuma (OCR)",
      "park-12": "- Araç Fotoğraflama",
      "park-13": "- Mobil İşlem",
      "park-14": "- Kategoriye Ayırma",
      "park-15": "Yeni Tebliğ Uyumu",
      "park-16":
        "Türkiye’de yeni çıkan tebliğe göre ilk defa plakaya fatura kesilecek. (VERGİ USUL KANUNU GENEL TEBLİĞİ (SIRA NO: 509)’NDE DEĞİŞİKLİK YAPILMASINA DAİR TEBLİĞ (SIRA NO: 515)",
      "park-17": "Kanıt ve Belgelendirme",
      "park-18":
        "GPS koordinat bilgisi ve zaman damgası yapılacağından yasal kanıt bulunduracak. Davalarda yasal delil olması nedeniyle lehte delil oluşturulacak.",
      "park-19": "- Zaman Damgası",
      "park-20": "- Yasal Delil",
      "park-21": "Otomatik Faturalandırma",
      "park-22":
        "Plaka üzerinden E-Arşiv ve E-Fatura kesmek suretiyle yasal bir belge olmasını sağlayacağından yeni bir süreç olacak, borç tahsilatını kolaylaştıracak.",
      "park-23": "Otopark Doluluk Oranı",
      "park-24":
        "Sensör kullanmadan, sahadan gelen veriler ve yapay zeka algoritması ile tahminleme yaparak, cadde kenarları için tahmini doluluk boşluk oranlarını verilebilecek.",
      "park-25": "Tahsilat Oranı",
      "park-26": "Müşteri etkileşimi ve ödeme sistemi ile ödemeyi kolaylaştıracak, tahsilatı artıracak.",

      "mobility-1": "Hızlıca Devreye Alın",
      "mobility-2":
        "HEY Mobilite Teknolojileri ile projelerinizi kısa bir süre içerisinde devreye alın. Tek yapmanız gereken araç filonuzu temin etmektir. Yazılım geliştirme veya donanım için kaynak ayırmanıza gerek yoktur. SAAS modeli ile kullandığınız kadar ödersiniz. Filonuzu büyütmek istediğinizde, ölçeklenebilir yapısı ile yeni araçlar kolay bir şekilde sisteme eklenebilir.",
      "mobility-3": "Mobil Uygulama",
      "mobility-4": "Çoklu Dil Desteği",
      "mobility-5": "Türkçe, İngilizce, Rusça ve Arapça desteği gibi birden fazla dil seçeneği bulunur. İstediğiniz dile kolayca uyarlanabilir",
      "mobility-6": "Hızlı Uyarlama ve Yayınlama",
      "mobility-7": "Markanızı çok hızlı, bir aydan daha kısa sürede IOS ve Android markette yayınlayabiliriz.",
      "mobility-8": "Arayüz Tasarımı",
      "mobility-9": "Standart arayüz tasarımı ile birlikte kurumsal renklere uygun profesyonel tasarım sunuyoruz.",
      "mobility-10": "Ödeme sistemi Entegrasyonu",
      "mobility-11": "Ödeme sistemi partnerleri ile kredi kartı, pre paid kart ve debit kart bilgileriniz güvenle saklanır.",
      "mobility-12": "Panel Özellikleri",
      "mobility-13": "Konum Takibi",
      "mobility-14":
        "Gerçek zamanlı konum takibi ile araçlarınızın harita üzerindeki konumlarını takip edebilir, araç isimlerine göre filtreleme yapabilirsiniz.",
      "mobility-15":
        "Mobil uygulama, müşterilere yakınlarında olan araçları harita üzerinde bulma, kiralama ve kiralamayı sonlandırma, kiralama geçmişini görüntüleme gibi özellikler sağlar.",
      "mobility-16": "Ödeme ve Faturalandırma",
      "mobility-17":
        "Kiralama tamamlandığında her bir müşteri için elektronik fatura oluşturulur. Faturalar müşteriler tarafından mobil uygulama üzerinden, kullanıcılar tarafından da panel üzerinden görülebilir.",
      "mobility-18": "Alarm Takibi",
      "mobility-19":
        "Araçlardan gelen alarm verilerini gerçek zamanlı olarak görüp, müdahalede bulunabilir veya geçmişe yönelik alarm sorguları kullanabilirsiniz.",
      "mobility-20": "Yönetim Paneli",
      "mobility-21": "Gerçek zamanlı araç verileri",
      "mobility-22": "Kullanıcı yönetim ekranları",
      "mobility-23": "Sürüş ve alarm geçmişi",
      "mobility-24": "Şarj istasyonları yönetimi",
      "mobility-25": "Farklı araç türleri ekleme özelliği",
      "mobility-26": "Çoklu bölge ve desteği (ülke,şehir,semt)",
      "mobility-27": "Kullanım ve gelir raporları",
      "mobility-28": "Yazılım Özellikleri",
      "mobility-29": "Donanımdan bağımsız yazılım",
      "mobility-30": "Araçların uzaktan kontrolü",
      "mobility-31": "Tek bir uygulamada scooter, bisiklet ve elektirikli araç yönetimi",
      "mobility-32": "Şarj istasyonları yönetimine uygun",
      "mobility-33": "Farklı araç ve IOT türleri ile uyumlu",
      "mobility-34": "Farklı ödeme sistemleri ile entegre",
      "mobility-35": "Kendi markanızı kullanma olanağı",
      "mobility-36": "Farklı roller için farklı kullanıcı tanımları",
      "mobility-37": "Farklı ülkeler için çoklu dil desteği",
      "mobility-38": "Kullanıcı dostu arayüz",
      "mobility-39": "Kimlik doğrulama (isteğe bağlı)",
      "mobility-40": "Uygulama içi araç navigasyonu",
      "mobility-41": "Rezervasyon sistemi",

      "hey-1":
        "Hey Scooter mikro ulaşım için geliştirilmiş bir elektrikli araç konseptidir. Dayanıklı ve etkin bir scooter ile araç paylaşım modeli oluşturmak, yerel markette lider bir pozisyona ulaşmak öncelikli amacımızdır. Kişisel kullanım için de mümkün olduğunca çok kullanıcıya erişerek scooterlerimizi deneyimlemelerini sağlamaktır.",
      "hey-2":
        "Sahip olduğumuz akıllı mobilite çözümümüz, çalışanlarına sürdürülebilir bir ulaşım çözümü sunmak isteyen şirketlerden, öğrencilerine ekonomik bir ulaşım aracına erişim sağlamak isteyen üniversitelere, ya da araç paylaşım sistemi oluşturmak isteyen yatırımcılara kadar, bir çok iş alanı için uygundur.",
      "hey-3": "Sunduklarımız",
      "hey-4":
        "Hey Scooter Akıllı Mobilite, Kullanıcılara istedikleri yerlere kolayca ulaşmalarını sağlayan, trafikte geçirilen zamanı azaltan, bütünleşik bir ulaşım çözümüdür. Mobilite çözümümüzün içeirigi;",
      "hey-5": "- Scooter Filosu",
      "hey-6": "- Şarj İstasyonları",
      "hey-7": "- Akıllı Mobil Uygulama",
      "hey-8": "- Yönetici Paneli",
      "hey-9": "- Bakım, proje ve yazılımın geliştirilmesi/güncellenmesi",
      "hey-10": "Araç Paylaşımının Avantajları",
      "hey-11":
        "Araç paylaşımı, ilk/son kilometre ulaşımında cazip bir çözümdür. Elektrikli Scooter kiralama göreceli olarak ucuzdur ve bu tür bir ulaşım aracı, trafik sıkışıklığı veya aşırı park bedelleri içim endişe etmeden, kullanıcılara kalabalık şehirlerde bile yolculuk imkanı sağlar. Üstelik elektrikli scooter:yürümek, bilgisayar kullanmak veya toplu taşıma araçlarındandaha hızlıdır.",
      "hey-12": "Elektrikli scooter kiralama, bu avantajları ile bir çok organizasyona entegre edilebilir.",
      "hey-13": "Uygulama Alanları",
      "hey-14":
        "Hey Scooter mikro mobilite çözümü farklı uygulama alanlarına sahiptir. Aşağıdaki uygulama alanlarında ihtiyaca uygun projelendirme ve çözüm üretilebilmektedir.",
      "hey-15": "- Akıllı Şehirler",
      "hey-16": "- Üniversite Kampüsleri",
      "hey-17": "- Oteller",
      "hey-18": "- İşletmeler",
      "hey-19": "- Limanlar",

      "custom-1": "Özel Yazılım Hizmeti",
      "custom-2":
        "Özel yazılımlar ile sizin için aklınızdaki iş fikirlerini yazılıma çevirebiliriz. Uzun yıllar boyunca oluşturmuş olduğumuz birikim ve tecrübemiz ile aklınızdakileri hayata geçirmek çok kolay.",
      "custom-3":
        "Firmanız içerisinde ihtiyaç duyulan, çeşitli amaçlara yönelik yazılımlar, tarafımızca hazırlanır. Web ve Mobil platformlara özel, profesyonel ve uçtan uca yazılımları kapsar. Detaylı bilgi için lütfen",
      "custom-4": "iletişime geçiniz.",

      "about-1": "Tarihçe",
      "about-2":
        "Serim; kurumların ihtiyacı Web ve Mobil yazılım teknolojileri geliştirmek amacıyla 2009 yılında kurulmuştur. ARGE ve kendi yazılımlarını geliştirmek için 2014 yılından itibaren Ulutek Teknopark’a taşınmıştır. Kısa sürede satış ve pazarlama ağını genişleterek yurt dışı ofisini hizmete geçirmek suretiyle uluslararası pazarlara açılmıştır. Profesyonel yazılım uygulamaları ve proje yönetimi deneyimi ile, her zaman müşterilerinin başarısını sağlayacak en iyi uygulamaları geliştirmiştir. Misyonumuz müşterilerimizin ihtiyaçlarına en uygun çözümler sunarak, onlara değer katmak, beklentilerini en iyi şekilde karşılayarak gerçekleştirmektir. Hedefimiz; Ulusal ve Uluslararası alanda değer katan, müşterimiz ve çalışanlarımızın yüzünü güldüren lider yazılım ve hizmet şirketi olmaktır.",
      "about-3": "Kilometre Taşları",
      "about-4": "Serim Yazılım Teknolojileri kuruldu.",
      "about-5": "Ms Dynamics CRM partner oldu",
      "about-6": "Burulaş Budo Biletleme projesi devreye alındı.",
      "about-7": "Ulutek Teknopark Teknoloji Geliştirme bölgesinde, Serim Arge merkezi kuruldu. Burulaş Havacılık biletleme çözümü yayınlandı.",
      "about-8": "Rent a Car bulut tabanlı SaaS biletleme projesi devreye alındı. Konya Bilim Merkezi biletleme çözümü.",
      "about-9": "Abfgo bulut tabanlı SaaS biletleme çözümü devreye alındı.",
      "about-10": "İlk yurtdışı ofisi Bangladeş'te açıldı",
      "about-11": "Mobil Yolcu Kontrol Sistemi (QR). Fason App (Fason Takip Sistemi SaaS). Mobil Saha Satış Sistemi",
      "about-12": "E-TWOW Türkiye distirbütörü ve Codice temsilcisi.",
      "about-13": "Hey Scooter Paylaşım platformu. ParkoMobil Otopark Yönetim Sistemi",
      "about-14": "Kalite Belgesi",

      "contact-1": "İletişim Bilgilerimiz",
      "contact-2": "Gönder",

      "news-1": "Haber"
    },

    en: {
      "nav-1": "Smart City Solutions",
      "nav-2": "Services",
      "nav-3": "About Us",
      "nav-4": "Contact",
      "mob-nav-1": "abfGo Smart Ticketing System",
      "mob-nav-2": "ParkoMobil Parking Management",
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
        "abfGo; In road, sea and air passenger transportation It is a ticket reservation and sales system designed according to the needs of businesses. cloud and The system, which is an on-premise-based solution, provides sales channels, marketing and operations management. centralizes, makes management transparent and streamlines business processes. system sector It includes know-how by being developed in leading institutions and has been around for more than five years. It has proven itself in customer experience.",
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
        "abfGo; It is a ticket reservation and sales system designed according to the needs of businesses in land, sea and air passenger transportation. Being a cloud and on-premise-based solution, the system makes management transparent and streamlines business processes by centralizing sales channels, marketing and operations management. The system includes know-how by being developed in the leading institutions of the sector and has proven itself in customer experience with its use for more than five years.",
      "ticket-3": "System Overview and Architectural Summary",
      "ticket-4":
        "abfGo has proven to be scalable with its modular structure, using cutting-edge principles. It has a microservice-based architecture and a performance-enhanced sales-reservation engine. In this way, it shows that it has a high-performance infrastructure that responds during peak hours of usage and sales campaigns. Another feature of the system is that it is scalable, robust and autonomous, as well as its integration with other systems. Two important technologies form the basis of the system;",
      "ticket-5": "- High performance architecture",
      "ticket-6": "- API Integration",
      "ticket-7": "abfGo Features",
      "ticket-8": "Sales and Reservation",
      "ticket-9":
        "abfGo operator has always aimed to increase the sales and marketing capacity of the institution. Thanks to its dynamic price management and marketing engine, it provides efficient use of resources, increasing seat occupancy rates and managing profit rates. The system supports the following sales channels;",
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
        "abfGo is a centralized sales system and offers the operator a flexible platform to define and control the seat inventory. It has quick and easy solutions for seat plans, updating seat plans and new vehicle identification points.",
      "ticket-22": "- Vehicle Profile",
      "ticket-23": "- Capacity Planning",
      "ticket-24": "- Seat Planning",
      "ticket-25": "- Reservation",
      "ticket-26": "Business Administration",
      "ticket-27":
        "The logistics architecture on the abfGo platform maximizes the flexibility of a number of logical structures such as route plans and price lists. With the template structures it contains, different tariffs and times of the flights such as days, weeks, summer and winter can be stored ready. In this way, time and tariff changes can be created quickly and easily managed.",
      "ticket-28": "Loyalty Program",
      "ticket-29": "The system allows operators to define their own loyalty card programs and levels.",
      "ticket-30": "Use of virtual and physical cards with the loyalty card application system. Expedition-based Points and usage.",
      "ticket-31": "E-Ticket",
      "ticket-32":
        "In the world of digital transformation, where technology and mobility have become widespread, electronic documents are now taking the place of paper. The E-Ticket system, which is an important step for ticketless travel, is also a factor that reduces operational costs.",
      "ticket-33": "Accounting System and Income Control",
      "ticket-34":
        "Another important infrastructure that makes abfGo successful is accounting and income control. The program successfully provides accurate reporting to the user by making complex comparisons such as e-ticket, sales, collection and shift reports. A few of the reports used for cash flow and income control;",
      "ticket-35": "Accounting Sales Report",
      "ticket-36": "Cash Report",
      "ticket-37": "E-Ticket Report",
      "ticket-38": "Regional Reports",
      "ticket-39": "Passenger Information System",
      "ticket-40":
        "Safe and standard methods are used to inform passengers about travel information and flight cancellations. Communication is provided autonomously in the following information standards;",
      "ticket-41": "- Push-Notification",

      "park-1": "Mobile Parking",
      "park-2":
        "The operation of streetside car parks, which make up a large part of the parking lot capacity, is labor-based, and it is not easy to follow and manage. In addition, collection problems, loss and leakage rates, determination of occupancy rate, and most importantly, the lack of legal basis for cut receipts reduce efficiency and increase costs.",
      "park-3":
        "Parking lot entrances and exits for drivers, manual processes and the inability to use up-to-date technologies increase customer dissatisfaction.",
      "park-4": "LIVABLE CITY",
      "park-5":
        "With mobile parking management, it allows you to increase your income by reducing the loss and loss rate. Research shows that some of the traffic in cities is spent by cars looking for parking spaces. With the integrated and online application, it is possible to relieve the city traffic by directing the drivers to the empty parks quickly. Of course, as a natural result, it contributes to the reduction of carbon emission rates and the formation of a healthy city due to the environmental effects in cities.",
      "park-6": "PRODUCTIVITY",
      "park-7":
        "ParkoMobil is an innovative technology that solves the parking management in Turkey. By registering the legal processes in parking lot management, it provides an increase in the collection rate of the inefficient parking lot business. Ensuring that customer requests are made contactless and online, and the increase in payment channels provides customer satisfaction. This ensures effective use of field management and workforce efficiency.",
      "park-8": "ParkoMobil Features",
      "park-9": "Plate Reading",
      "park-10":
        "Photographing license plates and vehicles with the camera of the mobile phone: Using OCR technology, the category and license plate of the vehicle are converted from the photo to text.",
      "park-11": "- Plate Reading (OCR)",
      "park-12": "- Vehicle Photography",
      "park-13": "- Mobile Proccess",
      "park-14": "- Categorization",
      "park-15": "New Communiqué Harmonization",
      "park-16":
        "According to the new communiqué in Turkey, an invoice will be issued to the plate for the first time. (COMMUNIQUÉ ON THE AMENDMENT OF THE GENERAL COMMUNIQUE OF THE TAX PROCEDURE LAW (ORDER NO: 509) (ORDER NO: 515)",
      "park-17": "Evidence and Documentation",
      "park-18":
        "It will have legal proof as GPS coordinate information and timestamp will be made. Since there is legal evidence in the cases, favorable evidence will be created.",
      "park-19": "- Timestamp",
      "park-20": "- Legal Evidence",
      "park-21": "Automatic Billing",
      "park-22":
        "It will be a new process as it will make it a legal document by cutting E-Archive and E-Invoice from the plate, and it will facilitate debt collection.",
      "park-23": "Parking Occupancy Rate",
      "park-24":
        "It will be possible to give estimated occupancy and vacancy rates for street edges by making estimations with data from the field and artificial intelligence algorithm without using sensors.",
      "park-25": "Collection Rate",
      "park-26": "It will facilitate payment and increase collection with customer interaction and payment system.",

      "mobility-1": "Deploy Quickly",
      "mobility-2":
        "Commission your projects in a short time with HEY Mobility Technologies. All you have to do is to provide your vehicle fleet. You don't need to allocate resources for software development or hardware. With the SAAS model, you pay for what you use. When you want to expand your fleet, new vehicles can be easily added to the system with its scalable structure.",
      "mobility-3": "Mobile App",
      "mobility-4": "Multi-Language Support",
      "mobility-5":
        "It has multiple language options such as Turkish, English, Russian and Arabic support. Easily adaptable to your desired language.",
      "mobility-6": "Rapid Adaptation and Release",
      "mobility-7": "We can publish your brand very quickly, in less than a month, on the IOS and Android markets.",
      "mobility-8": "Interface Design",
      "mobility-9": "Along with the standard interface design, we offer professional design in accordance with corporate colors.",
      "mobility-10": "Payment system Integration",
      "mobility-11": "Your credit card, prepaid card and debit card information are securely stored with payment system partners.",
      "mobility-12": "Panel Features",
      "mobility-13": "Location Tracking",
      "mobility-14": "With real-time location tracking, you can track the location of your vehicles on the map and filter by vehicle names.",
      "mobility-15":
        "The mobile application provides customers with features such as finding nearby vehicles on the map, renting and ending the rental, viewing the rental history.",
      "mobility-16": "Payment and Billing",
      "mobility-17":
        "When the rental is completed, an electronic invoice is created for each customer. Invoices can be viewed by customers through the mobile application and by users through the panel.",
      "mobility-18": "Alarm Tracking",
      "mobility-19": "You can see real-time alarm data from vehicles and intervene or use historical alarm queries.",
      "mobility-20": "Management Panel",
      "mobility-21": "Real-time vehicle data",
      "mobility-22": "User management screens",
      "mobility-23": "Driving and alarm history",
      "mobility-24": "Charging stations management",
      "mobility-25": "Ability to add different types of vehicles",
      "mobility-26": "Multi-region and support (country, city, district)",
      "mobility-27": "Usage and revenue reports",
      "mobility-28": "Software Features",
      "mobility-29": "Hardware independent software",
      "mobility-30": "Remote control of vehicles",
      "mobility-31": "Scooter, bike and electric vehicle management in one app",
      "mobility-32": "Suitable for charging stations management",
      "mobility-33": "Compatible with different types of vehicles and IOTs",
      "mobility-34": "Integrated with different payment systems",
      "mobility-35": "Possibility to use your own brand",
      "mobility-36": "Different user definitions for different roles",
      "mobility-37": "Multi-language support for different countries",
      "mobility-38": "User friendly interface",
      "mobility-39": "Authentication (optional)",
      "mobility-40": "In-app car navigation",
      "mobility-41": "Reservation system",

      "hey-1":
        "Hey Scooter is an electric vehicle concept developed for micro transportation. Our primary goal is to create a vehicle sharing model with a durable and efficient scooter and to reach a leading position in the local market. For personal use, it is to reach as many users as possible to experience our scooters.",
      "hey-2":
        "Our smart mobility solution is suitable for many business areas, from companies that want to offer a sustainable transportation solution to their employees, to universities that want to provide their students with access to an affordable means of transportation, or to investors who want to create a car sharing system.",
      "hey-3": "What We Offer",
      "hey-4":
        "Hey Scooter Smart Mobility is an integrated transportation solution that enables users to easily reach their desired destinations and reduces the time spent in traffic. The content of our mobility solution;",
      "hey-5": "- Scooter Fleet",
      "hey-6": "- Charging Stations",
      "hey-7": "- Smart Mobile App",
      "hey-8": "- Administration Panel",
      "hey-9": "- Development/update of maintenance, project and software",
      "hey-10": "Advantages of Car Sharing",
      "hey-11":
        "Car sharing is an attractive solution for first/last mile transportation. Electric Scooter rental is relatively inexpensive and this type of transportation allows users to travel even in crowded cities without worrying about traffic jams or excessive parking fees. Moreover, electric scooters are faster than walking, using a computer or using public transport.",
      "hey-12": "Electric scooter rental can be integrated into many organizations with these advantages.",
      "hey-13": "Scope of Application",
      "hey-14":
        "Hey Scooter micro mobility solution has different application areas. In the following application areas, projecting and solutions can be produced according to the needs.",
      "hey-15": "- Smart Cities",
      "hey-16": "- University Campuses",
      "hey-17": "- Hotels",
      "hey-18": "- Businesses",
      "hey-19": "- Ports",

      "custom-1": "Custom Software Service",
      "custom-2":
        "With special software, we can turn your business ideas into software for you. With our knowledge and experience that we have built over many years, it is very easy to implement what you have in mind.",
      "custom-3":
        "Software for various purposes, needed within your company, is prepared by us. It covers professional and end-to-end software for Web and Mobile platforms. For detailed information please",
      "custom-4": "contact.",

      "about-1": "History",
      "about-2":
        "Serim; It was established in 2009 in order to develop Web and Mobile software technologies that institutions need. It has been moved to Ulutek Technopark since 2014 to develop R&D and its own software. In a short time, it expanded its sales and marketing network and opened up to international markets by putting its overseas office into service. With its professional software applications and project management experience, it has always developed the best practices that will ensure the success of its customers. Our mission is to add value to our customers by providing the most suitable solutions for their needs and to meet their expectations in the best way possible. Our goal is; To be the leading software and service company that adds value in the national and international arena and makes our customers and employees smile.",
      "about-3": "Milestones",
      "about-4": "Serim Software Technologies was established.",
      "about-5": "Ms Dynamics CRM became a partner",
      "about-6": "Burulaş Budo Ticketing project was commissioned.",
      "about-7":
        "Serim R&D center was established in Ulutek Technopark Technology Development zone. Burulaş Aviation ticketing solution has been published.",
      "about-8": "Rent a Car cloud-based SaaS ticketing project was commissioned. Konya Science Center ticketing solution.",
      "about-9": "Abfgo cloud-based SaaS ticketing solution was commissioned.",
      "about-10": "First overseas office opened in Bangladesh",
      "about-11": "Mobile Passenger Control System (QR). Contract App (Contract Tracking System SaaS). Mobile Field Sales System",
      "about-12": "E-TWOW Turkey distributor and Codice representative.",
      "about-13": "Hey Scooter Sharing platform. ParkoMobil Parking Management System",
      "about-14": "Licance of Authorization",

      "contact-1": "Our Contact Information",
      "contact-2": "Submit",

      "news-1": "News"
    },
  };

  let userLang = navigator.language || navigator.userLanguage;
  if (localStorage.getItem("language") == null) {
    localStorage.setItem("language", "tr");
  }

  if (localStorage.getItem("language") != "tr") {
    let lang = localStorage.getItem("language");
    lang == "tr" ? $("#dropdownMenuButtonLang").text("TR") : $("#dropdownMenuButtonLang").text("EN");

    $("a,h1,h2,h3,h5,div,span,ul,button,label,p,li").each(function (index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  }

  //dil butonuna tıklanınca
  $(".dropdownMenuButtonLangItem").click(function () {
    localStorage.setItem("language", $(this).attr("name"));
    let lang = localStorage.getItem("language");
    lang == "tr" ? $("#dropdownMenuButtonLang").text("TR") : $("#dropdownMenuButtonLang").text("EN");

    $("a,h1,h2,h3,h5,div,span,ul,button,label,p,li").each(function (index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });
});
