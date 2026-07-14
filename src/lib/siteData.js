export const siteConfig = {
  name: 'Doğtek Doğalgaz Mühendislik',
  shortName: 'Doğtek Doğalgaz',
  domain: 'https://dogtekdogalgazmuhendislik.com',
  tagline: 'Aksa Gaz Yetkili Firma',
  location: 'Kayseri',
  phoneRaw: '905366449642',
  phoneDisplay: '+90 536 644 96 42',
  email: 'destek@dogtekdogalgazmuhendislik.com',
  address: 'Kılıçarslan Mahallesi Molla Sokak No:7/A, Kayseri',
  addressLines: ['Kılıçarslan Mahallesi Molla Sokak No:7/A', 'Kayseri, Türkiye'],
  mapLink: 'https://maps.app.goo.gl/CxB2dCb6GUEzpCqAA',
  whatsappMessage: 'Merhaba, Doğtek Doğalgaz hizmetleri hakkında bilgi almak istiyorum.',
  logoUrl: 'https://horizons-cdn.hostinger.com/b5020123-4ca5-4633-851d-2a1e8525cabf/gemini_generated_image_tnou9gtnou9gtnou-MDXUc.png',
  heroImageUrl: 'https://horizons-cdn.hostinger.com/b5020123-4ca5-4633-851d-2a1e8525cabf/gemini_generated_image_ty8fgjty8fgjty8f-dRArK.png',
  aksaLogoUrl: 'https://horizons-cdn.hostinger.com/b5020123-4ca5-4633-851d-2a1e8525cabf/aksa_dogalgaz-4Gra1.jpg',
  teamImageUrl: 'https://horizons-cdn.hostinger.com/b5020123-4ca5-4633-851d-2a1e8525cabf/ekran-gapra1-4nta1-4sa1-4-2026-01-19-010534-89xPn.png',
};

export const getWhatsappUrl = (message = siteConfig.whatsappMessage) =>
  `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(message)}`;

export const stats = [
  { value: '25+', label: 'Yıllık saha deneyimi' },
  { value: '750+', label: 'Tamamlanan proje' },
  { value: '2500+', label: 'Memnun müşteri' },
  { value: 'Kayseri', label: 'Yerel servis ağı' },
];

export const serviceAreas = [
  'Melikgazi',
  'Kocasinan',
  'Talas',
  'Hacılar',
  'İncesu',
  'Kayseri Merkez',
];

export const services = [
  {
    slug: 'dogalgaz-tesisati',
    title: 'Doğalgaz Tesisatı',
    shortTitle: 'Doğalgaz Tesisatı',
    path: '/hizmetler/dogalgaz-tesisati',
    description:
      'Konut ve iş yerleri için standartlara uygun projelendirme, tesisat uygulaması ve devreye alma süreçleri.',
    seoTitle: 'Kayseri Doğalgaz Tesisatı | Doğtek Doğalgaz Mühendislik',
    metaDescription:
      'Kayseri doğalgaz tesisatı için keşif, proje, montaj ve onay sürecini yetkili mühendislik disipliniyle yöneten Doğtek Doğalgaz Mühendislik.',
    heroTitle: 'Kayseri doğalgaz tesisatı için güvenli ve planlı uygulama.',
    lead:
      'Yeni abonelik, tesisat yenileme veya daire içi hat ihtiyaçlarında süreci keşiften onaya kadar tek ekip sorumluluğunda yönetiyoruz.',
    adIntent: 'Doğalgaz tesisatı yaptırmak isteyen kullanıcılar için ana teklif sayfası.',
    keywords: ['kayseri doğalgaz tesisatı', 'doğalgaz tesisatı kayseri', 'doğalgaz montaj kayseri'],
    benefits: [
      'Yerinde keşif ve ihtiyaca uygun hat planlaması',
      'Güvenlik standartlarına uygun malzeme ve uygulama',
      'Proje, montaj ve kontrol adımlarının birlikte yürütülmesi',
      'Konut, apartman ve ticari alanlara uygun çözüm',
    ],
    process: [
      'Keşif ve tesisat güzergahının belirlenmesi',
      'Proje ve malzeme planının hazırlanması',
      'Montaj, bağlantı ve teknik kontroller',
      'Onay süreci ve kullanım bilgilendirmesi',
    ],
    faq: [
      {
        question: 'Doğalgaz tesisatı için önce keşif gerekir mi?',
        answer:
          'Evet. Güzergah, cihaz konumu, kapasite ve güvenlik koşulları yerinde görülmeden sağlıklı fiyat ve uygulama planı çıkarılamaz.',
      },
      {
        question: 'Tesisat süreci proje dahil ilerler mi?',
        answer:
          'İhtiyaca göre proje çizimi, başvuru takibi, montaj ve kontrol adımları aynı hizmet planı içinde yönetilebilir.',
      },
    ],
  },
  {
    slug: 'aksagaz-proje-cizimi',
    title: 'Aksagaz Yetkili Proje Çizimi',
    shortTitle: 'Aksagaz Proje Çizimi',
    path: '/hizmetler/aksagaz-proje-cizimi',
    description:
      'Yetkili mühendislik kadrosuyla başvuru, proje çizimi, revizyon ve onay takibinin uçtan uca yönetimi.',
    seoTitle: 'Kayseri Aksagaz Proje Çizimi ve Takibi | Doğtek',
    metaDescription:
      'Kayseri Aksagaz proje çizimi, doğalgaz proje onayı, başvuru ve revizyon takibi için Doğtek Doğalgaz Mühendislik ile iletişime geçin.',
    heroTitle: 'Aksagaz proje çizimi ve onay takibini sizin adınıza yönetiyoruz.',
    lead:
      'Doğalgaz projesinde teknik şartnameye uygun çizim, resmi başvuru ve revizyon takibi zaman kaybını azaltır.',
    adIntent: 'Proje çizimi veya onay süreci arayan kullanıcılara doğrudan çözüm sayfası.',
    keywords: ['aksagaz proje çizimi', 'kayseri doğalgaz proje', 'doğalgaz proje onayı kayseri'],
    benefits: [
      'Yetkili firma yaklaşımıyla teknik şartname uyumu',
      'Başvuru ve revizyon süreçlerinde düzenli takip',
      'Daire, iş yeri ve merkezi sistem projelerine uygun çizim',
      'Müşteriye süreç boyunca anlaşılır bilgilendirme',
    ],
    process: [
      'Mevcut tesisat ve ihtiyaç bilgisinin alınması',
      'Teknik çizim ve proje hazırlığı',
      'Aksagaz başvuru ve takip süreci',
      'Revizyon varsa düzeltilmesi ve onay kontrolü',
    ],
    faq: [
      {
        question: 'Aksagaz proje çizimi ne zaman gerekir?',
        answer:
          'Yeni doğalgaz kullanımı, tesisat değişikliği, cihaz değişimi veya belirli tadilat süreçlerinde proje çizimi ve onay gerekebilir.',
      },
      {
        question: 'Sadece proje çizimi için destek alabilir miyim?',
        answer:
          'Evet. Uygulama dahil veya yalnızca proje çizimi ve takip desteği için iletişime geçebilirsiniz.',
      },
    ],
  },
  {
    slug: 'dogalgaz-kacak-kontrolu',
    title: 'Doğalgaz Kaçak Kontrolü',
    shortTitle: 'Kaçak Kontrolü',
    path: '/hizmetler/dogalgaz-kacak-kontrolu',
    description:
      'Gaz kokusu ve kaçak şüphesinde profesyonel ekipmanlarla hızlı tespit, güvenli müdahale ve onarım.',
    seoTitle: 'Kayseri Doğalgaz Kaçak Kontrolü ve Onarımı | Doğtek',
    metaDescription:
      'Kayseri doğalgaz kaçak kontrolü, gaz kaçağı tespiti ve güvenli onarım hizmeti için Doğtek Doğalgaz Mühendislik ekibiyle görüşün.',
    heroTitle: 'Gaz kokusu veya kaçak şüphesinde hızlı ve güvenli müdahale.',
    lead:
      'Doğalgaz kaçağı ihmal edilmemesi gereken ciddi bir risktir. Şüpheli durumda ortamı havalandırın, cihazları kapatın ve uzman destek alın.',
    adIntent: 'Acil niyetli aramalar için telefon ve WhatsApp dönüşüm odaklı sayfa.',
    keywords: ['kayseri doğalgaz kaçak kontrolü', 'doğalgaz kaçağı kayseri', 'gaz kaçağı tespiti'],
    benefits: [
      'Kaçak şüphesinde hızlı ön görüşme ve yönlendirme',
      'Doğru ekipmanla tesisat kontrolü',
      'Riskli bağlantı ve hatların tespit edilmesi',
      'Onarım sonrası güvenlik odaklı kontrol',
    ],
    process: [
      'Ön güvenlik bilgisinin verilmesi',
      'Tesisat ve bağlantı noktalarının kontrolü',
      'Kaçak kaynağının tespiti',
      'Onarım ve son güvenlik kontrolü',
    ],
    faq: [
      {
        question: 'Gaz kokusu alırsam ne yapmalıyım?',
        answer:
          'Pencereleri açın, vanayı kapatın, elektrik düğmelerine dokunmayın, kıvılcım oluşturabilecek işlemlerden kaçının ve uzman destek alın.',
      },
      {
        question: 'Kaçak kontrolü sonrası onarım yapılır mı?',
        answer:
          'Tespit edilen sorunun kapsamına göre uygun onarım planlanır ve güvenlik kontrolüyle süreç tamamlanır.',
      },
    ],
  },
  {
    slug: 'petek-temizligi',
    title: 'Petek Temizliği',
    shortTitle: 'Petek Temizliği',
    path: '/hizmetler/petek-temizligi',
    description:
      'Isı verimini artırmaya yardımcı profesyonel makine ve kimyasal destekli tesisat temizliği.',
    seoTitle: 'Kayseri Petek Temizliği | Kombi ve Tesisat Verimi',
    metaDescription:
      'Kayseri petek temizliği hizmetiyle ısı verimini artırmaya yardımcı profesyonel tesisat temizliği için Doğtek Doğalgaz ile iletişime geçin.',
    heroTitle: 'Petekleriniz az ısınıyorsa tesisat temizliği verimi artırabilir.',
    lead:
      'Zamanla tesisatta oluşan tortu ve kirlenme, ısı dağılımını düşürebilir. Profesyonel temizlik konforu ve verimi destekler.',
    adIntent: 'Kış dönemi yüksek dönüşüm potansiyelli bakım ve temizlik sayfası.',
    keywords: ['kayseri petek temizliği', 'petek temizleme kayseri', 'tesisat temizliği kayseri'],
    benefits: [
      'Peteklerde daha dengeli ısı dağılımına yardımcı olur',
      'Tesisat içi tortu ve kirlenmenin azaltılması hedeflenir',
      'Kombi ve ısıtma sistemi performansını destekler',
      'Kullanım alışkanlıklarına göre bakım önerisi verilir',
    ],
    process: [
      'Isınma problemi ve tesisat durumunun dinlenmesi',
      'Makine destekli temizlik hazırlığı',
      'Petek ve tesisat hattı temizliği',
      'Sistem kontrolü ve kullanım tavsiyesi',
    ],
    faq: [
      {
        question: 'Petek temizliği ne zaman yapılmalı?',
        answer:
          'Peteklerin altı soğuk kalıyorsa, bazı odalar geç ısınıyorsa veya tesisat uzun süredir temizlenmediyse kontrol önerilir.',
      },
      {
        question: 'Petek temizliği faturayı düşürür mü?',
        answer:
          'Doğrudan garanti verilemez; ancak daha sağlıklı ısı transferi sağlayarak sistemin verimli çalışmasına yardımcı olabilir.',
      },
    ],
  },
  {
    slug: 'kaskat-kazan-sistemleri',
    title: 'Kaskat Kazan Sistemleri',
    shortTitle: 'Kaskat Kazan',
    path: '/hizmetler/kaskat-kazan-sistemleri',
    description:
      'Merkezi ısıtma ihtiyacı olan yapılarda yüksek verimli, yedekli ve otomasyon uyumlu kazan çözümleri.',
    seoTitle: 'Kayseri Kaskat Kazan Sistemleri | Merkezi Isıtma',
    metaDescription:
      'Apartman, site ve ticari yapılarda kaskat kazan sistemi keşif, projelendirme ve kurulum hizmeti için Doğtek Doğalgaz Kayseri.',
    heroTitle: 'Merkezi ısıtma için verimli ve yedekli kaskat kazan çözümleri.',
    lead:
      'Kaskat kazan sistemleri, değişken ısı ihtiyacına göre çalışan modüler yapısıyla apartman ve ticari binalar için güçlü bir seçenektir.',
    adIntent: 'Apartman/site yöneticileri ve ticari yapı sahipleri için yüksek değerli teklif sayfası.',
    keywords: ['kayseri kaskat kazan', 'kaskat kazan sistemi', 'merkezi ısıtma kayseri'],
    benefits: [
      'İhtiyaca göre kapasite hesabı ve cihaz seçimi',
      'Yedekli çalışma mantığıyla işletme sürekliliği',
      'Otomasyon ve kontrol sistemiyle uyumlu planlama',
      'Apartman, site ve ticari yapılara uygun çözüm',
    ],
    process: [
      'Yapı ve ısı ihtiyacının analiz edilmesi',
      'Kapasite ve cihaz planının çıkarılması',
      'Proje ve tesisat uygulaması',
      'Devreye alma ve kullanım bilgilendirmesi',
    ],
    faq: [
      {
        question: 'Kaskat kazan sistemi kimler için uygundur?',
        answer:
          'Apartman, site, iş merkezi ve yüksek ısı ihtiyacı olan ticari yapılarda değerlendirilebilir.',
      },
      {
        question: 'Kapasite hesabı yapılmadan fiyat verilebilir mi?',
        answer:
          'Sağlıklı teklif için yapı büyüklüğü, kullanım tipi, tesisat durumu ve ihtiyaç kapasitesi analiz edilmelidir.',
      },
    ],
  },
  {
    slug: 'kat-kaloriferi-kurulumu',
    title: 'Kat Kaloriferi Kurulumu',
    shortTitle: 'Kat Kaloriferi',
    path: '/hizmetler/kat-kaloriferi-kurulumu',
    description:
      'Bireysel ve merkezi sistemler için doğru kapasite hesabı, montaj ve kullanım danışmanlığı.',
    seoTitle: 'Kayseri Kat Kaloriferi Kurulumu | Doğtek Doğalgaz',
    metaDescription:
      'Kayseri kat kaloriferi kurulumu, kapasite hesabı, montaj ve tesisat planlaması için Doğtek Doğalgaz Mühendislik hizmetleri.',
    heroTitle: 'Kat kaloriferi kurulumunda doğru kapasite ve temiz uygulama.',
    lead:
      'Isıtma sisteminde cihaz seçimi kadar tesisat planı, kapasite hesabı ve uygulama kalitesi de uzun vadeli konforu belirler.',
    adIntent: 'Kurulum ihtiyacı olan konut ve küçük ticari işletmeler için teklif sayfası.',
    keywords: ['kayseri kat kaloriferi', 'kat kaloriferi kurulumu kayseri', 'kalorifer tesisatı kayseri'],
    benefits: [
      'Mekana uygun kapasite ve cihaz önerisi',
      'Tesisat güzergahı ve radyatör planının yapılması',
      'Montaj sonrası sistem kontrolü',
      'Kullanım ve bakım konusunda bilgilendirme',
    ],
    process: [
      'Keşif ve ısı ihtiyacının belirlenmesi',
      'Cihaz, radyatör ve tesisat planı',
      'Kurulum ve bağlantı işlemleri',
      'Test, devreye alma ve teslim',
    ],
    faq: [
      {
        question: 'Kat kaloriferi kurulumu kaç gün sürer?',
        answer:
          'Süre mekanın büyüklüğüne, tesisat durumuna ve seçilen sisteme göre değişir. Keşif sonrası daha net plan verilir.',
      },
      {
        question: 'Eski tesisat yenilenebilir mi?',
        answer:
          'Evet. Mevcut tesisat incelenir, ihtiyaç varsa yenileme veya iyileştirme planı çıkarılır.',
      },
    ],
  },
  {
    slug: 'yerden-isitma-sistemleri',
    title: 'Yerden Isıtma Sistemleri',
    shortTitle: 'Yerden Isıtma',
    path: '/hizmetler/yerden-isitma-sistemleri',
    description:
      'Homojen ısı dağılımı sağlayan, konforlu ve mimari estetiği koruyan modern ısıtma uygulamaları.',
    seoTitle: 'Kayseri Yerden Isıtma Sistemleri | Proje ve Uygulama',
    metaDescription:
      'Kayseri yerden ısıtma sistemi kurulumu, proje planlama ve uygulama hizmetleri için Doğtek Doğalgaz Mühendislik ile görüşün.',
    heroTitle: 'Yerden ısıtma ile homojen, konforlu ve modern ısınma.',
    lead:
      'Yeni yapı ve tadilat projelerinde doğru planlanan yerden ısıtma sistemi, yaşam alanlarında dengeli sıcaklık ve estetik avantaj sağlar.',
    adIntent: 'Yeni yapı, tadilat ve konfor odaklı ısıtma aramaları için landing sayfası.',
    keywords: ['kayseri yerden ısıtma', 'yerden ısıtma sistemi kayseri', 'zeminden ısıtma kayseri'],
    benefits: [
      'Mekan içinde daha dengeli ısı dağılımı',
      'Radyatör görünümü olmadan temiz iç mekan',
      'Yeni yapı ve tadilat projelerine uygun planlama',
      'Isı kaybı ve kullanım alışkanlıklarına göre sistem önerisi',
    ],
    process: [
      'Mimari plan ve kullanım ihtiyacının incelenmesi',
      'Boru hatları ve kolektör planı',
      'Uygulama ve basınç testleri',
      'Devreye alma ve kullanım ayarı',
    ],
    faq: [
      {
        question: 'Yerden ısıtma her eve uygulanır mı?',
        answer:
          'Yeni yapılarda daha uygundur; tadilatlarda zemin durumu, yükseklik ve tesisat koşulları değerlendirilmelidir.',
      },
      {
        question: 'Yerden ısıtma geç mi ısınır?',
        answer:
          'Sistem daha dengeli ve kademeli çalışır. Doğru kullanım ayarlarıyla konforlu bir ısı dengesi sağlanabilir.',
      },
    ],
  },
  {
    slug: 'isi-pompasi-sistemleri',
    title: 'Isı Pompası Sistemleri',
    shortTitle: 'Isı Pompası',
    path: '/hizmetler/isi-pompasi-sistemleri',
    description:
      'Dört mevsim konfor hedefleyen, enerji verimliliği yüksek ısı pompası keşif ve uygulama hizmetleri.',
    seoTitle: 'Kayseri Isı Pompası Sistemleri | Keşif ve Kurulum',
    metaDescription:
      'Kayseri ısı pompası sistemi keşif, cihaz seçimi ve kurulum planlaması için Doğtek Doğalgaz Mühendislik hizmetleri.',
    heroTitle: 'Isı pompası ile dört mevsim verimli iklimlendirme çözümü.',
    lead:
      'Isı pompası sistemleri doğru seçildiğinde ısıtma, soğutma ve kullanım konforunu tek sistem üzerinden destekleyebilir.',
    adIntent: 'Enerji verimli sistem arayan daha bilinçli kullanıcılar için bilgi ve teklif sayfası.',
    keywords: ['kayseri ısı pompası', 'ısı pompası kurulumu kayseri', 'ısı pompası sistemleri'],
    benefits: [
      'Mekana ve kullanım ihtiyacına göre cihaz seçimi',
      'Isıtma ve soğutma ihtiyacını birlikte değerlendirme',
      'Enerji verimliliği odaklı sistem planı',
      'Uygulama sonrası kullanım danışmanlığı',
    ],
    process: [
      'Yapı, izolasyon ve kullanım ihtiyacının analizi',
      'Cihaz kapasitesi ve sistem planı',
      'Kurulum ve bağlantı işlemleri',
      'Devreye alma ve verimli kullanım ayarları',
    ],
    faq: [
      {
        question: 'Isı pompası her yapı için uygun mudur?',
        answer:
          'Uygunluk; izolasyon, metrekare, mevcut tesisat, kullanım hedefi ve iklim koşullarına göre keşif sonrası değerlendirilir.',
      },
      {
        question: 'Isı pompası seçimi nasıl yapılır?',
        answer:
          'Kapasite hesabı, kullanım amacı, yapı özellikleri ve mevcut tesisat birlikte ele alınarak doğru cihaz önerilir.',
      },
    ],
  },
];

export const featuredServiceSlugs = [
  'dogalgaz-tesisati',
  'aksagaz-proje-cizimi',
  'dogalgaz-kacak-kontrolu',
  'petek-temizligi',
  'kaskat-kazan-sistemleri',
  'yerden-isitma-sistemleri',
];

export const getServiceBySlug = (slug) => services.find((service) => service.slug === slug);

export const getRelatedServices = (currentSlug, limit = 3) =>
  services.filter((service) => service.slug !== currentSlug).slice(0, limit);

export const partners = [
  {
    name: 'Vaillant',
    logo: 'https://www.vaillant.gen.tr/image/cache/catalog/vaillantlogo-300x300.png',
  },
  {
    name: 'Baymak',
    logo: 'https://surdurulebilirlikadimlari.org/wp-content/uploads/2023/06/Baymak-Logo.png',
  },
  {
    name: 'Bosch',
    logo: 'https://www.marmarapark.com/fileadmin/user_upload/GLOBAL/brand_stores/logos/Bosch.png',
  },
  {
    name: 'Viessmann',
    logo: 'https://www.senkronmutfak.com/wp-content/uploads/2019/01/viesmaan.jpg',
  },
];
