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

export const services = [
  {
    title: 'Doğalgaz Tesisatı',
    description: 'Konut ve iş yerleri için standartlara uygun projelendirme, tesisat uygulaması ve devreye alma süreçleri.',
  },
  {
    title: 'Aksagaz Proje Çizimi',
    description: 'Yetkili mühendislik kadrosuyla başvuru, proje çizimi, revizyon ve onay takibinin uçtan uca yönetimi.',
  },
  {
    title: 'Doğalgaz Kaçak Kontrolü',
    description: 'Gaz kokusu ve kaçak şüphesinde profesyonel ekipmanlarla hızlı tespit, güvenli müdahale ve onarım.',
  },
  {
    title: 'Kaskat Kazan Sistemleri',
    description: 'Merkezi ısıtma ihtiyacı olan yapılarda yüksek verimli, yedekli ve otomasyon uyumlu kazan çözümleri.',
  },
  {
    title: 'Petek Temizliği',
    description: 'Isı verimini artırmaya yardımcı profesyonel makine ve kimyasal destekli tesisat temizliği.',
  },
  {
    title: 'Kat Kaloriferi Kurulumu',
    description: 'Bireysel ve merkezi sistemler için doğru kapasite hesabı, montaj ve kullanım danışmanlığı.',
  },
  {
    title: 'Yerden Isıtma Sistemleri',
    description: 'Homojen ısı dağılımı sağlayan, konforlu ve mimari estetiği koruyan modern ısıtma uygulamaları.',
  },
  {
    title: 'Isı Pompası Sistemleri',
    description: 'Dört mevsim konfor hedefleyen, enerji verimliliği yüksek ısı pompası keşif ve uygulama hizmetleri.',
  },
];

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
