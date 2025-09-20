import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Sprout, Shield, Building, GraduationCap } from "lucide-react";
import healthImage from "@/assets/health-education.jpg";
import womenImage from "@/assets/women-entrepreneurship.jpg";
import agricultureImage from "@/assets/agriculture-training.jpg";

const Projects = () => {
  const strategies = [
    {
      title: "Offre de services de prévention sur les violences basées sur le genre",
      icon: <Shield className="w-6 h-6" />,
      services: [
        "Soins et soutien aux survivants des violences basées sur le genre",
        "Sensibilisation sur les violences basées sur le genre"
      ],
      image: healthImage,
      status: "En cours"
    },
    {
      title: "Prise en charge des orphelins et enfants vulnérables (OEV)",
      icon: <Heart className="w-6 h-6" />,
      services: [
        "Parrainage des OEV",
        "Offre de services de soins et soutien aux OEV"
      ],
      image: healthImage,
      status: "Actif"
    },
    {
      title: "Entrepreneuriat des Jeunes",
      icon: <GraduationCap className="w-6 h-6" />,
      services: [
        "Formation des jeunes sur l'entrepreneuriat",
        "Formation et kits d'accompagnement des sans-emploi",
        "Groupe d'échange et de partage des expériences",
        "Financement du meilleur projet entrepreneurial"
      ],
      image: womenImage,
      status: "En cours"
    },
    {
      title: "Lutte contre la pauvreté",
      icon: <Sprout className="w-6 h-6" />,
      services: [
        "Offre de services de production végétale",
        "Formation des producteurs sur les nouvelles techniques",
        "Appui au renforcement des capacités des producteurs",
        "Création de ferme de production pastorale (projet pilote)"
      ],
      image: agricultureImage,
      status: "En développement"
    },
    {
      title: "Hygiène et assainissement",
      icon: <Building className="w-6 h-6" />,
      services: [
        "Sensibilisation sur l'hygiène et la propreté",
        "Formation et sensibilisation sur l'environnement",
        "Réalisation de latrines ventilées à base communautaire"
      ],
      image: healthImage,
      status: "Planifié"
    },
    {
      title: "Offre de services de prévention sur le VIH",
      icon: <Heart className="w-6 h-6" />,
      services: [
        "Sensibilisation et référence pour le conseil et dépistage",
        "Sensibilisation et référence des femmes enceintes vers les services de CPN",
        "Conseil et dépistage dans la communauté",
        "Organisation de focus groups sur le VIH/Sida"
      ],
      image: healthImage,
      status: "Actif"
    }
  ];

  const soinsVIH = [
    "Suivi actif des rendez-vous des patients",
    "Suivi accompagnement des PVVIH dans la communauté",
    "Soutien psychosocial aux PVVIH",
    "Mise en place et animation de groupes d'auto support",
    "Soutien au renforcement économique des ménages des PVVIH",
    "Soutien à l'observance du traitement ARV",
    "Recherche des perdus de vue et leur réinsertion dans les soins",
    "Évaluation nutritionnelle et conseil nutritionnel",
    "Service de Santé Positive Dignité Prévention"
  ];

  const autresMaladies = [
    "Sensibilisation des jeunes filles et femmes sur la prévention du cancer du col",
    "Vaccination contre le cancer du col des jeunes filles et femmes",
    "Prise en Charge Intégrée des Maladies de l'Enfant (PCIME)",
    "Dépistage gratuit du diabète et de l'hypertension artérielle",
    "Promotion de l'offre de dépistage de la tuberculose"
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Actif": return "bg-accent text-accent-foreground";
      case "En cours": return "bg-primary text-primary-foreground";
      case "En développement": return "bg-secondary text-secondary-foreground";
      case "Planifié": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-6">Nos Projets & Actions</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez nos stratégies d'intervention concrètes et les actions que nous menons 
            pour transformer les vies et renforcer les communautés en Côte d'Ivoire.
          </p>
        </div>

        {/* Stratégies principales */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Nos Stratégies d'Intervention</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {strategies.map((strategy, index) => (
              <Card key={index} className="overflow-hidden card-gradient shadow-card hover:shadow-soft transition-smooth">
                <div className="relative h-48">
                  <img 
                    src={strategy.image} 
                    alt={strategy.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={getStatusColor(strategy.status)}>{strategy.status}</Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-primary mr-3">
                      {strategy.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{strategy.title}</h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {strategy.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Services de soins VIH */}
        <section className="mb-16 section-gradient py-12 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Soins et Soutien aux PVVIH</h2>
            <p className="text-muted-foreground">Un accompagnement complet pour les personnes vivant avec le VIH</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {soinsVIH.map((service, index) => (
              <Card key={index} className="p-6 card-gradient shadow-card hover:shadow-soft transition-smooth group">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-bounce">
                    <Users className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <p className="text-foreground text-sm">{service}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Autres maladies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Prise en Charge d'Autres Maladies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {autresMaladies.map((service, index) => (
              <Card key={index} className="p-6 card-gradient shadow-card hover:shadow-soft transition-smooth">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <p className="text-foreground">{service}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Objectifs de développement */}
        <section className="mb-16">
          <Card className="p-8 hero-gradient text-primary-foreground">
            <h2 className="text-2xl font-bold mb-6">Nos Objectifs de Développement</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Building className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Cabinet de Santé</h3>
                <p className="text-sm text-primary-foreground/90">
                  Création d'un cabinet de santé social pour améliorer l'accès aux soins
                </p>
              </div>
              
              <div className="text-center">
                <GraduationCap className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Centre de Formation</h3>
                <p className="text-sm text-primary-foreground/90">
                  Centre de formation technique et professionnel pour l'autonomisation
                </p>
              </div>
              
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Activités Génératrices</h3>
                <p className="text-sm text-primary-foreground/90">
                  Formation et installation des femmes aux activités génératrices de revenus
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Call to action */}
        <section className="text-center">
          <Card className="p-8 bg-secondary text-secondary-foreground">
            <h2 className="text-2xl font-bold mb-4">Soutenez Nos Actions</h2>
            <p className="text-lg mb-6">
              Votre contribution peut faire la différence dans la vie de nombreuses personnes. 
              Rejoignez-nous dans nos missions de transformation sociale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="hero-gradient text-primary-foreground shadow-soft hover:shadow-hero transition-smooth">
                Faire un don
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Devenir partenaire
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Projects;