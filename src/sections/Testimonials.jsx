import { Star } from 'lucide-react';
import { Section } from '../components';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Testimonials = () => {
  const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.3 });
  const [cardsRef, cardsVisible] = useScrollReveal({ threshold: 0.2 });

  const testimonials = [
    {
      name: 'Sophie Martin',
      date: 'Il y a 2 semaines',
      rating: 5,
      text: 'Une crêperie authentique avec des produits de qualité ! Les galettes au sarrasin sont délicieuses et l\'accueil est très chaleureux. Le cadre avec les pierres apparentes est magnifique. Je recommande vivement la galette complète et la crêpe Babou !',
      avatar: 'SM'
    },
    {
      name: 'Thomas Dupont',
      date: 'Il y a 3 semaines',
      rating: 5,
      text: 'Excellent rapport qualité-prix ! Nous avons été agréablement surpris par la générosité des portions et la fraîcheur des ingrédients. Le cidre artisanal est parfait pour accompagner les galettes. La terrasse est très agréable en été.',
      avatar: 'TD'
    },
    {
      name: 'Marie Leblanc',
      date: 'Il y a 1 mois',
      rating: 5,
      text: 'La meilleure crêperie de Pornic ! Nous y allons régulièrement en famille et c\'est toujours un plaisir. Les crêpes sucrées sont incroyables, particulièrement la Justine avec ses pommes poêlées. Le service est rapide et le personnel très sympathique.',
      avatar: 'ML'
    },
    {
      name: 'Jean-Pierre Rousseau',
      date: 'Il y a 1 mois',
      rating: 5,
      text: 'Une adresse incontournable à Pornic ! Produits bio, recettes traditionnelles et service impeccable. Les galettes spéciales sont un vrai régal, surtout la Bel Air avec son reblochon. L\'ambiance est conviviale et authentique.',
      avatar: 'JPR'
    },
    {
      name: 'Claire Dubois',
      date: 'Il y a 2 mois',
      rating: 5,
      text: 'Nous avons découvert cette crêperie par hasard et quelle belle surprise ! Les crêpes sont faites maison avec des ingrédients frais. La crêpe Lucas flambée au Cointreau était spectaculaire. Un excellent moment passé en couple.',
      avatar: 'CD'
    },
    {
      name: 'Laurent Bernard',
      date: 'Il y a 2 mois',
      rating: 5,
      text: 'Ambiance chaleureuse et authentique, exactement ce qu\'on recherche dans une bonne crêperie ! Les pancakes à l\'anglaise sont originaux et délicieux. Le petit plus : les glaces artisanales en dessert. Parfait pour un déjeuner en famille !',
      avatar: 'LB'
    }
  ];

  return (
    <Section id="avis" bgColor="bg-cream" withTexture>
      {/* En-tête */}
      <div
        ref={headerRef}
        className={`text-center mb-16 reveal-up ${headerVisible ? 'revealed' : ''}`}
      >
        <h2 className="font-display text-4xl md:text-5xl text-wood-dark mb-4">
          Ils ont aimé La P'tite Crêpe Rit
        </h2>
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-7 h-7 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-wood-dark font-bold text-2xl">5.0/5</span>
        </div>
        <p className="text-wood/60 text-lg">
          Basé sur {testimonials.length} avis Google vérifiés
        </p>
      </div>

      {/* Grille d'avis */}
      <div
        ref={cardsRef}
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto reveal-cards ${cardsVisible ? 'revealed' : ''}`}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-sage/10 hover:border-sage/30 flex flex-col"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* En-tête de la carte */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-sage text-white flex items-center justify-center font-semibold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-wood-dark">{testimonial.name}</h3>
                  <p className="text-sm text-wood/50">{testimonial.date}</p>
                </div>
              </div>
            </div>

            {/* Étoiles */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Texte de l'avis */}
            <p className="text-wood/80 leading-relaxed flex-grow">
              "{testimonial.text}"
            </p>

            {/* Badge Google */}
            <div className="mt-4 pt-4 border-t border-sage/10">
              <div className="flex items-center gap-2 text-sm text-wood/50">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Avis Google</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to action */}
      <div className="text-center mt-12">
        <a
          href="https://www.google.com/maps/place/La+P'tite+Cr%C3%AApe+Rit"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-sage text-white rounded-full font-medium hover:bg-sage-dark transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Star className="w-5 h-5" />
          <span>Laisser un avis sur Google</span>
        </a>
      </div>
    </Section>
  );
};

export default Testimonials;
