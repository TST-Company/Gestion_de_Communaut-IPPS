// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
// import "@supabase/functions-js/edge-runtime.d.ts"

// console.log("Hello from Functions!")

// Deno.serve(async (req) => {
//   const { name } = await req.json()
//   const data = {
//     message: `Hello ${name}!`,
//   }

//   return new Response(
//     JSON.stringify(data),
//     { headers: { "Content-Type": "application/json" } },
//   )
// })


// import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

// const corsHeaders = {
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
// }

// serve(async (req) => {
//   // CORS
//   if (req.method === 'OPTIONS') {
//     return new Response('ok', { headers: corsHeaders })
//   }

//   try {
//     const { phone, channel } = await req.json()

//     if (!phone) {
//       throw new Error('Phone number required')
//     }

//     // Générer un code OTP à 6 chiffres
//     const otp = Math.floor(100000 + Math.random() * 900000).toString()

//     console.log(`📱 Envoi OTP à ${phone} via ${channel}`)
//     console.log(`🔢 Code: ${otp}`)

//     // Récupérer les clés Sent depuis les secrets Supabase
//     const sentSenderId = Deno.env.get('SENT_SENDER_ID')
//     const sentApiKey = Deno.env.get('SENT_API_KEY')

//     if (!sentSenderId || !sentApiKey) {
//       throw new Error('Sent API keys not configured')
//     }

//     // Appeler l'API Sent
//     const response = await fetch('https://api.sent.dm/api/messages/send-to-number', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'x-sender-id': sentSenderId,
//         'x-api-key': sentApiKey,
//       },
//       body: JSON.stringify({
//         phoneNumber: phone,
//         message: `Votre code de vérification est : ${otp}\n\nCe code expire dans 5 minutes.`
//       })
//     })

//     // if (!response.ok) {
//     //   const error = await response.text()
//     //   throw new Error(`Sent API error: ${error}`)
//     // }

//     if (!response.ok) { 
//       const error = await response.text() console.error("Sent API error details:", error) throw new Error(`Sent API error: ${error}`) 
//       console.error("Sent API status:", response.status)

//     }

//     const sentData = await response.json()

//     return new Response(
//       JSON.stringify({ 
//         success: true, 
//         message: 'OTP envoyé',
//         code: otp // ⚠️ En production, ne PAS retourner le code ! Stocker en DB
//       }),
//       { 
//         headers: { ...corsHeaders, 'Content-Type': 'application/json' },
//         status: 200 
//       }
//     )

//   } catch (error: any) {
//     console.error('❌ Erreur:', error.message)
//     return new Response(
//       JSON.stringify({ error: error.message }),
//       { 
//         headers: { ...corsHeaders, 'Content-Type': 'application/json' },
//         status: 400 
//       }
//     )
//   }
// })


// send-otp/index.ts
import { serve } from "https://deno.land/std/http/server.ts"

serve(async (req) => {
  const { phone } = await req.json()
  const otp = Math.floor(100000 + Math.random() * 900000).toString()

  const sentSenderId = Deno.env.get("SENT_SENDER_ID")
  const sentApiKey = Deno.env.get("SENT_API_KEY")

  const response = await fetch('https://api.sent.dm/v2/messages/phone', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'x-sender-id': sentSenderId!,
      // 'x-api-key': sentApiKey!,
      'x-sender-id': sentSenderId!, // récupéré depuis les secrets 'x-api-key': sentApiKey!,
      'x-api-key': sentApiKey!, // récupéré depuis les secrets
    },
    body: JSON.stringify({
      phoneNumber: "+221778973547",
      templateId: "2cfa8468-1b9e-4a1f-be82-7136541a239c", // ton vrai templateId publié
      templateVariables: {
        otp: "427408"
      }
    })
  })

  if (!response.ok) {
    const error = await response.text()
    console.error("Sent API error details:", error)
    return new Response(JSON.stringify({ error }), { status: 400 })
  }

  return new Response(JSON.stringify({ success: true, otp }), { status: 200 })
})




/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/send-otp' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
