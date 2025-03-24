
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Contact from '@/components/home/Contact';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Capture Tales | Photographie et Vidéographie professionnelles pour vos événements</title>
        <meta name="description" content="Services professionnels de photographie et vidéographie pour mariages et événements familiaux. Immortalisez vos moments précieux avec Capture Tales." />
      </Helmet>
      
      <Navbar />
      <Hero />
      <Services />
      
      {/* Notre approche Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Notre approche photographique</h2>
              <p className="text-muted-foreground mb-4">
                Nous croyons que la photographie va au-delà de la simple capture d'images. Il s'agit de saisir des émotions, des relations et des moments qui racontent votre histoire unique.
              </p>
              <p className="text-muted-foreground mb-4">
                Notre équipe de photographes expérimentés travaille discrètement, en s'assurant qu'aucun moment spécial ne passe inaperçu. Nous nous fondons dans le décor tout en documentant votre journée avec une précision artistique et une attention aux détails.
              </p>
              <p className="text-muted-foreground">
                Chaque image est soigneusement sélectionnée et éditée pour refléter l'atmosphère et les émotions de votre événement, créant ainsi un récit visuel que vous chérirez pour les années à venir.
              </p>
            </div>
            <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?auto=format&fit=crop&w=600&q=80" 
                  alt="Jeunes mariés en séance photo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605146768851-eda79da39897?auto=format&fit=crop&w=600&q=80" 
                  alt="Mariage élégant" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?auto=format&fit=crop&w=600&q=80" 
                  alt="Famille heureuse" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=600&q=80" 
                  alt="Couple avec enfant" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-medium">Ce que disent nos clients</h2>
            <p className="mt-4 text-muted-foreground">
              Des retours d'expérience de ceux qui ont fait confiance à nos services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass rounded-lg p-6 animate-in">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-4">
                "L'équipe a capturé notre journée de mariage parfaitement ! Les photos et la vidéo sont magnifiques, et nous les chérirons pour toujours. Leur professionnalisme et leur attention aux détails ont rendu cette journée encore plus spéciale."
              </blockquote>
              <cite className="block font-medium not-italic">
                — Sophie & Thomas, Mariés en juin 2023
              </cite>
            </div>
            
            <div className="glass rounded-lg p-6 animate-in delay-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-4">
                "Les photos de notre réunion de famille sont incroyables ! Capture Tales a su immortaliser tous ces petits moments précieux entre trois générations. Leur approche naturelle et non-intrusive a permis à tout le monde de se sentir à l'aise."
              </blockquote>
              <cite className="block font-medium not-italic">
                — Marie Dupont, Réunion familiale
              </cite>
            </div>
            
            <div className="glass rounded-lg p-6 animate-in delay-200">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-4">
                "Les photos de baptême de notre fils sont absolument parfaites ! L'équipe a su capturer l'essence de cette journée spéciale avec tant d'élégance et de sensibilité. Nous sommes ravis du résultat et recommandons vivement leurs services."
              </blockquote>
              <cite className="block font-medium not-italic">
                — Pierre & Emma, Baptême
              </cite>
            </div>
          </div>
        </div>
      </section>
      
      {/* Notre équipement */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-medium">Équipement professionnel</h2>
            <p className="mt-4 text-muted-foreground">
              Nous utilisons uniquement du matériel haut de gamme pour garantir des résultats exceptionnels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass p-6 rounded-lg text-center animate-in">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Appareils photo</h3>
              <p className="text-muted-foreground">
                Appareils haut de gamme Canon et Sony pour des images de qualité exceptionnelle
              </p>
            </div>
            
            <div className="glass p-6 rounded-lg text-center animate-in delay-100">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Caméras vidéo</h3>
              <p className="text-muted-foreground">
                Équipement vidéo 4K pour des films cinématiques de grande qualité
              </p>
            </div>
            
            <div className="glass p-6 rounded-lg text-center animate-in delay-200">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Éclairage</h3>
              <p className="text-muted-foreground">
                Systèmes d'éclairage professionnels pour des résultats parfaits en toutes conditions
              </p>
            </div>
            
            <div className="glass p-6 rounded-lg text-center animate-in delay-300">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Post-production</h3>
              <p className="text-muted-foreground">
                Logiciels professionnels pour l'édition et la retouche de vos images et vidéos
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
