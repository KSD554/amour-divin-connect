import { Card } from "@/components/ui/card";
import { Target, Eye, Heart, Shield, Users, Lightbulb } from "lucide-react";

const Mission = () => {
  const valeurs = [
    { icon: <Heart className="w-6 h-6" />, nom: "Respect", description: "Dignité et considération pour chaque personne" },
    { icon: <Shield className="w-6 h-6" />, nom: "Intégrité", description: "Transparence et honnêteté dans toutes nos actions" },
    { icon: <Users className="w-6 h-6" />, nom: "Égalité", description: "Accès équitable aux opportunités pour tous" },
    { icon: <Lightbulb className="w-6 h-6" />, nom: "Complémentarité", description: "Force collective par la diversité des compétences" },
    { icon: <Target className="w-6 h-6" />, nom: "Bonne gouvernance", description: "Gestion responsable et démocratique" }
  ];

  const missions = [
    "Prévenir les maladies (VIH/SIDA, IST, Cancer, ...)",
    "Lutter contre la pauvreté et le chômage",
    "Apporter un soutien psychosocial aux PVVIH, OEV, à leurs familles et aux survivantes des VBG",
    "Lutter contre la stigmatisation et la discrimination à l'endroit des PVVIH et des OEV",
    "Défendre et promouvoir les droits et la dignité des PVVIH, OEV et des survivantes des VBG",
    "Sensibiliser sur la gestion de l'environnement",
    "Sensibiliser et lutter contre la vulnérabilité socio-sanitaire"
  ];

  const objectifs = [
    "Créer des possibilités de revenus pour les pauvres",
    "Créer un cabinet de santé social",
    "Créer un centre de formation technique et professionnel",
    "Aider les filles, les former et installer les femmes aux activités génératrices de revenus",
    "Lutter contre la faim, la malnutrition, le paludisme, les maladies véhiculées par l'eau",
    "Lutter contre l'abus des drogues et de l'alcool, la violence et la brutalité",
    "Prévenir les grossesses non désirées, le VIH/SIDA et les autres maladies sexuellement transmissibles",
    "Œuvrer à la promotion de l'alphabétisation et des programmes d'éducation pour tous",
    "Organiser des séminaires de formation à l'entrepreneuriat pour les jeunes"
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-6">Mission & Vision</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez notre engagement pour un monde plus juste, les valeurs qui nous guident 
            et les objectifs concrets que nous poursuivons depuis 2012.
          </p>
        </div>

        {/* Vision */}
        <section className="mb-16">
          <Card className="p-8 hero-gradient text-primary-foreground shadow-hero">
            <div className="flex items-center mb-6">
              <Eye className="w-8 h-8 mr-4" />
              <h2 className="text-3xl font-bold">Notre Vision</h2>
            </div>
            <p className="text-xl leading-relaxed">
              Un monde où toutes les personnes vivent dignement et sont acceptées dans la société.
            </p>
          </Card>
        </section>

        {/* Missions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Nos Missions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {missions.map((mission, index) => (
              <Card key={index} className="p-6 card-gradient shadow-card hover:shadow-soft transition-smooth">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-semibold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-foreground">{mission}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Valeurs */}
        <section className="mb-16 section-gradient py-12 rounded-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nos Valeurs & Principes</h2>
            <p className="text-muted-foreground">Les fondements éthiques qui orientent toutes nos actions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {valeurs.map((valeur, index) => (
              <Card key={index} className="p-6 text-center card-gradient shadow-card hover:shadow-soft transition-smooth group">
                <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-bounce">
                  {valeur.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{valeur.nom}</h3>
                <p className="text-sm text-muted-foreground">{valeur.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Objectifs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Nos Objectifs</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {objectifs.slice(0, Math.ceil(objectifs.length / 2)).map((objectif, index) => (
                <Card key={index} className="p-4 card-gradient shadow-card hover:shadow-soft transition-smooth">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent-foreground font-semibold text-xs">{index + 1}</span>
                    </div>
                    <p className="text-foreground">{objectif}</p>
                  </div>
                </Card>
              ))}
            </div>
            <div className="space-y-4">
              {objectifs.slice(Math.ceil(objectifs.length / 2)).map((objectif, index) => (
                <Card key={index} className="p-4 card-gradient shadow-card hover:shadow-soft transition-smooth">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent-foreground font-semibold text-xs">{Math.ceil(objectifs.length / 2) + index + 1}</span>
                    </div>
                    <p className="text-foreground">{objectif}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Notre engagement */}
        <section>
          <Card className="p-8 bg-secondary text-secondary-foreground">
            <h2 className="text-2xl font-bold mb-4">Notre Engagement</h2>
            <p className="text-lg leading-relaxed mb-4">
              Le caractère multidimensionnel de la pauvreté est aujourd'hui unanimement reconnu. 
              À l'ONG Amour Divin, nous comprenons que lutter contre la pauvreté nécessite une approche 
              holistique qui prend en compte tous ses aspects.
            </p>
            <p className="leading-relaxed">
              Notre but principal est de contribuer à bâtir une Côte d'Ivoire forte. 
              Bâtir un pays fort est une démarche qui, par des changements de valeurs et d'attitudes 
              sur les plans individuel et collectif, contribue à la réduction de la pauvreté et des 
              inégalités dans le monde.
            </p>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Mission;