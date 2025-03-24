
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PricingTable from '@/components/ui/PricingTable';
import Contact from '@/components/home/Contact';

const Media = () => {
  const mediaPackages = [
    {
      id: 'basic-media',
      title: 'Basic Media Package',
      price: '$799',
      description: 'Essential coverage for small events.',
      features: [
        '4 hours of coverage',
        '100-200 edited photos',
        'Short event recap video (1-2 minutes)',
        'Basic editing included',
        'Digital delivery'
      ]
    },
    {
      id: 'standard-media',
      title: 'Standard Media Package',
      price: '$1,499',
      description: 'Comprehensive coverage for your event.',
      features: [
        '6 hours of coverage',
        '150-300 edited photos',
        'Event recap video (2-3 minutes)',
        'Interviews with key participants',
        'Advanced editing included',
        'Digital delivery with commercial usage rights'
      ],
      isPopular: true
    },
    {
      id: 'premium-media',
      title: 'Premium Media Package',
      price: '$2,199',
      description: 'Premium coverage for important events.',
      features: [
        '6 hours of coverage',
        '150-300 edited photos',
        'High-quality event recap video (3-5 minutes)',
        'Interviews with key participants',
        'Behind-the-scenes footage',
        'Social media teaser (30-60 seconds)',
        'Premium editing included',
        'Digital delivery with full commercial usage rights'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Media Coverage | Capture Tales</title>
        <meta name="description" content="Professional media coverage for your events, from corporate gatherings to concerts." />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center brightness-[0.3] -z-10" />
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 animate-in">
              Media Coverage
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-in delay-100">
              Professional coverage for your events
            </p>
            <p className="text-lg opacity-80 animate-in delay-200">
              From corporate events to concerts, we ensure your event gets the attention it deserves with our professional media coverage.
            </p>
          </div>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Capture the Essence of Your Event</h2>
              <p className="text-muted-foreground mb-4">
                Events are more than just gatherings—they're experiences that deserve to be captured and shared. Our media coverage services ensure that your event is professionally documented, preserving the energy, interactions, and key moments.
              </p>
              <p className="text-muted-foreground">
                Whether you're hosting a corporate conference, a cultural event, a concert, or a press announcement, our team provides comprehensive coverage that you can use for marketing, archival purposes, or sharing with participants who couldn't attend in person.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="rounded-lg overflow-hidden h-80">
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80" 
                  alt="Media coverage" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80" 
                    alt="Media coverage" 
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80" 
                    alt="Media coverage" 
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Table */}
      <PricingTable 
        title="Media Coverage Packages" 
        subtitle="Choose the perfect package for your event" 
        packages={mediaPackages} 
      />
      
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-medium">Our Media Coverage Services</h2>
            <p className="mt-4 text-muted-foreground">
              Comprehensive solutions for documenting your events
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass rounded-lg p-6 animate-in">
              <h3 className="text-xl font-medium mb-4">Corporate Events</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Conferences and seminars</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Product launches</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Team-building events</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Award ceremonies</span>
                </li>
              </ul>
            </div>
            
            <div className="glass rounded-lg p-6 animate-in delay-100">
              <h3 className="text-xl font-medium mb-4">Entertainment Events</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Concerts and performances</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cultural festivals</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Art exhibitions</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fashion shows</span>
                </li>
              </ul>
            </div>
            
            <div className="glass rounded-lg p-6 animate-in delay-200">
              <h3 className="text-xl font-medium mb-4">Press & Media Events</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Press conferences</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Media briefings</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Announcement events</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Interview sessions</span>
                </li>
              </ul>
            </div>
            
            <div className="glass rounded-lg p-6 animate-in delay-300">
              <h3 className="text-xl font-medium mb-4">Special Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Live streaming services</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Drone photography and videography</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>360° virtual tours</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Time-lapse photography</span>
                </li>
              </ul>
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

export default Media;
