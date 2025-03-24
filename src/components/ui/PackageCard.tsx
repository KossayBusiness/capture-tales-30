
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface PackageCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  className?: string;
  onSelectPackage?: () => void;
}

const PackageCard = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  className,
  onSelectPackage,
}: PackageCardProps) => {
  return (
    <div 
      className={cn(
        'relative rounded-lg glass border border-border transition-all',
        isPopular ? 'shadow-lg scale-105 z-10' : 'shadow-sm',
        className
      )}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-medium">
          Most Popular
        </div>
      )}
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-medium">{title}</h3>
        <div className="mt-2 flex items-baseline">
          <span className="text-3xl md:text-4xl font-semibold">{price}</span>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          {description}
        </p>
        <ul className="mt-6 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button 
            variant={isPopular ? 'default' : 'outline'} 
            size="lg" 
            className="w-full"
            onClick={onSelectPackage}
          >
            {isPopular ? 'Get Started' : 'Select Package'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
