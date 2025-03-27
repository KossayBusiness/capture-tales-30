
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PricingTable from '@/components/ui/PricingTable';
import Contact from '@/components/home/Contact';
import { Button } from '@/components/ui/button';

const Media = () => {
  const portraitPackages = [
    {
      id: 'basic-portrait',
      title: 'Forfait Portrait Essentiel',
      price: '299€',
      description: 'Idéal pour les portraits individuels ou en couple.',
      features: [
        '1 heure de séance photo',
        '20-30 photos retouchées',
        '1 lieu au choix',
        'Galerie en ligne privée',
        'Livraison numérique'
      ]
    },
    {
      id: 'standard-portrait',
      title: 'Forfait Portrait Famille',
      price: '499€',
      description: 'Parfait pour les familles et les petits groupes.',
      features: [
        '2 heures de séance photo',
        '40-60 photos retouchées',
        '2 lieux ou tenues différentes',
        'Conseils préalables sur les tenues',
        'Galerie en ligne avec options de partage',
        'Livraison numérique + 5 tirages 20x30cm'
      ],
      isPopular: true
    },
    {
      id: 'premium-portrait',
      title: 'Forfait Portrait Premium',
      price: '799€',
      description: 'Une expérience complète et luxueuse pour des portraits exceptionnels.',
      features: [
        '3 heures de séance photo',
        '60-80 photos retouchées',
        'Multiples lieux et tenues',
        'Séance de consultation préalable',
        'Maquillage professionnel inclus',
        'Album photo (20 pages)',
        'Galerie en ligne avec options de partage',
        'Livraison numérique + 10 tirages haute qualité'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Séances Portraits | Capture Tales</title>
        <meta name="description" content="Services professionnels de photographie de portrait qui capturent l'essence et la personnalité de chacun." />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center brightness-[0.3] -z-10" />
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 animate-in">
              Séances Portraits
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-in delay-100">
              Des portraits qui révèlent votre personnalité
            </p>
            <p className="text-lg opacity-80 animate-in delay-200">
              Nos séances de portraits professionnels capturent l'essence de chaque personne, famille ou groupe, créant des images intemporelles que vous chérirez pendant des années.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <a href="#contact">Réserver une séance</a>
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
              <h2 className="text-3xl md:text-4xl font-medium mb-6">L'Art du Portrait</h2>
              <p className="text-muted-foreground mb-4">
                Un portrait réussi va bien au-delà d'une simple photo. C'est une œuvre d'art qui capture l'essence même de la personne, sa personnalité, ses émotions et son histoire.
              </p>
              <p className="text-muted-foreground mb-4">
                Que vous souhaitiez des portraits individuels, en couple, en famille ou même professionnels, notre approche personnalisée garantit que chaque séance est unique et adaptée à vos besoins spécifiques.
              </p>
              <p className="text-muted-foreground">
                Nous prenons le temps de vous mettre à l'aise, de comprendre ce qui vous rend unique, et de créer un environnement où vous pouvez vous exprimer naturellement devant l'objectif.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80" 
                  alt="Portrait individuel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" 
                  alt="Portrait de famille" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1511895571950-8b475cf2ed35?auto=format&fit=crop&w=600&q=80" 
                  alt="Portrait de couple" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?auto=format&fit=crop&w=600&q=80" 
                  alt="Portrait professionnel" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Types of Portraits */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-medium">Nos Types de Séances</h2>
            <p className="mt-4 text-muted-foreground">
              Des portraits adaptés à chaque occasion et chaque besoin
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="glass rounded-lg overflow-hidden shadow-lg">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=600&q=80" 
                  alt="Portraits Individuels" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3">Portraits Individuels</h3>
                <p className="text-muted-foreground">
                  Des séances personnalisées qui mettent en valeur votre personnalité et votre style unique.
                </p>
              </div>
            </div>
            
            <div className="glass rounded-lg overflow-hidden shadow-lg">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519417688547-8471366ea2e5?auto=format&fit=crop&w=600&q=80" 
                  alt="Portraits de Couple" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3">Portraits de Couple</h3>
                <p className="text-muted-foreground">
                  Célébrez votre amour avec des photos qui capturent votre complicité et votre connexion.
                </p>
              </div>
            </div>
            
            <div className="glass rounded-lg overflow-hidden shadow-lg">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" 
                  alt="Portraits de Famille" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3">Portraits de Famille</h3>
                <p className="text-muted-foreground">
                  Des photos de famille naturelles et joyeuses qui reflètent votre dynamique unique.
                </p>
              </div>
            </div>
            
            <div className="glass rounded-lg overflow-hidden shadow-lg">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573497161161-c3e73707e25c?auto=format&fit=crop&w=600&q=80" 
                  alt="Portraits Professionnels" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3">Portraits Professionnels</h3>
                <p className="text-muted-foreground">
                  Des portraits élégants pour votre profil professionnel, CV ou réseaux sociaux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-medium">Notre Processus</h2>
            <p className="mt-4 text-muted-foreground">
              Une expérience simple et agréable du début à la fin
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-medium text-primary">1</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Consultation</h3>
                <p className="text-muted-foreground">
                  Nous discutons de vos objectifs, préférences et attentes pour la séance. C'est aussi le moment de planifier les tenues et les lieux.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-medium text-primary">2</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Séance Photo</h3>
                <p className="text-muted-foreground">
                  Lors de la séance, nous vous guidons pour obtenir des poses naturelles tout en vous mettant à l'aise pour révéler votre personnalité authentique.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-medium text-primary">3</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Sélection et Édition</h3>
                <p className="text-muted-foreground">
                  Nous sélectionnons et éditons soigneusement les meilleures photos pour mettre en valeur chaque sujet avec une attention particulière aux détails.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-medium text-primary">4</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Livraison</h3>
                <p className="text-muted-foreground">
                  Vos photos finales vous sont livrées dans une galerie en ligne élégante, avec des options de téléchargement et de commande d'impressions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Table */}
      <PricingTable 
        title="Nos Forfaits Portraits" 
        subtitle="Choisissez le forfait idéal pour votre séance photo" 
        packages={portraitPackages} 
      />
      
      {/* Gallery / Portfolio */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-medium">Notre Portfolio</h2>
            <p className="mt-4 text-muted-foreground">
              Découvrez quelques-uns de nos portraits préférés
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="overflow-hidden rounded-lg shadow-lg aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80" 
                alt="Portrait homme" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&w=500&q=80" 
                alt="Portrait femme" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80" 
                alt="Portrait jeune femme" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=500&q=80" 
                alt="Portrait jeune homme" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80" 
                alt="Portrait famille" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?auto=format&fit=crop&w=500&q=80" 
                alt="Portrait couple" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1559717865-a99cac1c95d8?auto=format&fit=crop&w=500&q=80" 
                alt="Portrait enfant" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1509955252650-8f558c2b8735?auto=format&fit=crop&w=500&q=80" 
                alt="Portrait famille" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-medium">Questions Fréquentes</h2>
            <p className="mt-4 text-muted-foreground">
              Trouvez des réponses aux questions courantes sur nos séances portraits
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto glass rounded-lg divide-y divide-border">
            <div className="p-6">
              <h3 className="text-xl font-medium">Comment se préparer pour une séance portrait ?</h3>
              <p className="mt-2 text-muted-foreground">Nous vous fournirons un guide complet de préparation après votre réservation. En général, choisissez des tenues qui vous mettent en valeur, évitez les motifs trop chargés, et venez reposé pour que votre naturel puisse s'exprimer.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium">Peut-on faire des séances en extérieur et en studio ?</h3>
              <p className="mt-2 text-muted-foreground">Absolument ! Nous offrons des séances en extérieur (parcs, plages, zones urbaines) ainsi qu'en studio. Chaque environnement crée une ambiance différente pour vos portraits.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium">Combien de temps dure une séance portrait ?</h3>
              <p className="mt-2 text-muted-foreground">La durée dépend du forfait choisi, mais généralement une séance individuelle dure environ 1 heure, tandis qu'une séance famille peut durer jusqu'à 2-3 heures pour permettre des pauses et différentes compositions.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium">Les retouches sont-elles incluses ?</h3>
              <p className="mt-2 text-muted-foreground">Oui, toutes nos photos sont soigneusement éditées pour optimiser la couleur, le contraste et la luminosité. Les retouches de base (correction de peau, suppression d'imperfections temporaires) sont incluses. Des retouches avancées sont disponibles en option.</p>
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
