import { Card } from "@/components/ui/card";
import { User, Phone, Mail } from "lucide-react";
import teamImage from "@/assets/team-meeting.jpg";

const Team = () => {
  const equipe = [
    {
      nom: "ABIMBADE FRANCIS",
      poste: "PRÉSIDENT",
      description: "Leader visionnaire de l'organisation, il guide la stratégie globale et les orientations de l'ONG."
    },
    {
      nom: "Dr OLANIYAN EBENEZER",
      poste: "VICE PRÉSIDENT",
      description: "Médecin engagé, il supervise les programmes de santé et apporte son expertise médicale."
    },
    {
      nom: "KONE KLINTCHO",
      poste: "SECRÉTARIAT",
      description: "Responsable de la coordination administrative et de la communication interne."
    },
    {
      nom: "Mme ZADI EMELINE",
      poste: "RESPONSABLE COMPTABILITÉ",
      description: "Garante de la transparence financière et de la bonne gestion des ressources."
    },
    {
      nom: "COULIBALY FATOU",
      poste: "RESPONSABLE COMMUNICATION",
      description: "En charge de la visibilité de l'ONG et des relations avec les médias et partenaires."
    },
    {
      nom: "Mr Koffi Emanuel",
      poste: "RESPONSABLE PROJET",
      description: "Supervise la mise en œuvre des projets et assure leur suivi-évaluation."
    },
    {
      nom: "OLANIYAN SAMSON",
      poste: "RESPONSABLE DÉVELOPPEMENT ET FORMATION",
      description: "Développe les capacités de l'équipe et conçoit les programmes de formation."
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-6">Notre Équipe</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Une équipe dévouée et expérimentée, unie par la passion de servir les plus vulnérables 
            et de construire un avenir meilleur pour tous.
          </p>
          
          <div className="relative max-w-4xl mx-auto">
            <img 
              src={teamImage} 
              alt="Équipe de l'ONG Amour Divin en réunion de travail"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-hero"
            />
            <div className="absolute inset-0 bg-primary/20 rounded-lg"></div>
          </div>
        </div>

        {/* Organigramme */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Structure Organisationnelle</h2>
          
          {/* Président */}
          <div className="flex justify-center mb-8">
            <Card className="p-6 max-w-md text-center hero-gradient text-primary-foreground shadow-hero">
              <div className="w-16 h-16 bg-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{equipe[0].nom}</h3>
              <p className="text-primary-glow font-semibold mb-2">{equipe[0].poste}</p>
              <p className="text-sm">{equipe[0].description}</p>
            </Card>
          </div>

          {/* Vice-Président */}
          <div className="flex justify-center mb-12">
            <Card className="p-6 max-w-md text-center bg-secondary text-secondary-foreground shadow-card">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2">{equipe[1].nom}</h3>
              <p className="text-primary font-semibold mb-2">{equipe[1].poste}</p>
              <p className="text-sm">{equipe[1].description}</p>
            </Card>
          </div>

          {/* Responsables départements */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipe.slice(2).map((membre, index) => (
              <Card key={index} className="p-6 text-center card-gradient shadow-card hover:shadow-soft transition-smooth group">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                  <User className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{membre.nom}</h3>
                <p className="text-primary font-semibold mb-3">{membre.poste}</p>
                <p className="text-sm text-muted-foreground">{membre.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Stagiaires et Bénévoles */}
        <section className="mb-16 section-gradient py-12 rounded-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-6">Stagiaires & Bénévoles</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Notre équipe s'enrichit régulièrement de stagiaires motivés et de bénévoles dévoués 
              qui apportent leur énergie et leurs compétences à nos missions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Stagiaires",
                  description: "Étudiants en fin de cycle qui contribuent aux projets tout en développant leur expérience professionnelle",
                  count: "3 postes"
                },
                {
                  title: "Bénévoles actifs",
                  description: "Personnes engagées qui donnent de leur temps pour soutenir nos actions sur le terrain",
                  count: "15+ membres"
                },
                {
                  title: "Experts consultants",
                  description: "Professionnels qui nous accompagnent ponctuellement selon leurs domaines d'expertise",
                  count: "8 consultants"
                }
              ].map((group, index) => (
                <Card key={index} className="p-6 card-gradient shadow-card">
                  <h3 className="font-semibold text-foreground mb-3">{group.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{group.description}</p>
                  <div className="text-primary font-semibold">{group.count}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact de l'équipe */}
        <section>
          <Card className="p-8 bg-primary text-primary-foreground">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-4">Contactez Notre Équipe</h2>
              <p className="text-primary-foreground/90">
                Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <Phone className="w-8 h-8 mx-auto mb-3" />
                <p className="font-semibold mb-2">Téléphone</p>
                <p className="text-sm">08 37 52 99<br />05 23 20 19<br />40 38 45 38</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 mx-auto mb-3" />
                <p className="font-semibold mb-2">Email</p>
                <p className="text-sm">conctactongamdi@gmail.com</p>
              </div>
              <div className="text-center">
                <User className="w-8 h-8 mx-auto mb-3" />
                <p className="font-semibold mb-2">Siège social</p>
                <p className="text-sm">Bouaké, quartier Nimbo<br />01 BP 231 Bouaké 01</p>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Team;