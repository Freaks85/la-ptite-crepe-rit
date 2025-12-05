import { Section, Button, Input, Select, Textarea } from '../components';
import { Phone, MapPin, Clock } from 'lucide-react';
import { restaurantInfo } from '../config/restaurant';
import { useScrollReveal, usePageTransition } from '../hooks/useScrollReveal';

const Reservation = () => {
  const isLoaded = usePageTransition();
  const [titleRef, titleVisible] = useScrollReveal({ threshold: 0.2 });
  const [formRef, formVisible] = useScrollReveal({ threshold: 0.1 });
  const [infoRef, infoVisible] = useScrollReveal({ threshold: 0.2 });

  const hoursOptions = [
    { value: '12:00', label: '12:00' },
    { value: '12:30', label: '12:30' },
    { value: '13:00', label: '13:00' },
    { value: '13:30', label: '13:30' },
    { value: '19:00', label: '19:00' },
    { value: '19:30', label: '19:30' },
    { value: '20:00', label: '20:00' },
    { value: '20:30', label: '20:30' },
    { value: '21:00', label: '21:00' },
  ];

  const guestsOptions = Array.from({ length: 10 }, (_, i) => ({
    value: String(i + 1),
    label: `${i + 1} ${i === 0 ? 'personne' : 'personnes'}`,
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Formulaire non fonctionnel - prototype uniquement
    alert('Merci ! Cette fonctionnalité sera bientôt disponible.');
  };

  return (
    <Section id="reservation" bgColor="bg-cream" animate={false}>
      {/* Section Title */}
      <div
        ref={titleRef}
        className={`text-center mb-16 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <h2 className="section-title">Réservez votre table</h2>
        <p className="section-subtitle mt-4">
          Garantissez votre place pour un moment gourmand en Bretagne
        </p>
        <div className="flex items-center justify-center gap-3 mt-6">
          <div className="w-16 h-0.5 bg-sage" />
          <div className="w-3 h-3 bg-sage rounded-full" />
          <div className="w-16 h-0.5 bg-sage" />
        </div>
      </div>

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Form Column */}
        <div
          ref={formRef}
          className={`lg:col-span-3 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
        >
          <form onSubmit={handleSubmit} className="bg-cream-light rounded-2xl shadow-lg p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Nom"
                name="lastName"
                placeholder="Votre nom"
                required
              />
              <Input
                label="Prénom"
                name="firstName"
                placeholder="Votre prénom"
                required
              />
              <Input
                label="Email"
                type="email"
                name="email"
                placeholder="votre@email.com"
                required
              />
              <Input
                label="Téléphone"
                type="tel"
                name="phone"
                placeholder="06 12 34 56 78"
                required
              />
              <Input
                label="Date"
                type="date"
                name="date"
                required
              />
              <Select
                label="Heure"
                name="time"
                options={hoursOptions}
                placeholder="Choisir une heure"
                required
                defaultValue=""
              />
              <Select
                label="Nombre de personnes"
                name="guests"
                options={guestsOptions}
                placeholder="Choisir"
                required
                defaultValue=""
                className="md:col-span-2"
              />
              <Textarea
                label="Message (optionnel)"
                name="message"
                placeholder="Allergies, occasion spéciale, demandes particulières..."
                className="md:col-span-2"
                rows={3}
              />
            </div>

            <div className="mt-8">
              <Button type="submit" className="w-full md:w-auto">
                Réserver ma table
              </Button>
            </div>

            <p className="mt-4 text-sm text-wood/60">
              * Une confirmation vous sera envoyée par email
            </p>
          </form>
        </div>

        {/* Info Column */}
        <div
          ref={infoRef}
          className={`lg:col-span-2 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
        >
          <div className="bg-sage-dark text-cream rounded-2xl p-8 md:p-10 h-full">
            <h3 className="font-handwritten text-3xl mb-8">
              Nous trouver
            </h3>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cream/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-lg mb-1">Adresse</h4>
                  <p className="text-cream/80 leading-relaxed">
                    {restaurantInfo.address.street}<br />
                    {restaurantInfo.address.postalCode} {restaurantInfo.address.city}<br />
                    {restaurantInfo.address.region}, {restaurantInfo.address.country}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cream/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-lg mb-1">Téléphone</h4>
                  <p className="text-cream/80">
                    <a href={`tel:${restaurantInfo.phone.link}`} className="hover:text-cream transition-colors">
                      {restaurantInfo.phone.display}
                    </a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cream/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-lg mb-2">Horaires</h4>
                  <div className="text-cream/80 space-y-1 text-sm">
                    {restaurantInfo.hours.map((item) => (
                      <p key={item.day} className={!item.open ? 'text-cream/50' : ''}>
                        <span className="font-medium">{item.day}:</span> {item.hours}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Image du restaurant */}
            <div className="mt-8 rounded-xl overflow-hidden h-40">
              <img
                src="/salle-complete.jpg"
                alt="L'intérieur du restaurant"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Reservation;
