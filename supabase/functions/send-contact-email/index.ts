import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactFormRequest = await req.json();

    console.log("Received contact form submission:", { name, email, phone: phone || "Not provided" });

    // Validate required fields
    if (!name || !email || !message) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Send notification email to business using Resend API directly
    const notificationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Qoremedia <hello@qoremedia.in>",
        to: ["hello@qoremedia.in"],
        bcc: ["qoremediabusiness@gmail.com"],
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #8b5cf6; margin-bottom: 20px;">New Contact Form Submission</h1>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 0 0 10px 0;"><strong>Phone:</strong> ${phone || "Not provided"}</p>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
              <p style="margin: 0 0 10px 0;"><strong>Message:</strong></p>
              <p style="margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
            <p style="color: #6b7280; font-size: 12px;">This email was sent from the Qoremedia contact form.</p>
          </div>
        `,
      }),
    });

    if (!notificationRes.ok) {
      const errorData = await notificationRes.text();
      console.error("Failed to send notification email:", errorData);
      throw new Error("Failed to send notification email");
    }

    console.log("Notification email sent successfully");

    // Send confirmation email to user
    const confirmationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Qoremedia <hello@qoremedia.in>",
        to: [email],
        subject: "We received your message - Qoremedia",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #8b5cf6; margin-bottom: 20px;">Thank you for reaching out, ${name}!</h1>
            
            <p style="color: #374151; line-height: 1.6;">
              We have received your message and our team will get back to you as soon as possible.
            </p>
            
            <p style="color: #374151; line-height: 1.6;">
              In the meantime, feel free to reach out to us directly:
            </p>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0 0 10px 0;"><strong>Phone:</strong> +91 77975 71334 / +91 7001090471</p>
              <p style="margin: 0;"><strong>Email:</strong> hello@qoremedia.in</p>
            </div>
            
            <p style="color: #374151; line-height: 1.6;">
              Best regards,<br />
              <strong>The Qoremedia Team</strong>
            </p>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
            <p style="color: #6b7280; font-size: 12px;">© ${new Date().getFullYear()} Qoremedia. All rights reserved.</p>
          </div>
        `,
      }),
    });

    if (!confirmationRes.ok) {
      console.error("Failed to send confirmation email:", await confirmationRes.text());
      // Don't throw here - notification was already sent
    } else {
      console.log("Confirmation email sent successfully");
    }

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);