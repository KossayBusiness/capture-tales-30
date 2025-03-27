
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand and Contact */}
          <div className="space-y-4">
            <Link to="/" className="font-serif text-2xl font-medium">Capture Tales</Link>
            <p className="text-muted-foreground text-sm max-w-xs mt-4">
              Nous capturons des moments qui durent toute une vie, offrant des services de photographie et vidéographie haut de gamme.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="mailto:contact@capturetales.fr" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:+33123456789" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Phone">
                <Phone className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/wedding" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Photographie de Mariage</Link>
              </li>
              <li>
                <Link to="/product" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Événements Familiaux</Link>
              </li>
              <li>
                <Link to="/media" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Séances Portraits</Link>
              </li>
            </ul>
          </div>
          
          {/* Get in Touch */}
          <div>
            <h3 className="font-medium text-lg mb-4">Contactez-nous</h3>
            <address className="not-italic text-muted-foreground text-sm space-y-2">
              <p>15 Rue des Photographes</p>
              <p>75008 Paris</p>
              <p>France</p>
            </address>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                <a href="mailto:contact@capturetales.fr" className="hover:text-foreground transition-colors">contact@capturetales.fr</a>
              </p>
              <p className="text-sm text-muted-foreground">
                <a href="tel:+33123456789" className="hover:text-foreground transition-colors">+33 1 23 45 67 89</a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Capture Tales. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
