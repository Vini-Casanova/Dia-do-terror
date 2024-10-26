import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { v4 as uuidv4 } from "https://esm.sh/uuid@9";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL") || "url";
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") || "chave";
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") || "email";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const handler = async (req: Request): Promise<Response> => {
  // This is needed if you're planning to invoke your function from a browser.
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "authorization, x-client-info, apikey, content-type",
      },
    });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { email } = await req.json();

    if (!email) {
      throw new Error("Email is required");
    }

    const token = uuidv4();
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 24); // Token expires in 24 hours

    const { error: updateError } = await supabase
      .from("guests")
      .update({ token, token_expires_at: expiresAt })
      .eq("email", email);

    if (updateError) {
      throw new Error("Error updating guest record");
    }

    const validationLink = `http://localhost:3000/validate/${token}`;

    // Send email using Resend
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Dia do Terror <contato@cursovuejs.com.br>",
        to: email,
        subject: "Confirme sua presença no Dia do Terror",
        html: `
          <h1>Você foi convocado para o Dia do Terror!</h1>
          <p>Clique no link abaixo para confirmar sua presença... se tiver coragem:</p>
          <a href="${validationLink}">Confirmar Presença</a>
          <p>Atenção: Este link expira em 24 horas. Ignore por sua conta e risco...</p>
        `,
      }),
    });

    const emailData = await res.json();

    if (!res.ok) {
      throw new Error(`Failed to send email: ${JSON.stringify(emailData)}`);
    }

    return new Response(JSON.stringify({ success: true, emailData }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
};

Deno.serve(handler);
