import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { restaurantInfo } from '../config/restaurant';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'La Carte', path: '/carte' },
    { name: 'Réservation', path: '/reservation' },
    { name: 'Chèque Cadeau', path: '/cheque-cadeau' },
  ];

  const isActive = (path) => location.pathname === path;

  // Sur la home page non scrollée, on veut un fond transparent
  const showTransparent = isHomePage && !isScrolled;

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500
        ${showTransparent
          ? 'bg-gradient-to-b from-wood-dark/50 to-transparent py-4'
          : 'bg-cream-light/98 backdrop-blur-md shadow-lg py-2'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <div className={`
              rounded-full overflow-hidden transition-all duration-500 transform group-hover:scale-105
              ${showTransparent
                ? 'w-14 h-14 md:w-16 md:h-16 bg-cream-light/95 shadow-xl'
                : 'w-12 h-12 bg-cream-light shadow-md'
              }
            `}>
              <img
                src="/logo.png"
                alt="La P'tite Crêpe Rit - Pornic"
                className="w-full h-full object-contain p-0.5"
              />
            </div>
            {!showTransparent && (
              <span className="hidden sm:block font-handwritten text-xl text-wood-dark">
                La P'tite Crêpe Rit
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`
                  relative px-4 py-2 rounded-full font-medium transition-all duration-300
                  ${showTransparent
                    ? 'text-cream hover:text-white hover:bg-white/10'
                    : 'text-wood-dark hover:text-sage hover:bg-sage/10'
                  }
                  ${isActive(link.path) ? (showTransparent ? 'bg-white/20' : 'bg-sage/10 text-sage') : ''}
                  after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2
                  after:h-0.5 after:bg-sage after:transition-all after:duration-300
                  ${isActive(link.path) ? 'after:w-1/2' : 'after:w-0 hover:after:w-1/2'}
                `}
              >
                {link.name}
              </Link>
            ))}

            {/* Phone Button */}
            <a
              href={`tel:${restaurantInfo.phone.link}`}
              className={`
                ml-4 flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300
                ${showTransparent
                  ? 'bg-cream-light/90 text-wood-dark hover:bg-cream-light shadow-lg'
                  : 'bg-sage text-white hover:bg-sage-dark shadow-md hover:shadow-lg'
                }
              `}
            >
              <Phone size={16} />
              <span className="hidden xl:inline">{restaurantInfo.phone.display}</span>
              <span className="xl:hidden">Appeler</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`
              lg:hidden p-3 rounded-full transition-all duration-300
              ${showTransparent
                ? 'text-cream bg-white/10 hover:bg-white/20'
                : 'text-wood-dark bg-cream-warm/50 hover:bg-cream-warm'
              }
            `}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-500 ease-in-out
            ${isMobileMenuOpen ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="bg-cream-light rounded-2xl shadow-xl p-6 space-y-2 border border-cream-warm">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={`
                  block font-medium py-3 px-4 rounded-xl transition-all duration-300
                  ${isActive(link.path)
                    ? 'bg-sage/10 text-sage'
                    : 'text-wood-dark hover:text-sage hover:bg-sage/10'
                  }
                `}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}

            {/* Phone Button Mobile */}
            <a
              href={`tel:${restaurantInfo.phone.link}`}
              className="flex items-center justify-center gap-2 bg-sage text-white py-3 px-4 rounded-xl font-medium mt-4 hover:bg-sage-dark transition-colors"
            >
              <Phone size={18} />
              <span>{restaurantInfo.phone.display}</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
