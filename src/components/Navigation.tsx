import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import DonationModal from "./DonationModal";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", label: "Accueil" },
    { path: "/mission", label: "Mission & Vision" },
    { path: "/equipe", label: "Équipe" },
    { path: "/projets", label: "Projets" },
    { path: "/partenaires", label: "Partenaires" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-card shadow-card sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 hero-gradient rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">AMOUR DIVIN</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-smooth hover:text-primary ${
                  isActive(item.path) ? "text-primary font-semibold" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Bouton Don */}
            <Button 
              onClick={() => setIsDonationOpen(true)}
              variant="default" 
              className="hero-gradient text-primary-foreground shadow-soft hover:shadow-hero transition-smooth"
            >
              Faire un don
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`transition-smooth hover:text-primary ${
                    isActive(item.path) ? "text-primary font-semibold" : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                onClick={() => setIsDonationOpen(true)}
                variant="default" 
                className="hero-gradient text-primary-foreground w-full"
              >
                Faire un don
              </Button>
            </div>
          </div>
        )}
      </div>
      
      <DonationModal 
        isOpen={isDonationOpen} 
        onClose={() => setIsDonationOpen(false)} 
      />
    </nav>
  );
};

export default Navigation;