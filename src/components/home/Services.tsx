
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ui/ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'Photographie de Mariage',
      description: 'Des cérémonies intimes aux grandes célébrations, nous capturons les émotions, les détails et les moments inoubliables de votre journée spéciale.',
      imageSrc: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
      altText: 'Couple de mariés s\'embrassant dans un cadre naturel',
      linkTo: '/wedding'
    },
    {
      title: 'Événements Familiaux',
      description: 'Anniversaires, baptêmes, réunions de famille ou autres célébrations. Nous immortalisons ces moments précieux pour que vous puissiez les chérir pour toujours.',
      imageSrc: 'https://images.unsplash.com/photo-1544365558-35aa4afcf11f?auto=format&fit=crop&w=600&q=80',
      altText: 'Famille heureuse se réunissant pour une fête',
      linkTo: '/product'
    },
    {
      title: 'Séances Portraits',
      description: 'Des portraits professionnels qui capturent votre personnalité. Idéal pour les familles, couples, enfants ou portraits individuels.',
      imageSrc: 'https://images.unsplash.com/photo-1606902965551-dce093cda6e7?auto=format&fit=crop&w=600&q=80',
      altText: 'Portrait familial professionnel',
      linkTo: '/media'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium">Nos Services</h2>
          <p className="mt-4 text-muted-foreground">
            Des services de photographie et vidéographie professionnels pour immortaliser vos moments les plus précieux
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="animate-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                altText={service.altText}
                linkTo={service.linkTo}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            to="/wedding" 
            className="inline-flex items-center text-lg font-medium link-underline"
          >
            Voir tous nos services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
