
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ui/ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'Wedding Production',
      description: 'From intimate ceremonies to grand celebrations, we capture the emotions, details, and unforgettable moments of your special day.',
      imageSrc: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80',
      altText: 'Wedding photography',
      linkTo: '/wedding'
    },
    {
      title: 'Product Coverage',
      description: 'Showcase your products in the best light with our professional photography and videography services for brands and businesses.',
      imageSrc: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80',
      altText: 'Product photography',
      linkTo: '/product'
    },
    {
      title: 'Media Coverage',
      description: 'From corporate events to concerts, we ensure professional coverage that captures the energy and essence of your events.',
      imageSrc: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80',
      altText: 'Media coverage',
      linkTo: '/media'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium">Our Services</h2>
          <p className="mt-4 text-muted-foreground">
            We provide premium photography and videography services for all your creative needs
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
            View all services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
