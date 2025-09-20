import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, Target, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-amour-divin.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Section Hero */}
      <section className="relative py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Ensemble, construisons un monde de <span className="text-white font-bold">dignité</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Depuis 2012, l'ONG Amour Divin œuvre en Côte d'Ivoire pour lutter contre la pauvreté, 
                promouvoir la santé et accompagner les plus vulnérables vers l'autonomie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-soft"
                >
                  <Link to="/projets">Découvrir nos actions</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/80 text-white bg-white/10 hover:bg-white hover:text-primary backdrop-blur-sm"
                >
                  Faire un don
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Actions humanitaires de l'ONG Amour Divin en Côte d'Ivoire"
                className="rounded-lg shadow-hero w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos missions */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nos Missions Principales</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quatre axes d'intervention pour transformer les vies et renforcer les communautés
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Santé & Prévention",
                description: "Prévention VIH/SIDA, prise en charge PVVIH, dépistage cancer et diabète"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Autonomisation",
                description: "Formation à l'entrepreneuriat, activités génératrices de revenus pour femmes et jeunes"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Protection & Soutien",
                description: "Accompagnement des OEV, lutte contre les violences basées sur le genre"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Développement",
                description: "Agriculture durable, hygiène, assainissement et protection de l'environnement"
              }
            ].map((mission, index) => (
              <Card key={index} className="p-6 card-gradient shadow-card hover:shadow-soft transition-smooth group">
                <div className="text-primary mb-4 group-hover:scale-110 transition-bounce">
                  {mission.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{mission.title}</h3>
                <p className="text-muted-foreground">{mission.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Vision */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Notre Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-primary">Un monde où toutes les personnes vivent dignement et sont acceptées dans la société.</strong>
              </p>
              <p className="text-muted-foreground">
                Depuis notre création le 28 juillet 2012, nous croyons fermement que chaque individu mérite 
                respect, dignité et opportunités. Notre approche multidimensionnelle nous permet d'agir 
                concrètement sur les causes profondes de la pauvreté et de l'exclusion.
              </p>
              <Link to="/mission">
                <Button className="hero-gradient text-primary-foreground shadow-soft hover:shadow-hero transition-smooth">
                  En savoir plus sur notre mission
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "12+", label: "Années d'expérience" },
                { number: "1000+", label: "Bénéficiaires aidés" },
                { number: "15+", label: "Projets réalisés" },
                { number: "6", label: "Partenaires actifs" }
              ].map((stat, index) => (
                <Card key={index} className="p-6 text-center card-gradient shadow-card">
                  <div className="text-2xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Agir avec nous */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Agir Ensemble</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Votre soutien peut transformer des vies. Rejoignez-nous dans notre mission 
            pour un monde plus juste et solidaire.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="hero-gradient text-primary-foreground shadow-soft hover:shadow-hero transition-smooth"
            >
              Faire un don maintenant
            </Button>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Devenir bénévole
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;