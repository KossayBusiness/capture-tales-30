
import PackageCard from './PackageCard';

interface PricingTableProps {
  title: string;
  subtitle: string;
  packages: {
    id: string;
    title: string;
    price: string;
    description: string;
    features: string[];
    isPopular?: boolean;
  }[];
}

const PricingTable = ({ title, subtitle, packages }: PricingTableProps) => {
  const handleSelectPackage = (packageId: string) => {
    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // TODO: You could also set the selected package in a state or context
    console.log(`Selected package: ${packageId}`);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-medium">{title}</h2>
          <p className="mt-4 text-muted-foreground">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {packages.map((pkg, index) => (
            <div 
              key={pkg.id}
              className="animate-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <PackageCard
                title={pkg.title}
                price={pkg.price}
                description={pkg.description}
                features={pkg.features}
                isPopular={pkg.isPopular}
                onSelectPackage={() => handleSelectPackage(pkg.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
