import { useState } from 'react';
import { Section, Button, Input, Textarea, Card } from '../components';
import { Gift, Heart, Sparkles } from 'lucide-react';
import { useScrollReveal, usePageTransition, useStaggeredReveal } from '../hooks/useScrollReveal';

const GiftCard = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const isLoaded = usePageTransition();
  const [titleRef, titleVisible] = useScrollReveal({ threshold: 0.2 });
  const [cardRef, cardVisible] = useScrollReveal({ threshold: 0.2 });
  const [formRef, formVisible] = useScrollReveal({ threshold: 0.2 });
  const [featuresRef, featuresVisible] = useStaggeredReveal(3, 150);

  const amounts = [
    { value: 25, popular: false },
    { value: 50, popular: true },
    { value: 75, popular: false },
    { value: 100, popular: false },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Formulaire non fonctionnel - prototype uniquement
    alert('Merci ! Cette fonctionnalité sera bientôt disponible.');
  };

  return (
    <Section id="cheque-cadeau" bgColor="bg-cream-warm" withTexture animate={false}>
      {/* Section Title */}
      <div
        ref={titleRef}
        className={`text-center mb-16 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <h2 className="section-title">Offrez une expérience gourmande</h2>
        <p className="section-subtitle mt-4">
          Faites plaisir à vos proches avec un chèque cadeau La P'tite Crêpe Rit
        </p>
        <div className="flex items-center justify-center gap-3 mt-6">
          <div className="w-16 h-0.5 bg-sage" />
          <Gift className="w-6 h-6 text-sage" />
          <div className="w-16 h-0.5 bg-sage" />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left - Gift Card Visual & Amounts */}
        <div
          ref={cardRef}
          className={`transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
        >
          {/* Gift Card Mockup */}
          <div className="relative mb-10">
            <div
              className="aspect-[1.6/1] rounded-2xl shadow-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #4A5D3F 0%, #6B7F5E 50%, #7A8B6E 100%)',
              }}
            >
              <div className="absolute inset-0 p-8 flex flex-col justify-between text-cream">
                {/* Top */}
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-handwritten text-3xl md:text-4xl block">
                      La P'tite Crêpe Rit
                    </span>
                    <span className="text-sm opacity-80 mt-1 block">Chèque Cadeau</span>
                  </div>
                  <Sparkles className="w-8 h-8 opacity-60" />
                </div>

                {/* Bottom */}
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm opacity-70">Montant</p>
                    <p className="font-display text-4xl md:text-5xl">
                      {selectedAmount ? `${selectedAmount}€` : '50€'}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm opacity-70">Valable 1 an</p>
                    <p className="font-display">À offrir sans modération</p>
                  </div>
                </div>
              </div>

              {/* Decorative pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M20 5L23 12H30L24 17L27 25L20 20L13 25L16 17L10 12H17L20 5Z' fill='%23ffffff'/%3E%3C/svg%3E")`,
                }}
              />
            </div>

            {/* Decorative shadow */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-wood-dark/20 blur-xl rounded-full" />
          </div>

          {/* Amount Selection */}
          <div>
            <h3 className="font-display text-xl text-wood-dark mb-4 text-center">
              Choisissez un montant
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {amounts.map((amount) => (
                <button
                  key={amount.value}
                  type="button"
                  onClick={() => setSelectedAmount(amount.value)}
                  className={`
                    relative py-6 px-4 rounded-xl font-display text-2xl transition-all duration-300
                    ${selectedAmount === amount.value
                      ? 'bg-sage text-white shadow-lg scale-105'
                      : 'bg-cream-light text-wood-dark hover:bg-cream hover:shadow-md'
                    }
                  `}
                >
                  {amount.popular && (
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-wood text-cream text-xs px-2 py-0.5 rounded-full">
                      Populaire
                    </span>
                  )}
                  {amount.value}€
                </button>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mt-10 grid grid-cols-3 gap-4 text-center">
            <div className={`transition-all duration-500 delay-300 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="w-12 h-12 mx-auto mb-2 bg-sage/10 rounded-full flex items-center justify-center">
                <Gift className="w-5 h-5 text-sage" />
              </div>
              <p className="text-sm text-wood/70">Envoi immédiat par email</p>
            </div>
            <div className={`transition-all duration-500 delay-[400ms] ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="w-12 h-12 mx-auto mb-2 bg-sage/10 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-sage" />
              </div>
              <p className="text-sm text-wood/70">Message personnalisé</p>
            </div>
            <div className={`transition-all duration-500 delay-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="w-12 h-12 mx-auto mb-2 bg-sage/10 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-sage" />
              </div>
              <p className="text-sm text-wood/70">Valable 1 an</p>
            </div>
          </div>
        </div>

        {/* Right - Order Form */}
        <div ref={formRef} className={`transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
        <Card className="shadow-xl">
          <h3 className="font-display text-2xl text-wood-dark mb-6">
            Personnalisez votre cadeau
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="p-4 bg-cream-warm rounded-lg">
              <p className="text-sm text-wood/70 mb-1">Montant sélectionné</p>
              <p className="font-display text-2xl text-sage-dark">
                {selectedAmount ? `${selectedAmount}€` : 'Choisissez un montant'}
              </p>
            </div>

            <Input
              label="Votre nom"
              name="senderName"
              placeholder="Votre nom complet"
              required
            />

            <Input
              label="Nom du destinataire"
              name="recipientName"
              placeholder="Nom de l'heureux(se) élu(e)"
              required
            />

            <Input
              label="Email du destinataire"
              type="email"
              name="recipientEmail"
              placeholder="email@destinataire.com"
              required
            />

            <Textarea
              label="Message personnalisé"
              name="message"
              placeholder="Joyeux anniversaire ! Régale-toi bien..."
              rows={3}
            />

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full"
                disabled={!selectedAmount}
              >
                Commander le chèque cadeau
              </Button>
            </div>

            <p className="text-xs text-wood/50 text-center">
              Le chèque cadeau sera envoyé par email au destinataire.
              Paiement sécurisé.
            </p>
          </form>
        </Card>
        </div>
      </div>
    </Section>
  );
};

export default GiftCard;
