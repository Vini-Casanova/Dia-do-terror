import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Deno and env typing
declare const Deno: {
  env: {
    get(key: string): string | undefined;
  };
  serve(handler: (req: Request) => Promise<Response>): void;
};

const SUPABASE_URL = Deno.env.get("SUPABASE_URL") || "url";
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") || "chave";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const handler = async (req: Request): Promise<Response> => {
  // CORS handling
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
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
    const { token } = await req.json();

    if (!token) {
      throw new Error("Token is required");
    }

    // Fetch the guest record with the given token
    const { data, error } = await supabase
      .from("guests")
      .select("*")
      .eq("token", token)
      .single();

    if (error || !data) {
      throw new Error("Invalid token");
    }

    // Check if the token has expired
    if (new Date(data.token_expires_at) < new Date()) {
      throw new Error("Token has expired");
    }

    // Update the guest record to mark as confirmed
    const { error: updateError } = await supabase
      .from("guests")
      .update({ confirmed_at: new Date(), token: null, token_expires_at: null })
      .eq("id", data.id);

    if (updateError) {
      throw new Error("Error updating guest record");
    }

    return new Response(
      JSON.stringify({ success: true, message: "Attendance confirmed" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      },
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
};

Deno.serve(handler);
