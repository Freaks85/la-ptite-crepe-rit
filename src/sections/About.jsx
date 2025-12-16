import { Section } from '../components';
import { Wheat, Heart, MapPin, Leaf, Sun, UtensilsCrossed } from 'lucide-react';
import { useScrollReveal, useStaggeredReveal } from '../hooks/useScrollReveal';

const About = () => {
  const [titleRef, titleVisible] = useScrollReveal({ threshold: 0.2 });
  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.1 });
  const [imageRef, imageVisible] = useScrollReveal({ threshold: 0.2 });
  const [featuresRef, featuresVisible] = useStaggeredReveal(3, 150);

  const features = [
    {
      icon: Wheat,
      title: 'Produits Locaux',
      description: 'Des ingrédients frais sélectionnés auprès de nos producteurs locaux pour une qualité irréprochable.',
    },
    {
      icon: UtensilsCrossed,
      title: 'Fait à la Demande',
      description: 'Chaque galette et crêpe est préparée minute, sous vos yeux, pour une fraîcheur incomparable.',
    },
    {
      icon: Sun,
      title: 'Terrasse & Jardin',
      description: 'Profitez de notre jardin et de notre salle aux pierres apparentes pour un moment hors du temps.',
    },
  ];

  return (
    <Section id="a-propos" bgColor="bg-cream" className="!pb-24" waveColor="fill-cream-warm">
      {/* Section Title */}
      <div
        ref={titleRef}
        className={`text-center mb-16 reveal-up ${titleVisible ? 'revealed' : ''}`}
      >
        <h2 className="section-title">Notre Crêperie</h2>
        <div className="flex items-center justify-center gap-3 mt-4">
          <svg viewBox="0 0 120 20" className="w-24 h-5 text-sage" preserveAspectRatio="none">
            <path d="M0,10 Q30,0 60,10 Q90,20 120,10" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
          <Leaf className="w-5 h-5 text-sage" />
          <svg viewBox="0 0 120 20" className="w-24 h-5 text-sage" preserveAspectRatio="none">
            <path d="M0,10 Q30,0 60,10 Q90,20 120,10" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Main Content - Two columns */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
        {/* Text Column */}
        <div
          ref={contentRef}
          className={`order-2 lg:order-1 reveal-left ${contentVisible ? 'revealed' : ''}`}
        >
          <h3 className="font-handwritten text-3xl md:text-4xl text-sage-dark mb-6">
            Bienvenue à Pornic !
          </h3>
          <div className="space-y-4 text-wood-dark/80 leading-relaxed">
            <p>
              <strong className="text-wood-dark">La P'tite Crêpe Rit</strong> vous propose
              une carte généreuse de crêpes, galettes et salades qui évolue au fil des saisons
              pour vous offrir le meilleur de nos terroirs.
            </p>
            <p>
              Niché au cœur de Pornic, notre établissement vous accueille dans une atmosphère
              authentique : une salle chaleureuse aux <strong className="text-wood-dark">pierres apparentes</strong> et
              un <strong className="text-wood-dark">jardin verdoyant</strong> où il fait bon se poser
              le temps d'une pause gourmande.
            </p>
            <p>
              Notre secret ? Des recettes traditionnelles revisitées avec passion et surtout,
              des <strong className="text-wood-dark">galettes et crêpes préparées à la demande</strong>,
              avec des produits soigneusement sélectionnés auprès de nos producteurs locaux.
              Farine de sarrasin bio, œufs de plein air, légumes de saison... Ici, le goût
              authentique est dans chaque bouchée.
            </p>
          </div>

          {/* Bio badges */}
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 bg-sage/10 text-sage-dark px-4 py-2 rounded-full text-sm font-medium">
              <Leaf size={16} /> Farine bio
            </span>
            <span className="inline-flex items-center gap-2 bg-sage/10 text-sage-dark px-4 py-2 rounded-full text-sm font-medium">
              <Leaf size={16} /> Œufs bio plein air
            </span>
            <span className="inline-flex items-center gap-2 bg-sage/10 text-sage-dark px-4 py-2 rounded-full text-sm font-medium">
              <Heart size={16} /> Producteurs locaux
            </span>
          </div>
        </div>

        {/* Image Column - Photos grid */}
        <div
          ref={imageRef}
          className={`order-1 lg:order-2 reveal-right ${imageVisible ? 'revealed' : ''}`}
        >
          <div className="relative">
            {/* Main image */}
            <div className="aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden">
              <img
                src="/salle-pierre.jpg"
                alt="Salle aux pierres apparentes de La P'tite Crêpe Rit"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Secondary image overlay */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 md:w-48 md:h-48 rounded-xl shadow-xl overflow-hidden border-4 border-cream hidden sm:block">
              <img
                src="/salle-verte.jpg"
                alt="Salle végétale de La P'tite Crêpe Rit"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-wood/10 rounded-full -z-10" />

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-cream-light rounded-2xl shadow-xl p-4 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-sage rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-display text-wood-dark">100%</p>
                  <p className="text-sm text-wood/60">Fait maison</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div ref={featuresRef} className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`group bg-cream-light rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 reveal-scale ${featuresVisible.includes(index) ? 'revealed' : ''}`}
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-sage/10 rounded-full flex items-center justify-center group-hover:bg-sage group-hover:scale-110 transition-all duration-500">
              <feature.icon className="w-8 h-8 text-sage group-hover:text-white transition-colors duration-500" />
            </div>
            <h4 className="font-display text-xl text-wood-dark mb-3">
              {feature.title}
            </h4>
            <p className="text-wood/70 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

    </Section>
  );
};

export default About;
