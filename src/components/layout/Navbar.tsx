
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from '@/components/layout/Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { text: 'Accueil', href: '/' },
    { text: 'Mariages', href: '/wedding' },
    { text: 'Événements Familiaux', href: '/product' },
    { text: 'Portraits', href: '/media' },
    { text: 'Contact', href: '/#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'glass py-3' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link
              key={link.text}
              to={link.href}
              className={cn(
                'text-sm font-medium transition-all link-underline',
                location.pathname === link.href ? 'after:scale-x-100 after:origin-bottom-left' : ''
              )}
            >
              {link.text}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav 
        className={cn(
          'fixed inset-0 bg-background pt-24 pb-8 px-8 z-40 flex flex-col space-y-8 md:hidden transition-all duration-500 ease-in-out transform',
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        )}
      >
        {navLinks.map(link => (
          <Link
            key={link.text}
            to={link.href}
            className={cn(
              'text-2xl font-medium transition-all py-2',
              location.pathname === link.href ? 'font-bold' : ''
            )}
          >
            {link.text}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
