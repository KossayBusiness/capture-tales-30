
import { Camera, Film, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

const Logo = ({ className, iconOnly = false }: LogoProps) => {
  return (
    <Link to="/" className={cn("flex items-center gap-2", className)}>
      <div className="relative flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground">
        <div className="absolute inset-0 flex items-center justify-center">
          <Camera className="h-6 w-6" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center rotate-45 opacity-40">
          <Video className="h-6 w-6" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center -rotate-45 opacity-30">
          <Film className="h-7 w-7" />
        </div>
        <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-red-500 animate-pulse" />
      </div>
      
      {!iconOnly && (
        <div className="font-serif text-2xl font-medium">
          <span className="text-primary">Capture</span>{' '}
          <span className="italic">Tales</span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
