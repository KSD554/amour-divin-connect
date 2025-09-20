import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, amount, action } = await req.json();
    
    const paystackSecretKey = Deno.env.get('PAYSTACK_SECRET_KEY');
    if (!paystackSecretKey) {
      throw new Error('PAYSTACK_SECRET_KEY is not configured');
    }

    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    if (action === 'initialize') {
      // Initialize payment
      const response = await fetch('https://api.paystack.co/transaction/initialize', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${paystackSecretKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          amount: amount * 100, // Paystack expects amount in kobo (cents)
          currency: 'XOF',
          metadata: {
            custom_fields: [
              {
                display_name: 'Name',
                variable_name: 'name',
                value: name
              },
              {
                display_name: 'Phone',
                variable_name: 'phone',
                value: phone || ''
              }
            ]
          }
        }),
      });

      const data = await response.json();
      console.log('Paystack initialize response:', data);

      if (!data.status) {
        return new Response(
          JSON.stringify({ error: data.message || 'Erreur lors de l\'initialisation du paiement' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Save donor information
      const { error: dbError } = await supabase
        .from('donors')
        .insert({
          name,
          email,
          phone,
          amount,
          transaction_reference: data.data.reference,
          status: 'pending'
        });

      if (dbError) {
        console.error('Database error:', dbError);
      }

      return new Response(
        JSON.stringify({ success: true, data: data.data }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );

    } else if (action === 'verify') {
      // Verify payment
      const { reference } = await req.json();
      
      const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${paystackSecretKey}`,
        },
      });

      const data = await response.json();
      console.log('Paystack verify response:', data);

      // Update donor status
      if (data.status && data.data.status === 'success') {
        const { error: updateError } = await supabase
          .from('donors')
          .update({ status: 'completed' })
          .eq('transaction_reference', reference);

        if (updateError) {
          console.error('Error updating donor status:', updateError);
        }

        // Save transaction details
        const { error: transactionError } = await supabase
          .from('donation_transactions')
          .insert({
            paystack_reference: reference,
            amount: data.data.amount / 100, // Convert back from kobo
            currency: data.data.currency,
            status: 'success',
            gateway_response: data.data
          });

        if (transactionError) {
          console.error('Error saving transaction:', transactionError);
        }
      }

      return new Response(
        JSON.stringify({ success: true, data: data.data }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Action non reconnue' }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in paystack-donation function:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Erreur interne du serveur' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});