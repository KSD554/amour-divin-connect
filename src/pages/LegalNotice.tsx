import { Card } from "@/components/ui/card";
import { Shield, FileText, Scale, Eye } from "lucide-react";

const LegalNotice = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-6">Mentions Légales</h1>
          <p className="text-lg text-muted-foreground">
            Informations légales et réglementaires concernant l'ONG Amour Divin
          </p>
        </div>

        {/* Informations générales */}
        <section className="mb-12">
          <Card className="p-8 card-gradient shadow-card">
            <div className="flex items-center mb-6">
              <FileText className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-foreground">Informations Générales</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Dénomination</h3>
                <p className="text-muted-foreground">Organisation Non Gouvernementale AMOUR DIVIN</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Date de création</h3>
                <p className="text-muted-foreground">28 juillet 2012</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Statut juridique</h3>
                <p className="text-muted-foreground">
                  Organisation Non Gouvernementale inscrite au Journal Officiel de Côte d'Ivoire
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Siège social</h3>
                <p className="text-muted-foreground">
                  Bouaké, quartier Nimbo<br />
                  01 BP 231 Bouaké 01<br />
                  Côte d'Ivoire
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Contact</h3>
                <p className="text-muted-foreground">
                  Téléphone : 08 37 52 99 / 05 23 20 19 / 40 38 45 38<br />
                  Email : conctactongamdi@gmail.com
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Reconnaissance légale */}
        <section className="mb-12">
          <Card className="p-8 card-gradient shadow-card">
            <div className="flex items-center mb-6">
              <Shield className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-foreground">Reconnaissance Légale</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                L'ONG AMOUR DIVIN jouit d'une reconnaissance légale qui lui est conférée par :
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Un récépissé de la Préfecture administrative</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Des statuts et règlements intérieurs dûment établis</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Un manuel de procédures</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Un Bureau exécutif élu par biennal</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Un siège et une Direction Exécutive</span>
                </li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Objet social */}
        <section className="mb-12">
          <Card className="p-8 card-gradient shadow-card">
            <div className="flex items-center mb-6">
              <Scale className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-foreground">Objet Social</h2>
            </div>
            
            <p className="text-muted-foreground mb-4">
              L'organisation a pour objet :
            </p>
            
            <ul className="space-y-3">
              {[
                "De créer des possibilités de revenus pour les pauvres",
                "De créer un cabinet de santé social",
                "De créer un centre de formation technique et professionnel",
                "D'aider les filles, les former et installer les femmes aux activités génératrices de revenus",
                "De lutter contre la faim, la malnutrition, le paludisme, les maladies véhiculées par l'eau, l'abus des drogues et de l'alcool, la violence et la brutalité, les grossesses non désirées, le VIH/SIDA et les autres maladies sexuellement transmissibles",
                "D'œuvrer à la promotion de l'alphabétisation et des programmes d'éducation pour tous, tout au long de la vie",
                "D'organiser des séminaires de formation à l'entrepreneuriat pour les jeunes"
              ].map((objectif, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{objectif}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        {/* Gouvernance */}
        <section className="mb-12">
          <Card className="p-8 card-gradient shadow-card">
            <div className="flex items-center mb-6">
              <Eye className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-foreground">Gouvernance et Direction</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Président</h3>
                <p className="text-muted-foreground">ABIMBADE FRANCIS</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Vice-Président</h3>
                <p className="text-muted-foreground">Dr OLANIYAN EBENEZER</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Structure</h3>
                <p className="text-muted-foreground">
                  L'organisation se compose d'une Direction Exécutive et d'un Bureau exécutif 
                  élu pour une durée de deux (2) ans.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Propriété intellectuelle */}
        <section className="mb-12">
          <Card className="p-8 bg-secondary text-secondary-foreground">
            <h2 className="text-2xl font-bold mb-6">Propriété Intellectuelle</h2>
            
            <div className="space-y-4">
              <p>
                Le présent site web et l'ensemble de son contenu (textes, images, vidéos, logos, etc.) 
                sont la propriété exclusive de l'ONG Amour Divin, sauf mention contraire.
              </p>
              
              <p>
                Toute reproduction, distribution, modification, adaptation, retransmission ou 
                publication de ces éléments est strictement interdite sans l'accord écrit 
                préalable de l'ONG Amour Divin.
              </p>
            </div>
          </Card>
        </section>

        {/* Protection des données */}
        <section className="mb-12">
          <Card className="p-8 bg-muted">
            <h2 className="text-2xl font-bold text-foreground mb-6">Protection des Données Personnelles</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                L'ONG Amour Divin s'engage à protéger la vie privée de ses utilisateurs et 
                à respecter la confidentialité des informations personnelles qui lui sont confiées.
              </p>
              
              <p>
                Les données collectées via le formulaire de contact sont utilisées exclusivement 
                pour répondre aux demandes des utilisateurs et ne sont jamais transmises à des tiers 
                sans consentement préalable.
              </p>
              
              <p>
                Conformément à la législation ivoirienne et aux bonnes pratiques internationales, 
                toute personne dispose d'un droit d'accès, de rectification et de suppression 
                de ses données personnelles.
              </p>
            </div>
          </Card>
        </section>

        {/* Limitation de responsabilité */}
        <section className="mb-12">
          <Card className="p-8 card-gradient shadow-card">
            <h2 className="text-2xl font-bold text-foreground mb-6">Limitation de Responsabilité</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                L'ONG Amour Divin s'efforce de maintenir les informations de ce site web 
                aussi exactes et à jour que possible. Cependant, elle ne peut garantir 
                l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
              </p>
              
              <p>
                L'utilisation des informations de ce site web se fait sous la seule responsabilité 
                de l'utilisateur. L'ONG Amour Divin ne saurait être tenue responsable des dommages 
                directs ou indirects pouvant résulter de l'utilisation de ce site.
              </p>
            </div>
          </Card>
        </section>

        {/* Contact pour questions légales */}
        <section>
          <Card className="p-8 hero-gradient text-primary-foreground">
            <h2 className="text-2xl font-bold mb-4">Questions Légales</h2>
            <p className="mb-6">
              Pour toute question concernant ces mentions légales ou l'utilisation de ce site web, 
              n'hésitez pas à nous contacter.
            </p>
            
            <div className="space-y-2">
              <p><strong>Email :</strong> conctactongamdi@gmail.com</p>
              <p><strong>Téléphone :</strong> 08 37 52 99 / 05 23 20 19</p>
              <p><strong>Adresse :</strong> Bouaké, quartier Nimbo, 01 BP 231 Bouaké 01</p>
            </div>
          </Card>
        </section>

        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>Mentions légales mises à jour le {new Date().toLocaleDateString('fr-FR')}</p>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;