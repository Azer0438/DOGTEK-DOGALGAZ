import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, CheckCircle2 } from 'lucide-react';
import { workImages } from '@/lib/siteData';

const WorkGallery = () => {
  const featuredImages = workImages;

  return (
    <section className="bg-slate-50 py-16 transition-colors duration-300 dark:bg-slate-950 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-orange-500">
              <Camera size={18} />
              Uygulama Görselleri
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
              Kayseri’de sahadan gerçek doğalgaz ve ısıtma işleri.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
            <p>
              Keşif, proje, montaj ve ısıtma uygulamalarında sahadan seçilmiş gerçek iş fotoğraflarıyla hizmet
              yaklaşımımızı daha net görebilirsiniz.
            </p>
            <div className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 sm:grid-cols-2">
              {['Yerden ısıtma', 'Kaskat kazan', 'Kombi bağlantısı', 'Dış tesisat'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-orange-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredImages.map((image) => (
            <figure
              key={image.src}
              className="group overflow-hidden border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl dark:border-white/10 dark:bg-slate-900"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-5">
                <h3 className="text-lg font-bold text-slate-950 dark:text-white">{image.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{image.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/kayseri-dogalgaz-hizmetleri"
            className="inline-flex items-center gap-2 rounded-md bg-blue-900 px-5 py-3 font-bold text-white transition hover:bg-orange-600"
          >
            Kayseri hizmet bölgelerini incele
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkGallery;
