import { Heart, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import DonationModal from "./DonationModal";

const Footer = () => {
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">AMOUR DIVIN</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Ensemble, construisons un monde où toutes les personnes vivent dignement et sont acceptées dans la société.
            </p>
          </div>

          {/* Navigation rapide */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary transition-smooth">Accueil</Link></li>
              <li><Link to="/mission" className="hover:text-primary transition-smooth">Mission & Vision</Link></li>
              <li><Link to="/equipe" className="hover:text-primary transition-smooth">Équipe</Link></li>
              <li><Link to="/projets" className="hover:text-primary transition-smooth">Projets</Link></li>
              <li><Link to="/partenaires" className="hover:text-primary transition-smooth">Partenaires</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Bouaké, quartier Nimbo<br />01 BP 231 Bouaké 01</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>08 37 52 99 / 05 23 20 19</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>conctactongamdi@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Agir avec nous</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:text-primary transition-smooth">Devenir bénévole</Link></li>
              <li><button onClick={() => setIsDonationOpen(true)} className="hover:text-primary transition-smooth">Faire un don</button></li>
              <li><Link to="/projets" className="hover:text-primary transition-smooth">Nos projets</Link></li>
              <li><Link to="/mentions-legales" className="hover:text-primary transition-smooth">Mentions légales</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 ONG Amour Divin. Tous droits réservés. | Créée le 28 juillet 2012</p>
        </div>
      </div>
      
      <DonationModal 
        isOpen={isDonationOpen} 
        onClose={() => setIsDonationOpen(false)} 
      />
    </footer>
  );
};

export default Footer;