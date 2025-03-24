
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PricingTable from '@/components/ui/PricingTable';
import Contact from '@/components/home/Contact';
import { Button } from '@/components/ui/button';

const Product = () => {
  const eventsPackages = [
    {
      id: 'basic-event',
      title: 'Forfait Événement Essentiel',
      price: '799€',
      description: 'Idéal pour les petits événements familiaux.',
      features: [
        '4 heures de couverture',
        '100-200 photos retouchées',
        'Vidéo résumé de l\'événement (1-2 min)',
        'Galerie en ligne sécurisée',
        'Livraison numérique'
      ]
    },
    {
      id: 'standard-event',
      title: 'Forfait Événement Classique',
      price: '1 499€',
      description: 'Parfait pour les célébrations importantes.',
      features: [
        '6 heures de couverture',
        '150-300 photos retouchées',
        'Vidéo documentaire de l\'événement (3-5 min)',
        'Photos des moments clés et des groupes',
        'Galerie en ligne avec options de partage',
        'Livraison numérique'
      ],
      isPopular: true
    },
    {
      id: 'premium-event',
      title: 'Forfait Événement Premium',
      price: '2 299€',
      description: 'Une couverture complète pour vos occasions spéciales.',
      features: [
        '8 heures de couverture',
        '300-500 photos retouchées',
        'Vidéo documentaire de l\'événement (5-8 min)',
        'Photos des moments clés et des groupes',
        'Teaser pour les réseaux sociaux',
        'Album photo imprimé (25 pages)',
        'Galerie en ligne avec options de partage',
        'Livraison numérique premium'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Événements Familiaux | Capture Tales</title>
        <meta name="description" content="Services professionnels de photographie et vidéographie pour vos événements familiaux importants." />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center brightness-[0.3] -z-10" />
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 animate-in">
              Événements Familiaux
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-in delay-100">
              Immortalisez vos moments de bonheur en famille
            </p>
            <p className="text-lg opacity-80 animate-in delay-200">
              Anniversaires, baptêmes, réunions de famille ou autres célébrations. Nous immortalisons ces moments précieux pour que vous puissiez les chérir pour toujours.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <a href="#contact">Demander un devis</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=600&q=80" 
                    alt="Fête d'anniversaire" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&w=600&q=80" 
                    alt="Baptême" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80" 
                    alt="Réunion de famille" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80" 
                    alt="Célébration familiale" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Des souvenirs précieux pour toute la famille</h2>
              <p className="text-muted-foreground mb-4">
                Les moments passés en famille sont parmi les plus précieux de la vie. Qu'il s'agisse d'un baptême, d'un anniversaire, d'une réunion de famille ou d'une autre célébration importante, notre équipe est là pour capturer l'essence de ces événements.
              </p>
              <p className="text-muted-foreground mb-4">
                Nous savons à quel point il est important de pouvoir revivre ces instants de joie et d'émotion. C'est pourquoi nous nous efforçons de capturer non seulement l'événement lui-même, mais aussi les petits moments qui font la richesse de ces rassemblements : les rires, les larmes de joie, les étreintes chaleureuses.
              </p>
              <p className="text-muted-foreground">
                Notre approche discrète et professionnelle permet de documenter ces moments sans perturber le déroulement naturel de votre événement, vous permettant ainsi de profiter pleinement de ces instants précieux avec vos proches.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-medium">Nos Services pour Événements Familiaux</h2>
            <p className="mt-4 text-muted-foreground">
              Des solutions complètes pour tous types de célébrations familiales
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?auto=format&fit=crop&w=600&q=80" 
                  alt="Anniversaires" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3">Anniversaires</h3>
                <p className="text-muted-foreground">
                  Des photos et vidéos mémorables pour immortaliser ces jalons importants de la vie, qu'il s'agisse du premier anniversaire d'un enfant ou d'une célébration d'un événement marquant.
                </p>
              </div>
            </div>
            
            <div className="glass rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1595118828223-e2683f73a470?auto=format&fit=crop&w=600&q=80" 
                  alt="Baptêmes" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3">Baptêmes et Cérémonies</h3>
                <p className="text-muted-foreground">
                  Une couverture respectueuse et élégante des moments spirituels et émouvants de ces célébrations importantes pour vous et votre famille.
                </p>
              </div>
            </div>
            
            <div className="glass rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&w=600&q=80" 
                  alt="Réunions de famille" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3">Réunions de Famille</h3>
                <p className="text-muted-foreground">
                  Des souvenirs précieux de ces moments où plusieurs générations se rassemblent, avec une attention particulière aux interactions et aux moments de complicité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Pourquoi Nous Choisir</h2>
              <p className="text-muted-foreground mb-6">
                Nous comprenons l'importance de ces moments familiaux et mettons tout notre savoir-faire à votre service pour les immortaliser avec authenticité et émotion.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Expérience avec les Enfants</h3>
                    <p className="text-muted-foreground">Nous savons comment mettre à l'aise les plus jeunes et capturer leur spontanéité.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Discrétion Professionnelle</h3>
                    <p className="text-muted-foreground">Nous nous intégrons naturellement à votre événement sans perturber les moments importants.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Équipement Adapté</h3>
                    <p className="text-muted-foreground">Notre matériel professionnel nous permet de nous adapter à tous types d'environnements et de conditions d'éclairage.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Souvenirs Durables</h3>
                    <p className="text-muted-foreground">Nous créons des souvenirs qui traverseront les générations et renforceront les liens familiaux.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1564889996025-b8239c248a3c?auto=format&fit=crop&w=800&q=80" 
                alt="Famille heureuse" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Table */}
      <PricingTable 
        title="Nos Forfaits Événements" 
        subtitle="Choisissez le forfait idéal pour immortaliser vos moments en famille" 
        packages={eventsPackages} 
      />
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-medium">Questions Fréquentes</h2>
            <p className="mt-4 text-muted-foreground">
              Trouvez des réponses aux questions courantes sur nos services d'événements familiaux
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto glass rounded-lg divide-y divide-border">
            <div className="p-6">
              <h3 className="text-xl font-medium">Combien de temps à l'avance devons-nous réserver ?</h3>
              <p className="mt-2 text-muted-foreground">Nous recommandons de réserver au moins 1 à 3 mois à l'avance pour garantir notre disponibilité. Pour les événements pendant les périodes de fêtes, une réservation plus anticipée est conseillée.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium">Comment se déroule la séance le jour de l'événement ?</h3>
              <p className="mt-2 text-muted-foreground">Notre équipe arrive généralement une heure avant le début officiel pour s'installer et capturer les préparatifs. Nous travaillons ensuite discrètement tout au long de l'événement, en suivant un plan établi avec vous au préalable.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium">Peut-on demander des photos de groupe spécifiques ?</h3>
              <p className="mt-2 text-muted-foreground">Absolument ! Nous vous encourageons à nous fournir une liste des groupes familiaux que vous souhaitez photographier. Cela nous aide à nous assurer que tous les moments importants sont capturés.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium">Comment recevons-nous nos photos et vidéos ?</h3>
              <p className="mt-2 text-muted-foreground">Toutes les photos et vidéos sont livrées via une galerie en ligne privée que vous pouvez partager avec votre famille. Les forfaits incluant des albums physiques seront livrés à votre domicile.</p>
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
