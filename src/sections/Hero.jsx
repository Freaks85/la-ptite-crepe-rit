import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone } from 'lucide-react';
import { restaurantInfo } from '../config/restaurant';

const Hero = () => {
  const [showCallInfo, setShowCallInfo] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    if (!showCallInfo) return;
    const timer = setTimeout(() => setShowCallInfo(false), 4500);
    return () => clearTimeout(timer);
  }, [showCallInfo]);

  // Fermer la popup si on clique en dehors
  useEffect(() => {
    if (!showCallInfo) return;

    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowCallInfo(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showCallInfo]);

  const handleCallClick = (e) => {
    e.preventDefault();
    setShowCallInfo(true);
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-enter"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-bg.jpg')`,
        }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-wood-dark/70 via-wood-dark/50 to-wood-dark/80" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-cream/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-sage/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo Image */}
        <div className="mb-8 logo-enter">
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto bg-cream-light/95 rounded-full p-4 shadow-2xl">
            <img
              src="/logo.png"
              alt="La P'tite Crêpe Rit - Pornic"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Slogan */}
        <p className="text-xl sm:text-2xl md:text-3xl text-cream-warm font-display mb-6 text-shadow text-enter stagger-2">
          Le goût de la Bretagne dans votre assiette
        </p>

        {/* Subtitle */}
        <p className="text-cream/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light text-enter stagger-3">
          Crêpes artisanales, galettes au sarrasin et cidre breton
          dans une ambiance chaleureuse et conviviale
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <div className="relative inline-flex flex-col items-center">
            <a
              href={`tel:${restaurantInfo.phone.link}`}
              onClick={handleCallClick}
              className="group relative inline-flex items-center justify-center gap-3 text-lg px-10 py-5 overflow-hidden rounded-full font-medium transition-all duration-500 btn-enter stagger-4"
            >
              {/* Fond dégradé sage premium */}
              <div className="absolute inset-0 bg-gradient-to-r from-sage-dark via-sage to-sage-light transition-all duration-500 group-hover:from-sage group-hover:via-sage-light group-hover:to-sage" />
              {/* Effet brillant au survol */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              {/* Bordure subtile */}
              <div className="absolute inset-0 rounded-full ring-1 ring-white/20 ring-inset" />
              {/* Ombre chaude */}
              <div className="absolute inset-0 rounded-full shadow-lg shadow-sage/40 group-hover:shadow-xl group-hover:shadow-sage/50 transition-shadow duration-300" />
              {/* Contenu */}
              <Phone className="relative z-10 w-5 h-5 text-white" />
              <span className="relative z-10 text-white font-semibold tracking-wide">Réserver par téléphone</span>
            </a>

            {showCallInfo && (
              <div
                ref={popupRef}
                className="absolute top-full mt-3 w-72 bg-wood-dark/95 backdrop-blur-sm text-cream text-sm rounded-2xl shadow-2xl border border-sage/40 p-4 text-left animate-fade-in-up z-[100] cursor-pointer"
                onClick={() => setShowCallInfo(false)}
              >
                <p className="leading-relaxed">
                  Les réservations par téléphone sont prises de 10h à 12h et de 18h à 19h.
                </p>
                <a
                  href={`tel:${restaurantInfo.phone.link}`}
                  className="inline-flex items-center gap-2 text-sage-light hover:text-white font-semibold mt-3 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Phone className="w-4 h-4" />
                  <span>Appeler maintenant</span>
                </a>
              </div>
            )}
          </div>

          <Link
            to="/carte"
            className="group relative inline-flex items-center justify-center gap-2 text-lg px-10 py-5 overflow-hidden rounded-full font-medium transition-all duration-500 btn-enter stagger-5"
          >
            {/* Fond crème élégant */}
            <div className="absolute inset-0 bg-gradient-to-r from-cream-light via-cream to-cream-warm transition-all duration-500" />
            {/* Effet brillant au survol */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            {/* Bordure subtile */}
            <div className="absolute inset-0 rounded-full ring-1 ring-wood/20 ring-inset group-hover:ring-sage/40 transition-all duration-300" />
            {/* Ombre élégante */}
            <div className="absolute inset-0 rounded-full shadow-lg shadow-wood/20 group-hover:shadow-xl group-hover:shadow-wood/30 transition-shadow duration-300" />
            {/* Contenu */}
            <span className="relative z-10 text-wood-dark font-semibold tracking-wide group-hover:text-sage-dark transition-colors duration-300">Découvrir la carte</span>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-cream/60" />
      </div>

      {/* Decorative wave bottom border */}
      <div className="absolute -bottom-px left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full h-auto fill-cream block" preserveAspectRatio="none">
          <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
