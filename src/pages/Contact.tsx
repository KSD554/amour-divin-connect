import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('contact-form', {
        body: { 
          name: formData.nom, 
          email: formData.email, 
          message: formData.message 
        }
      });

      if (error) throw error;

      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      
      // Réinitialiser le formulaire
      setFormData({ nom: "", email: "", message: "" });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Erreur",
        description: "Impossible d'envoyer le message. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-6">Contactez-Nous</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Notre équipe est là pour répondre à vos questions, accueillir vos suggestions 
            et vous accompagner dans vos projets de collaboration ou de bénévolat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Nos Coordonnées</h2>
            
            {/* Adresse */}
            <Card className="p-6 card-gradient shadow-card">
              <div className="flex items-start space-x-4">
                <div className="text-primary mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Adresse</h3>
                  <p className="text-muted-foreground">
                    Bouaké, quartier Nimbo<br />
                    01 BP 231 Bouaké 01<br />
                    Côte d'Ivoire
                  </p>
                </div>
              </div>
            </Card>

            {/* Téléphones */}
            <Card className="p-6 card-gradient shadow-card">
              <div className="flex items-start space-x-4">
                <div className="text-primary mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Téléphones</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>08 37 52 99</p>
                    <p>05 23 20 19</p>
                    <p>40 38 45 38</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Email */}
            <Card className="p-6 card-gradient shadow-card">
              <div className="flex items-start space-x-4">
                <div className="text-primary mt-1">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">conctactongamdi@gmail.com</p>
                </div>
              </div>
            </Card>

            {/* Horaires */}
            <Card className="p-6 card-gradient shadow-card">
              <div className="flex items-start space-x-4">
                <div className="text-primary mt-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Horaires d'ouverture</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Lundi - Vendredi : 8h00 - 17h00</p>
                    <p>Samedi : 8h00 - 12h00</p>
                    <p>Dimanche : Fermé</p>
                  </div>
                </div>
              </div>
            </Card>

          </div>

          {/* Formulaire de contact */}
          <div>
            <Card className="p-8 card-gradient shadow-card">
              <h2 className="text-2xl font-bold text-foreground mb-6">Envoyez-nous un message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-foreground mb-2">
                    Nom complet *
                  </label>
                  <Input
                    id="nom"
                    name="nom"
                    type="text"
                    required
                    value={formData.nom}
                    onChange={handleChange}
                    placeholder="Votre nom complet"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre.email@exemple.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message..."
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full hero-gradient text-primary-foreground shadow-soft hover:shadow-hero transition-smooth disabled:opacity-50"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Envoyer le message
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Options de contact supplémentaires */}
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Autres moyens de nous contacter</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  Nous appeler
                </Button>
                
                <Button variant="outline" className="justify-start">
                  <Mail className="w-4 h-4 mr-2" />
                  Nous écrire
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Sections d'engagement */}
        <section className="mt-16 section-gradient py-12 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Comment Vous Engager ?</h2>
            <p className="text-muted-foreground">Plusieurs façons de rejoindre notre mission</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center card-gradient shadow-card">
              <h3 className="font-semibold text-foreground mb-3">Devenir Bénévole</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Rejoignez notre équipe et contribuez directement à nos actions sur le terrain
              </p>
              <Button variant="outline" size="sm">Candidater</Button>
            </Card>
            
            <Card className="p-6 text-center card-gradient shadow-card">
              <h3 className="font-semibold text-foreground mb-3">Faire un Don</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Soutenez financièrement nos projets et aidez-nous à toucher plus de bénéficiaires
              </p>
              <Button className="hero-gradient text-primary-foreground" size="sm">
                Donner maintenant
              </Button>
            </Card>
            
            <Card className="p-6 text-center card-gradient shadow-card">
              <h3 className="font-semibold text-foreground mb-3">Partenariat</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Collaborez avec nous en tant qu'organisation ou entreprise partenaire
              </p>
              <Button variant="outline" size="sm">En savoir plus</Button>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;