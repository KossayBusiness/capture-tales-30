
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PricingTable from '@/components/ui/PricingTable';
import Contact from '@/components/home/Contact';

const Wedding = () => {
  const weddingPackages = [
    {
      id: 'basic-wedding',
      title: 'Basic Wedding Package',
      price: '$999',
      description: 'Perfect for small, intimate ceremonies.',
      features: [
        '4 hours of coverage',
        '100-200 edited photos',
        'Documentary-style video',
        'Online gallery',
        'Digital delivery'
      ]
    },
    {
      id: 'standard-wedding',
      title: 'Standard Wedding Package',
      price: '$1,899',
      description: 'Our most popular choice for wedding coverage.',
      features: [
        '6 hours of coverage',
        '150-300 edited photos',
        'Documentary-style video',
        'Professional photo shoot (2 hours)',
        'Online gallery with sharing options',
        'Digital delivery'
      ],
      isPopular: true
    },
    {
      id: 'premium-wedding',
      title: 'Premium Wedding Package',
      price: '$2,899',
      description: 'Complete coverage for your special day.',
      features: [
        '6 hours of coverage',
        '150-300 edited photos',
        'Documentary-style video',
        'Professional photo shoot (2 hours)',
        'Teaser video (highlight reel)',
        'Coverage of preparations',
        'Online gallery with sharing options',
        'Digital delivery'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Wedding Production | Capture Tales</title>
        <meta name="description" content="Professional wedding photography and videography services to capture your special day." />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center brightness-[0.3] -z-10" />
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 animate-in">
              Wedding Production
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-in delay-100">
              Capture every moment of your special day
            </p>
            <p className="text-lg opacity-80 animate-in delay-200">
              From intimate ceremonies to grand celebrations, we capture the emotions, details, and unforgettable moments of your wedding day.
            </p>
          </div>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Memories That Last a Lifetime</h2>
              <p className="text-muted-foreground mb-4">
                Your wedding day is one of the most important moments of your life. We're dedicated to capturing every precious memory, from the nervous anticipation before the ceremony to the joyful celebration afterward.
              </p>
              <p className="text-muted-foreground">
                Our team of experienced photographers and videographers work discreetly, ensuring that no special moment goes unnoticed. We blend into the background while documenting your day with artistic precision and attention to detail.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=600&q=80" 
                  alt="Wedding photography" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=600&q=80" 
                  alt="Wedding photography" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&w=600&q=80" 
                  alt="Wedding photography" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80" 
                  alt="Wedding photography" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Table */}
      <PricingTable 
        title="Wedding Packages" 
        subtitle="Choose the perfect package for your special day" 
        packages={weddingPackages} 
      />
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-medium">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground">
              Find answers to common questions about our wedding production services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto glass rounded-lg divide-y divide-border">
            <div className="p-6">
              <h3 className="text-xl font-medium">How far in advance should I book?</h3>
              <p className="mt-2 text-muted-foreground">We recommend booking at least 6-12 months in advance, especially for dates during peak wedding season (May-October). Popular dates can fill up quickly.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium">How long until we receive our photos and videos?</h3>
              <p className="mt-2 text-muted-foreground">You'll receive your edited photos within 4-6 weeks after your wedding. Videos typically take 6-8 weeks for full editing and delivery.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium">Can we customize a package?</h3>
              <p className="mt-2 text-muted-foreground">Absolutely! We understand that every wedding is unique. Contact us to discuss your specific needs, and we'll create a custom package just for you.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium">Do you travel for destination weddings?</h3>
              <p className="mt-2 text-muted-foreground">Yes, we do! Additional travel fees may apply depending on the location. Please contact us for a custom quote for your destination wedding.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <Contact />
      
      <Footer />
    </>
  );
};

export default Wedding;
