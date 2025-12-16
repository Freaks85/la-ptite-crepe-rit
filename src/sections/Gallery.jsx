import { Section } from '../components';
import { Camera } from 'lucide-react';
import { useScrollReveal, useStaggeredReveal } from '../hooks/useScrollReveal';

const Gallery = () => {
  const [titleRef, titleVisible] = useScrollReveal({ threshold: 0.2 });
  const [galleryRef, galleryVisible] = useStaggeredReveal(8, 100);

  const photos = [
    { src: '/salle-pierre-2.jpg', alt: 'Salle aux pierres apparentes', size: 'large' },
    { src: '/salle-longue.jpg', alt: 'Salle avec banquette verte', size: 'medium' },
    { src: '/crepe-sucree.jpg', alt: 'Crêpe sucrée au caramel', size: 'medium' },
    { src: '/bar.jpg', alt: 'Notre bar', size: 'medium' },
    { src: '/galette.jpg', alt: 'Galette au sarrasin', size: 'medium' },
    { src: '/enseigne-neon.jpg', alt: 'Enseigne La P\'tite Crêpe Rit', size: 'large' },
    { src: '/salle-complete.jpg', alt: 'Vue d\'ensemble du restaurant', size: 'medium' },
    { src: '/table-intime.jpg', alt: 'Table intimiste', size: 'medium' },
  ];

  return (
    <Section id="galerie" bgColor="bg-cream-warm" className="!pb-24" waveColor="fill-cream">
      {/* Section Title */}
      <div
        ref={titleRef}
        className={`text-center mb-12 reveal-up ${titleVisible ? 'revealed' : ''}`}
      >
        <h2 className="section-title">Notre Univers</h2>
        <div className="flex items-center justify-center gap-3 mt-4">
          <svg viewBox="0 0 120 20" className="w-24 h-5 text-sage" preserveAspectRatio="none">
            <path d="M0,10 Q30,0 60,10 Q90,20 120,10" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
          <Camera className="w-5 h-5 text-sage" />
          <svg viewBox="0 0 120 20" className="w-24 h-5 text-sage" preserveAspectRatio="none">
            <path d="M0,10 Q30,0 60,10 Q90,20 120,10" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <p className="section-subtitle mt-4">
          Découvrez l'ambiance chaleureuse de La P'tite Crêpe Rit
        </p>
      </div>

      {/* Gallery Grid */}
      <div ref={galleryRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`
              relative overflow-hidden rounded-xl shadow-lg group cursor-pointer
              ${photo.size === 'large' ? 'col-span-2 row-span-2' : ''}
              reveal-scale ${galleryVisible.includes(index) ? 'revealed' : ''}
            `}
          >
            <div className={`${photo.size === 'large' ? 'aspect-square' : 'aspect-square'}`}>
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-cream text-sm font-medium">{photo.alt}</p>
            </div>
          </div>
        ))}
      </div>

    </Section>
  );
};

export default Gallery;
