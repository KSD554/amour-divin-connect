import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

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
    const { message } = await req.json();
    
    const openRouterApiKey = Deno.env.get('OPENROUTER_API_KEY');
    if (!openRouterApiKey) {
      throw new Error('OPENROUTER_API_KEY is not configured');
    }

    const systemPrompt = `Tu es l'assistant virtuel de l'ONG Amour Divin, une organisation créée le 28 juillet 2012 et basée à Bouaké, Côte d'Ivoire.

MISSION ET VISION:
- Vision: Un monde où toutes les personnes vivent dignement et sont acceptées dans la société
- Mission: Prévenir les maladies (VIH/SIDA, IST, Cancer), lutter contre la pauvreté et le chômage, apporter un soutien psychosocial aux PVVIH, OEV et survivantes des VBG

DOMAINES D'INTERVENTION:
- Lutte contre la pauvreté (formation agricole, entreprenariat)
- Santé et prévention (VIH/SIDA, cancer, diabète, hypertension)
- Éducation et formation professionnelle
- Soutien aux femmes et enfants vulnérables
- Hygiène et assainissement
- Entreprenariat des jeunes

CONTACT:
- Adresse: Bouaké, quartier Nimbo, 01 BP 231 Bouaké 01
- Téléphone: 08 37 52 99 / 05 23 20 19
- Email: conctactongamdi@gmail.com

PARTENAIRES: PEPFAR, Association Grâce des églises baptistes, Église baptiste AGAPE, Abouake.net

Réponds de manière chaleureuse, professionnelle et informative. Encourage les visiteurs à s'impliquer comme bénévoles ou donateurs.`;

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openRouterApiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://bollvbclegtptlpdzygq.supabase.co',
        'X-Title': 'ONG Amour Divin Chatbot'
      },
      body: JSON.stringify({
        model: 'anthropic/claude-3.5-sonnet',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 500
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('OpenRouter API error:', errorData);
      throw new Error(`OpenRouter API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('OpenRouter response:', data);

    const botResponse = data.choices?.[0]?.message?.content || 
                       'Désolé, je ne peux pas répondre pour le moment. Veuillez réessayer plus tard.';

    return new Response(
      JSON.stringify({ 
        success: true, 
        response: botResponse 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in chatbot function:', error);
    
    // Fallback response
    const fallbackResponse = "Merci pour votre message ! Je suis temporairement indisponible, mais vous pouvez nous contacter directement au 08 37 52 99 ou par email à conctactongamdi@gmail.com pour toute information sur nos programmes de lutte contre la pauvreté, de prévention santé, et nos actions communautaires.";
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        response: fallbackResponse 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});