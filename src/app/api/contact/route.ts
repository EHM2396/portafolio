import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/data/site-config";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY no está configurada.");
    return NextResponse.json(
      { error: "El servicio de correo no está configurado." },
      { status: 500 },
    );
  }
  const resend = new Resend(apiKey);

  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Datos inválidos." }, { status: 400 });
  }

  const { name, email, company, projectType, budget, description } = body as Record<
    string,
    string | undefined
  >;

  if (!name || !email || !projectType || !description) {
    return NextResponse.json(
      { error: "Faltan campos obligatorios." },
      { status: 400 },
    );
  }

  try {
    await resend.emails.send({
      // Remitente de pruebas de Resend: funciona sin verificar un dominio propio.
      // TODO: si verificas tu propio dominio en resend.com, cámbialo por algo como
      // "Portafolio <contacto@tu-dominio.com>".
      from: "Portafolio <onboarding@resend.dev>",
      to: siteConfig.email,
      replyTo: email,
      subject: `Nueva solicitud de proyecto: ${name}`,
      html: `
        <h2>Nueva solicitud desde el portafolio</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Empresa:</strong> ${escapeHtml(company || "No especificada")}</p>
        <p><strong>Tipo de proyecto:</strong> ${escapeHtml(projectType)}</p>
        <p><strong>Presupuesto aproximado:</strong> ${escapeHtml(budget || "No especificado")}</p>
        <p><strong>Descripción:</strong></p>
        <p>${escapeHtml(description).replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error enviando el email de contacto:", error);
    return NextResponse.json(
      { error: "No se pudo enviar el correo. Intenta de nuevo." },
      { status: 502 },
    );
  }
}
