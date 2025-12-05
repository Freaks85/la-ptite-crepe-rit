import { Gift, MapPin, Clock, Instagram } from 'lucide-react';
import { restaurantInfo } from '../config/restaurant';

const ContactPage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/salle-verte.jpg')`,
        }}
      />
      {/* Overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-wood-dark/80 via-wood-dark/70 to-wood-dark/90" />

      {/* Content */}
      <div className="relative z-10 pt-28 pb-20 px-4">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
              Chèque Cadeau
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-20 h-0.5 bg-cream/40" />
              <Gift className="w-6 h-6 text-cream/60" />
              <div className="w-20 h-0.5 bg-cream/40" />
            </div>
            <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto font-light">
              Offrez une expérience gourmande bretonne à vos proches
            </p>
          </div>

          {/* Chèque Cadeau Card */}
          <div className="bg-cream/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl mb-16">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-sage rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Gift className="w-10 h-10 text-cream" />
              </div>

              <h2 className="font-handwritten text-3xl md:text-4xl text-sage-dark mb-4">
                Faites plaisir à ceux que vous aimez
              </h2>

              <p className="text-wood/70 leading-relaxed max-w-xl mx-auto">
                Offrez un moment de gourmandise et de convivialité ! Nos chèques cadeaux
                sont disponibles directement au restaurant. Passez nous voir et
                repartez avec un joli bon personnalisé, prêt à offrir.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-sage/10 rounded-2xl p-6 text-center">
                <p className="text-sm text-wood/60 mb-2">Montant</p>
                <p className="font-display text-2xl text-sage-dark">
                  À votre convenance
                </p>
              </div>
              <div className="bg-wood/10 rounded-2xl p-6 text-center">
                <p className="text-sm text-wood/60 mb-2">Validité</p>
                <p className="font-display text-2xl text-wood-dark">
                  1 an
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-wood/60 text-sm">
                Disponible uniquement sur place, au restaurant
              </p>
            </div>
          </div>

          {/* Informations pratiques */}
          <div className="bg-cream/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="font-handwritten text-3xl md:text-4xl text-sage-dark text-center mb-10">
              Venez nous rendre visite
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Adresse */}
              <div className="text-center">
                <div className="w-14 h-14 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-sage" />
                </div>
                <h4 className="font-display text-lg text-wood-dark mb-2">Adresse</h4>
                <p className="text-wood/70 leading-relaxed">
                  {restaurantInfo.address.street}<br />
                  {restaurantInfo.address.postalCode} {restaurantInfo.address.city}
                </p>
              </div>

              {/* Horaires */}
              <div className="text-center">
                <div className="w-14 h-14 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-sage" />
                </div>
                <h4 className="font-display text-lg text-wood-dark mb-2">Horaires</h4>
                <div className="text-wood/70 text-sm space-y-1">
                  {restaurantInfo.hours.map((item) => (
                    <p key={item.day} className={!item.open ? 'text-wood/40' : ''}>
                      <span className="font-medium">{item.day}:</span> {item.hours}
                    </p>
                  ))}
                </div>
              </div>

              {/* Réseaux */}
              <div className="text-center">
                <div className="w-14 h-14 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Instagram className="w-7 h-7 text-sage" />
                </div>
                <h4 className="font-display text-lg text-wood-dark mb-2">Suivez-nous</h4>
                <a
                  href={restaurantInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage hover:text-sage-dark transition-colors font-medium"
                >
                  @laptitecreperit
                </a>
                <p className="text-wood/50 text-sm mt-2">
                  Photos, actualités et gourmandises
                </p>
              </div>
            </div>
          </div>

          {/* Citation finale */}
          <div className="text-center mt-16">
            <p className="font-handwritten text-2xl md:text-3xl text-cream/90">
              "Le bonheur se trouve dans les petites choses...
              <br className="hidden md:block" />
              et dans nos crêpes !"
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
