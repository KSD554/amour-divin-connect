import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Heart, Loader2 } from "lucide-react";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationModal = ({ isOpen, onClose }: DonationModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: ""
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.amount) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    const amount = parseFloat(formData.amount);
    if (amount < 1000) {
      toast({
        title: "Erreur",
        description: "Le montant minimum est de 1000 FCFA.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    try {
      const { data, error } = await supabase.functions.invoke('paystack-donation', {
        body: {
          action: 'initialize',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          amount: amount
        }
      });

      if (error) throw error;

      if (data.success && data.data.authorization_url) {
        // Redirect to Paystack payment page
        window.open(data.data.authorization_url, '_blank');
        
        toast({
          title: "Redirection vers le paiement",
          description: "Vous allez être redirigé vers la page de paiement sécurisée.",
        });
        
        onClose();
        setFormData({ name: "", email: "", phone: "", amount: "" });
      } else {
        throw new Error("Erreur lors de l'initialisation du paiement");
      }
    } catch (error) {
      console.error('Donation error:', error);
      toast({
        title: "Erreur",
        description: "Impossible d'initier le don. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            Faire un don à Amour Divin
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleDonate} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nom complet *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Votre nom complet"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="votre@email.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+225 XX XX XX XX"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="amount">Montant (FCFA) *</Label>
            <Input
              id="amount"
              name="amount"
              type="number"
              min="1000"
              step="500"
              value={formData.amount}
              onChange={handleInputChange}
              placeholder="1000"
              required
            />
            <p className="text-sm text-muted-foreground">Montant minimum: 1000 FCFA</p>
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isProcessing}
            >
              Annuler
            </Button>
            <Button
              type="submit"
              disabled={isProcessing}
              className="flex-1 hero-gradient text-primary-foreground"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Traitement...
                </>
              ) : (
                "Faire le don"
              )}
            </Button>
          </div>
        </form>
        
        <div className="text-xs text-muted-foreground text-center pt-2">
          Paiement sécurisé via Paystack. Vos données sont protégées.
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;