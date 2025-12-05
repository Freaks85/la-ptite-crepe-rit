import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { restaurantInfo } from '../config/restaurant';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Accueil', to: '/' },
    { name: 'La Carte', to: '/carte' },
    { name: 'Chèque Cadeau', to: '/contact' },
  ];

  return (
    <footer className="bg-cream text-wood-dark">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            {/* Logo with background */}
            <div className="w-24 h-24 bg-cream-light rounded-full p-2 mb-4">
              <img
                src="/logo.png"
                alt="La P'tite Crêpe Rit - Pornic"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-wood/70 mb-6 leading-relaxed">
              Crêpes artisanales et galettes bretonnes depuis 2015.
              Le goût authentique de la Bretagne à Pornic.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={restaurantInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-sage/20 rounded-full flex items-center justify-center hover:bg-sage transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-wood/70 hover:text-wood-dark transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 text-sage-light" />
                <span className="text-wood/70">
                  {restaurantInfo.address.street}<br />
                  {restaurantInfo.address.postalCode} {restaurantInfo.address.city}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-sage-light" />
                <a
                  href={`tel:${restaurantInfo.phone.link}`}
                  className="text-wood/70 hover:text-wood-dark transition-colors"
                >
                  {restaurantInfo.phone.display}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-sage-light" />
                <a
                  href={`mailto:${restaurantInfo.email}`}
                  className="text-wood/70 hover:text-wood-dark transition-colors"
                >
                  {restaurantInfo.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Instagram className="w-5 h-5 flex-shrink-0 text-sage-light" />
                <a
                  href={restaurantInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-wood/70 hover:text-wood-dark transition-colors"
                >
                  @laptitecreperit
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg mb-4">Horaires</h4>
            <div className="flex gap-3">
              <Clock className="w-5 h-5 flex-shrink-0 text-sage-light mt-1" />
              <ul className="space-y-1 text-wood/70 text-sm">
                {restaurantInfo.hours.map((item) => (
                  <li key={item.day} className={!item.open ? 'text-wood/50' : ''}>
                    <span className="text-wood-dark font-medium">{item.day}:</span>{' '}
                    {item.hours}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-cream-warm border-t border-wood/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-wood/60">
            <p>
              © {currentYear} La P'tite Crêpe Rit - Pornic. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-wood-dark transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-wood-dark transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
