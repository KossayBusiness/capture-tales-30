
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PricingTable from '@/components/ui/PricingTable';
import Contact from '@/components/home/Contact';

const Product = () => {
  const productPackages = [
    {
      id: 'basic-product',
      title: 'Basic Product Package',
      price: '$699',
      description: 'Essential coverage for small product catalogs.',
      features: [
        '4 hours of studio time',
        '100-200 edited product photos',
        'Short product showcase video (1-2 minutes)',
        'Basic retouching included',
        'Digital delivery'
      ]
    },
    {
      id: 'standard-product',
      title: 'Standard Product Package',
      price: '$1,299',
      description: 'Comprehensive coverage for your product line.',
      features: [
        '6 hours of studio time',
        '150-300 edited product photos',
        'Product showcase video (2-3 minutes)',
        'Lifestyle shots (products in use)',
        'Advanced retouching included',
        'Digital delivery with commercial usage rights'
      ],
      isPopular: true
    },
    {
      id: 'premium-product',
      title: 'Premium Product Package',
      price: '$1,999',
      description: 'Premium coverage for complete product catalogs.',
      features: [
        '6 hours of studio time',
        '150-300 edited product photos',
        'High-quality product video (3-5 minutes)',
        'Lifestyle shots (products in use)',
        'Behind-the-scenes footage',
        'Social media teaser (30-60 seconds)',
        'Premium retouching included',
        'Digital delivery with full commercial usage rights'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Product Coverage | Capture Tales</title>
        <meta name="description" content="Professional product photography and videography services for brands and businesses." />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center brightness-[0.3] -z-10" />
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 animate-in">
              Product Coverage
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-in delay-100">
              Showcase your products in the best light
            </p>
            <p className="text-lg opacity-80 animate-in delay-200">
              Professional photography and videography for brands and businesses to make your products stand out from the competition.
            </p>
          </div>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" 
                  alt="Product photography" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80" 
                  alt="Product photography" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden col-span-2">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80" 
                  alt="Product photography" 
                  className="w-full h-60 object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Elevate Your Brand</h2>
              <p className="text-muted-foreground mb-4">
                In today's competitive market, high-quality visual content isn't just nice to have—it's essential. Our product photography and videography services help your products stand out and make a lasting impression.
              </p>
              <p className="text-muted-foreground">
                Whether you're launching a new product, updating your website, or creating content for social media, our team delivers stunning visuals that showcase your products in their best light. From e-commerce photography to lifestyle shots and promotional videos, we create content that drives engagement and sales.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Table */}
      <PricingTable 
        title="Product Coverage Packages" 
        subtitle="Choose the perfect package for your product line" 
        packages={productPackages} 
      />
      
      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-medium">Why Choose Our Product Coverage</h2>
            <p className="mt-4 text-muted-foreground">
              Discover the benefits of professional product photography and videography
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass rounded-lg p-6 animate-in">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Increased Conversion Rates</h3>
              <p className="text-muted-foreground">
                High-quality product images can increase conversion rates by up to 40%. Professional photography helps customers visualize your products better.
              </p>
            </div>
            
            <div className="glass rounded-lg p-6 animate-in delay-100">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Enhanced Brand Perception</h3>
              <p className="text-muted-foreground">
                Professional visuals elevate your brand image and build trust with customers. Quality imagery reflects the quality of your products.
              </p>
            </div>
            
            <div className="glass rounded-lg p-6 animate-in delay-200">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Versatile Content</h3>
              <p className="text-muted-foreground">
                Our product photography can be used across all marketing channels, from your website and social media to print materials and advertising.
              </p>
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

export default Product;
