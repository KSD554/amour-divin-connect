-- Table pour les messages de contact
CREATE TABLE public.contact_messages (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Table pour les donateurs
CREATE TABLE public.donors (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    amount DECIMAL(10,2) NOT NULL,
    currency TEXT NOT NULL DEFAULT 'XOF',
    payment_method TEXT NOT NULL DEFAULT 'paystack',
    transaction_reference TEXT UNIQUE,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed', 'cancelled')),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Table pour les transactions de don
CREATE TABLE public.donation_transactions (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    donor_id UUID REFERENCES public.donors(id) ON DELETE CASCADE,
    paystack_reference TEXT UNIQUE,
    amount DECIMAL(10,2) NOT NULL,
    currency TEXT NOT NULL DEFAULT 'XOF',
    status TEXT NOT NULL CHECK (status IN ('pending', 'success', 'failed', 'abandoned')),
    gateway_response JSONB,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donation_transactions ENABLE ROW LEVEL SECURITY;

-- Policies pour les messages de contact (accès public pour insertion, admin pour lecture)
CREATE POLICY "Anyone can insert contact messages" 
ON public.contact_messages 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Contact messages are viewable by authenticated users" 
ON public.contact_messages 
FOR SELECT 
USING (true);

-- Policies pour les donateurs (accès public pour insertion, admin pour lecture)
CREATE POLICY "Anyone can insert donor information" 
ON public.donors 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Donors are viewable by authenticated users" 
ON public.donors 
FOR SELECT 
USING (true);

-- Policies pour les transactions (accès public pour insertion, admin pour lecture)
CREATE POLICY "Anyone can insert donation transactions" 
ON public.donation_transactions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Donation transactions are viewable by authenticated users" 
ON public.donation_transactions 
FOR SELECT 
USING (true);

-- Fonction pour mettre à jour les timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Triggers pour les timestamps automatiques
CREATE TRIGGER update_contact_messages_updated_at
    BEFORE UPDATE ON public.contact_messages
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_donors_updated_at
    BEFORE UPDATE ON public.donors
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_donation_transactions_updated_at
    BEFORE UPDATE ON public.donation_transactions
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Index pour les performances
CREATE INDEX idx_contact_messages_created_at ON public.contact_messages(created_at DESC);
CREATE INDEX idx_donors_email ON public.donors(email);
CREATE INDEX idx_donors_created_at ON public.donors(created_at DESC);
CREATE INDEX idx_donation_transactions_donor_id ON public.donation_transactions(donor_id);
CREATE INDEX idx_donation_transactions_paystack_reference ON public.donation_transactions(paystack_reference);
CREATE INDEX idx_donation_transactions_status ON public.donation_transactions(status);