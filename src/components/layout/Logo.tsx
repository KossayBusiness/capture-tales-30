
import { Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

const Logo = ({ className, iconOnly = false }: LogoProps) => {
  return (
    <Link to="/" className={cn("flex items-center gap-2", className)}>
      <div className="relative flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground">
        <Camera className="h-6 w-6" />
        <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-red-500 animate-pulse" />
      </div>
      
      {!iconOnly && (
        <div className="font-serif text-2xl font-medium">
          Capture Tales
        </div>
      )}
    </Link>
  );
};

export default Logo;
