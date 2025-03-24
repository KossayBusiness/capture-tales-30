
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PricingTable from '@/components/ui/PricingTable';
import Contact from '@/components/home/Contact';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Wedding = () => {
  const weddingPackages = [
    {
      id: 'basic-wedding',
      title: 'Forfait Mariage Essentiel',
      price: '999€',
      description: 'Parfait pour les cérémonies intimes et simples.',
      features: [
        '4 heures de couverture',
        '100-200 photos retouchées',
        'Vidéo documentaire de la cérémonie',
        'Galerie en ligne sécurisée',
        'Livraison numérique'
      ]
    },
    {
      id: 'standard-wedding',
      title: 'Forfait Mariage Classique',
      price: '1 899€',
      description: 'Notre choix le plus populaire pour une couverture complète.',
      features: [
        '6 heures de couverture',
        '150-300 photos retouchées',
        'Vidéo documentaire du mariage',
        'Séance photo professionnelle (2 heures)',
        'Galerie en ligne avec options de partage',
        'Livraison numérique'
      ],
      isPopular: true
    },
    {
      id: 'premium-wedding',
      title: 'Forfait Mariage Premium',
      price: '2 899€',
      description: 'Une couverture complète pour votre journée spéciale.',
      features: [
        '8 heures de couverture',
        '300-500 photos retouchées',
        'Vidéo documentaire du mariage',
        'Séance photo professionnelle (2 heures)',
        'Vidéo teaser (montage des meilleurs moments)',
        'Couverture des préparatifs',
        'Album photo de luxe (30 pages)',
        'Galerie en ligne avec options de partage',
        'Livraison numérique premium'
      ]
    }
  ];

  const testimonials = [
    {
      name: "Marie & Thomas",
      quote: "L'équipe a capturé l'essence même de notre journée. Les photos sont magnifiques et rendent parfaitement l'émotion que nous avons ressentie.",
      image: "https://images.unsplash.com/photo-1510265236892-329bfd7de7a1?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Sophie & Jean",
      quote: "Des professionnels attentifs et discrets qui ont su capturer tous les moments importants sans jamais s'imposer. Le résultat est exceptionnel !",
      image: "https://images.unsplash.com/photo-1544717301-9cdcb1f5940f?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Laura & Alex",
      quote: "Nous sommes enchantés par notre album de mariage. Chaque photo raconte une histoire et nous permet de revivre cette journée magique.",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Production de Mariage | Capture Tales</title>
        <meta name="description" content="Services professionnels de photographie et vidéographie de mariage pour immortaliser votre journée spéciale." />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center brightness-[0.3] -z-10" />
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 animate-in">
              Production de Mariage
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-in delay-100">
              Immortalisez chaque moment de votre journée spéciale
            </p>
            <p className="text-lg opacity-80 animate-in delay-200">
              Des cérémonies intimes aux grandes célébrations, nous capturons les émotions, les détails et les moments inoubliables de votre mariage avec professionnalisme et délicatesse.
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
            <div>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Des souvenirs qui durent toute une vie</h2>
              <p className="text-muted-foreground mb-4">
                Votre mariage est l'un des moments les plus importants de votre vie. Nous nous consacrons à capturer chaque souvenir précieux, de l'anticipation nerveuse avant la cérémonie jusqu'à la célébration joyeuse qui suit.
              </p>
              <p className="text-muted-foreground mb-4">
                Notre équipe de photographes et vidéographes expérimentés travaille avec discrétion, s'assurant qu'aucun moment spécial ne passe inaperçu. Nous nous fondons dans l'arrière-plan tout en documentant votre journée avec une précision artistique et une attention aux détails.
              </p>
              <p className="text-muted-foreground">
                Chaque mariage est unique, et nous adaptons notre approche pour raconter votre histoire d'amour distinctive à travers des images authentiques et émotionnelles.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80" 
                  alt="Cérémonie de mariage" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80" 
                  alt="Couple de mariés" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80" 
                  alt="Préparatifs de la mariée" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&w=600&q=80" 
                  alt="Réception de mariage" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-medium">Notre Approche</h2>
            <p className="mt-4 text-muted-foreground">
              Une méthode éprouvée pour capturer l'essence de votre journée spéciale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass rounded-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Préparation Minutieuse</h3>
              <p className="text-muted-foreground">
                Nous planifions chaque détail à l'avance, étudions le lieu, et créons un plan de couverture personnalisé pour votre journée.
              </p>
            </div>
            
            <div className="glass rounded-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Capture Discrète</h3>
              <p className="text-muted-foreground">
                Nous nous faisons oublier pour capturer des moments authentiques sans perturber le déroulement naturel de votre journée.
              </p>
            </div>
            
            <div className="glass rounded-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Édition Artistique</h3>
              <p className="text-muted-foreground">
                Chaque photo et vidéo est soigneusement éditée pour sublimer la beauté naturelle de votre journée, avec une attention particulière aux couleurs et à l'ambiance.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Equipment Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1520549233664-03f65c1d1327?auto=format&fit=crop&w=800&q=80" 
                alt="Équipement professionnel" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Équipement Professionnel</h2>
              <p className="text-muted-foreground mb-4">
                Nous utilisons uniquement du matériel haut de gamme pour garantir des images de la plus haute qualité, même dans des conditions d'éclairage difficiles.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Appareils photo plein format Sony Alpha et Canon EOS
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Optiques professionnelles lumineuses pour des images nettes même en basse lumière
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Stabilisateurs pour des vidéos fluides et professionnelles
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Systèmes d'éclairage avancés pour des portraits parfaits
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Drones pour des prises de vue aériennes spectaculaires (selon autorisation)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Table */}
      <PricingTable 
        title="Nos Forfaits Mariage" 
        subtitle="Choisissez le forfait parfait pour votre journée spéciale" 
        packages={weddingPackages} 
      />
      
      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-medium">Ce que disent nos clients</h2>
            <p className="mt-4 text-muted-foreground">
              Des couples satisfaits partagent leur expérience avec nous
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="py-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="glass rounded-lg p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                          <img src={testimonial.image} alt={testimonial.name} className="h-full w-full object-cover" />
                        </div>
                        <div>
                          <h3 className="font-medium">{testimonial.name}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground italic flex-grow">"{testimonial.quote}"</p>
                      <div className="flex mt-4">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="static transform-none mr-2" />
                <CarouselNext className="static transform-none" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-medium">Questions Fréquentes</h2>
            <p className="mt-4 text-muted-foreground">
              Trouvez des réponses aux questions courantes sur nos services de production de mariage
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto glass rounded-lg divide-y divide-border">
            <div className="p-6">
              <h3 className="text-xl font-medium">Combien de temps à l'avance dois-je réserver ?</h3>
              <p className="mt-2 text-muted-foreground">Nous recommandons de réserver au moins 6 à 12 mois à l'avance, surtout pour les dates en haute saison de mariage (mai-octobre). Les dates populaires se remplissent rapidement.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium">Quel est le délai de livraison des photos et vidéos ?</h3>
              <p className="mt-2 text-muted-foreground">Vous recevrez vos photos éditées dans un délai de 4 à 6 semaines après votre mariage. Les vidéos prennent généralement 6 à 8 semaines pour l'édition complète et la livraison.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium">Pouvons-nous personnaliser un forfait ?</h3>
              <p className="mt-2 text-muted-foreground">Absolument ! Nous comprenons que chaque mariage est unique. Contactez-nous pour discuter de vos besoins spécifiques, et nous créerons un forfait personnalisé juste pour vous.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium">Voyagez-vous pour des mariages à destination ?</h3>
              <p className="mt-2 text-muted-foreground">Oui, avec plaisir ! Des frais de déplacement supplémentaires peuvent s'appliquer en fonction de la destination. Veuillez nous contacter pour un devis personnalisé pour votre mariage à destination.</p>
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
