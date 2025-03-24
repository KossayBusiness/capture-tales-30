
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
  linkTo: string;
  className?: string;
}

const ServiceCard = ({
  title,
  description,
  imageSrc,
  altText,
  linkTo,
  className,
}: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        'group relative overflow-hidden rounded-lg bg-white shadow-lg hover-lift transition-all',
        className
      )}
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={imageSrc}
          alt={altText}
          className="h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-medium text-gray-900">{title}</h3>
        <p className="mt-3 text-muted-foreground line-clamp-3">{description}</p>
        <Link 
          to={linkTo}
          className="mt-4 inline-flex items-center text-sm font-medium link-underline text-primary"
        >
          Découvrir nos services
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
