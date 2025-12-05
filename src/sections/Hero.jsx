import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-enter"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/restaurant.jpg')`,
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/reservation"
            className="inline-flex items-center justify-center text-lg px-8 py-4 bg-sage text-white rounded-lg font-medium hover:bg-sage-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 btn-enter stagger-4"
          >
            Réserver une table
          </Link>
          <Link
            to="/carte"
            className="inline-flex items-center justify-center text-lg px-8 py-4 bg-wood text-white rounded-lg font-medium hover:bg-wood-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 btn-enter stagger-5"
          >
            Voir la carte
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-cream/60" />
      </div>

      {/* Decorative wave bottom border */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full h-auto fill-cream" preserveAspectRatio="none">
          <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
