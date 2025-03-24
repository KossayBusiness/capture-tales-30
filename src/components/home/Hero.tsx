
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=80',
    title: 'Capturez vos moments en famille',
    subtitle: 'Des souvenirs impérissables de vos événements les plus précieux',
    link: '/wedding'
  },
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80',
    title: 'Photographie de Mariage d\'Exception',
    subtitle: 'Des images qui racontent votre histoire d\'amour',
    link: '/wedding'
  },
  {
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=2000&q=80',
    title: 'Événements Familiaux Mémorables',
    subtitle: 'Anniversaires, baptêmes, réunions de famille immortalisés',
    link: '/media'
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div 
            className="h-full w-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slides[current].image})`,
              filter: 'brightness(0.7)'
            }}
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      
      {/* Content */}
      <div className="relative flex items-center justify-center h-full text-white">
        <div className="container mx-auto px-6 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-6">
                {slides[current].title}
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                {slides[current].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  size="lg" 
                  className="text-base"
                >
                  <Link to={slides[current].link} className="flex items-center">
                    Découvrir nos services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white/10 text-base"
                >
                  <a href="#contact" className="flex items-center">
                    Nous contacter
                  </a>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Slide indicators */}
          <div className="absolute bottom-12 left-0 right-0 flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === current ? 'w-8 bg-white' : 'w-2 bg-white/40'
                }`}
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
