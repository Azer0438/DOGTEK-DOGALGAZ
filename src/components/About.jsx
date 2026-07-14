import React from 'react';
import { motion } from 'framer-motion';
import { Award, ClipboardCheck, HardHat, ShieldCheck } from 'lucide-react';
import { siteConfig, stats } from '@/lib/siteData';

const values = [
  {
    icon: ShieldCheck,
    title: 'Güvenlik Önceliği',
    description:
      'Gaz hattı, cihaz bağlantısı ve kaçak kontrolü gibi kritik adımlarda teknik şartnameye uygun, kontrollü uygulama yaparız.',
  },
  {
    icon: ClipboardCheck,
    title: 'Resmi Süreç Takibi',
    description:
      'Aksagaz proje çizimi, başvuru, revizyon ve onay aşamalarını müşterinin zaman kaybetmeyeceği şekilde takip ederiz.',
  },
  {
    icon: HardHat,
    title: 'Saha Disiplini',
    description:
      'Keşiften teslimata kadar iş planı, malzeme seçimi ve uygulama kalitesini aynı ekip sorumluluğunda yönetiriz.',
  },
];

const About = () => {
  return (
    <section className="bg-white py-16 transition-colors duration-300 dark:bg-slate-900 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            <img
              src={siteConfig.teamImageUrl}
              alt="Doğtek Doğalgaz mühendislik ekibi"
              className="aspect-[4/3] w-full object-cover shadow-xl"
            />
            <div className="absolute bottom-0 left-0 max-w-xs bg-blue-950 p-5 text-white shadow-xl">
              <div className="flex items-center gap-2 text-sm font-bold text-orange-300">
                <Award size={18} />
                Yetkili mühendislik yaklaşımı
              </div>
              <p className="mt-3 text-sm leading-6 text-blue-50">
                Kayseri’de doğalgaz ve ısıtma çözümlerini proje, uygulama ve kontrol bütünlüğüyle ele alıyoruz.
              </p>
            </div>
          </motion.div>

          <div>
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">Hakkımızda</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
              Kurumsal çizgisi net, sahada pratik bir doğalgaz ekibi.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
              {siteConfig.shortName}, Kayseri’de konut ve ticari alanların doğalgaz ihtiyaçlarında güvenli,
              verimli ve sürdürülebilir çözümler üretir. Amacımız yalnızca montaj yapmak değil, müşterinin tüm
              süreci anlaşılır ve kontrollü şekilde tamamlamasını sağlamaktır.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="border border-slate-200 p-5 dark:border-white/10">
                  <div className="text-2xl font-bold text-blue-900 dark:text-blue-300">{stat.value}</div>
                  <div className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {values.map((value, index) => (
            <motion.article
              key={value.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-slate-950"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-orange-500 text-white">
                <value.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">{value.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{value.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
