import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Bonjour ! Je suis l'assistant virtuel d'Amour Divin. Comment puis-je vous aider aujourd'hui ?",
      isBot: true,
    },
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const sendMessage = async () => {
    if (!currentMessage.trim() || isLoading) return;
    
    const userText = currentMessage;
    setCurrentMessage("");
    setIsLoading(true);
    
    // Ajouter le message de l'utilisateur
    const userMessage = {
      id: Date.now(),
      text: userText,
      isBot: false,
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    try {
      const { data, error } = await supabase.functions.invoke('chatbot', {
        body: { message: userText }
      });

      if (error) throw error;

      const botResponse = {
        id: Date.now() + 1,
        text: data.response || "Désolé, je ne peux pas répondre pour le moment.",
        isBot: true,
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Chatbot error:', error);
      
      const errorResponse = {
        id: Date.now() + 1,
        text: "Désolé, je rencontre un problème technique. Veuillez nous contacter directement au 08 37 52 99 pour une assistance immédiate.",
        isBot: true,
      };
      
      setMessages(prev => [...prev, errorResponse]);
      
      toast({
        title: "Erreur",
        description: "Le chatbot rencontre un problème technique.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full hero-gradient shadow-hero hover:scale-110 transition-bounce z-50"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>

      {/* Interface du chatbot */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 h-96 shadow-card z-50 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-border hero-gradient text-primary-foreground rounded-t-lg">
            <h3 className="font-semibold">Assistant Amour Divin</h3>
            <p className="text-sm opacity-90">Nous sommes là pour vous aider</p>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg text-sm ${
                    message.isBot
                      ? "bg-muted text-muted-foreground"
                      : "hero-gradient text-primary-foreground"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <Input
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                placeholder="Votre message..."
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1"
              />
              <Button
                onClick={sendMessage}
                disabled={isLoading}
                size="sm"
                className="hero-gradient text-primary-foreground disabled:opacity-50"
              >
                {isLoading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Send size={16} />
                )}
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;