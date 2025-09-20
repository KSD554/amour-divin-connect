import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Users, Heart, Handshake, Globe, Shield } from "lucide-react";

const Partners = () => {
  const partenaires = [
    {
      nom: "L'entreprise Abouake.net",
      type: "Partenaire Technologique",
      description: "Support technologique et solutions numériques pour nos projets",
      icon: <Building className="w-8 h-8" />,
      domaine: "Technologie"
    },
    {
      nom: "Le PEPFAR",
      type: "Partenaire International",
      description: "Programme d'urgence du Président américain pour la lutte contre le sida",
      icon: <Globe className="w-8 h-8" />,
      domaine: "Santé publique"
    },
    {
      nom: "L'association Grâce des églises baptistes",
      type: "Partenaire Religieux",
      description: "Collaboration dans les programmes communautaires et spirituels",
      icon: <Heart className="w-8 h-8" />,
      domaine: "Communautaire"
    },
    {
      nom: "L'église baptiste AGAPE",
      type: "Partenaire Local",
      description: "Soutien local et mobilisation communautaire",
      icon: <Users className="w-8 h-8" />,
      domaine: "Mobilisation"
    },
    {
      nom: "Les membres de l'ONG",
      type: "Soutien Interne",
      description: "Engagement et cotisations des membres actifs de l'organisation",
      icon: <Shield className="w-8 h-8" />,
      domaine: "Gouvernance"
    },
    {
      nom: "Les personnes de bonne volonté",
      type: "Bienfaiteurs",
      description: "Donateurs individuels et soutiens ponctuels de la communauté",
      icon: <Handshake className="w-8 h-8" />,
      domaine: "Philanthropie"
    }
  ];

  const typesPartenariat = [
    {
      title: "Partenariat Financier",
      description: "Soutien financier direct pour nos projets et programmes",
      avantages: ["Déduction fiscale", "Rapports d'impact", "Visibilité"]
    },
    {
      title: "Partenariat Technique",
      description: "Expertise et compétences spécialisées pour nos interventions",
      avantages: ["Formation d'équipes", "Transfert de compétences", "Innovation"]
    },
    {
      title: "Partenariat Stratégique",
      description: "Collaboration à long terme sur des objectifs communs",
      avantages: ["Synergie d'actions", "Réseautage", "Impact multiplié"]
    }
  ];

  const secteurs = [
    { nom: "Santé publique", count: "2 partenaires", couleur: "bg-primary" },
    { nom: "Technologie", count: "1 partenaire", couleur: "bg-secondary" },
    { nom: "Communautaire", count: "2 partenaires", couleur: "bg-accent" },
    { nom: "Philanthropie", count: "1+ donateurs", couleur: "bg-muted" }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-6">Nos Partenaires</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            "Nos partenaires et soutiens sans lesquels rien n'est possible"
            <br />
            Découvrez les organisations et personnes qui nous accompagnent dans notre mission.
          </p>
        </div>

        {/* Partenaires principaux */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Nos Partenaires & Soutiens</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partenaires.map((partenaire, index) => (
              <Card key={index} className="p-6 card-gradient shadow-card hover:shadow-soft transition-smooth group">
                <div className="text-primary mb-4 group-hover:scale-110 transition-bounce">
                  {partenaire.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{partenaire.nom}</h3>
                <div className="text-primary font-medium text-sm mb-3">{partenaire.type}</div>
                <p className="text-muted-foreground text-sm mb-4">{partenaire.description}</p>
                <div className="inline-block bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs">
                  {partenaire.domaine}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Répartition par secteurs */}
        <section className="mb-16 section-gradient py-12 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Répartition par Secteurs</h2>
            <p className="text-muted-foreground">Notre réseau diversifié couvre plusieurs domaines d'expertise</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {secteurs.map((secteur, index) => (
              <Card key={index} className="p-6 text-center card-gradient shadow-card">
                <div className={`w-16 h-16 ${secteur.couleur} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{secteur.nom}</h3>
                <p className="text-muted-foreground text-sm">{secteur.count}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Types de partenariat */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Types de Partenariat</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {typesPartenariat.map((type, index) => (
              <Card key={index} className="p-8 text-center card-gradient shadow-card hover:shadow-soft transition-smooth">
                <h3 className="text-xl font-semibold text-foreground mb-4">{type.title}</h3>
                <p className="text-muted-foreground mb-6">{type.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Avantages :</h4>
                  <ul className="space-y-2">
                    {type.avantages.map((avantage, avantageIndex) => (
                      <li key={avantageIndex} className="flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="text-sm text-muted-foreground">{avantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Impact des partenariats */}
        <section className="mb-16">
          <Card className="p-8 hero-gradient text-primary-foreground">
            <h2 className="text-3xl font-bold mb-6 text-center">L'Impact de Nos Partenariats</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">6+</div>
                <p className="text-primary-foreground/90">Partenaires actifs</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-primary-foreground/90">Des projets soutenus</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">12+</div>
                <p className="text-primary-foreground/90">Années de collaboration</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Grâce à nos partenariats solides, nous pouvons multiplier notre impact 
                et atteindre plus de bénéficiaires dans nos communautés.
              </p>
            </div>
          </Card>
        </section>

        {/* Devenir partenaire */}
        <section>
          <Card className="p-8 bg-secondary text-secondary-foreground">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Devenir Notre Partenaire</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Rejoignez notre réseau de partenaires engagés et contribuez à transformer 
                des vies en Côte d'Ivoire. Ensemble, nous pouvons faire plus.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
                <div className="p-6 bg-card rounded-lg">
                  <h3 className="font-semibold text-card-foreground mb-3">Pour les Entreprises</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Responsabilité sociale, visibilité positive, déductions fiscales
                  </p>
                  <Button variant="outline" className="w-full">
                    Partenariat Entreprise
                  </Button>
                </div>
                
                <div className="p-6 bg-card rounded-lg">
                  <h3 className="font-semibold text-card-foreground mb-3">Pour les Organisations</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Collaboration technique, synergie d'actions, impact multiplié
                  </p>
                  <Button variant="outline" className="w-full">
                    Partenariat Institutionnel
                  </Button>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="hero-gradient text-primary-foreground shadow-soft hover:shadow-hero transition-smooth"
              >
                Nous Contacter pour un Partenariat
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Partners;