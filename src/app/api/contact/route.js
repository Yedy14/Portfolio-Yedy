import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '@/lib/supabase';

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error('RESEND_API_KEY not configured');
  return new Resend(key);
}

const DAILY_LIMIT = 3;

function getIP(request) {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    '0.0.0.0'
  );
}

export async function POST(request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Tous les champs sont requis' }, { status: 400 });
  }

  // ── Rate limit: max 3 per IP per day ──────────────────────────
  const ip = getIP(request);
  const dayStart = new Date();
  dayStart.setHours(0, 0, 0, 0);

  const { count } = await supabase
    .from('inquiries')
    .select('*', { count: 'exact', head: true })
    .eq('ip', ip)
    .gte('created_at', dayStart.toISOString());

  if (count >= DAILY_LIMIT) {
    return NextResponse.json(
      { error: `Trop de messages. Vous pouvez envoyer jusqu'à ${DAILY_LIMIT} messages par jour.` },
      { status: 429 }
    );
  }

  try {
    // Save to Supabase (include ip for rate limiting)
    const { error: dbError } = await supabase.from('inquiries').insert([{ name, email, message, ip }]);
    if (dbError) {
      console.error('Supabase insert error:', dbError);
    }

    // Send email.
    // Expéditeur Resend par défaut (fonctionne sans domaine vérifié).
    // Pour un domaine personnalisé vérifié, utilisez par ex. 'contact@votre-domaine.com'.
    let resend;
    try {
      resend = getResend();
    } catch {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }
    const { data, error: emailError } = await resend.emails.send({
      from: "Innov'Yed Solutions <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL || "innovyedsolutions@gmail.com",
      replyTo: email,
      subject: `Nouveau message de ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0d0d0d;color:#fff;padding:32px;border-radius:12px">
          <h2 style="color:#00F5FF;margin:0 0 24px">Nouveau message — Portfolio</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#999;width:80px">De</td><td style="padding:8px 0;color:#fff">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#999">Email</td><td style="padding:8px 0;color:#00F5FF"><a href="mailto:${email}" style="color:#00F5FF">${email}</a></td></tr>
          </table>
          <hr style="border:1px solid #222;margin:20px 0"/>
          <p style="color:#ccc;line-height:1.7;white-space:pre-wrap">${message}</p>
        </div>
      `,
    });

    if (emailError) {
      console.error('Resend error:', emailError);
      return NextResponse.json({ error: "Échec de l'envoi de l'email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Resend error:', err);
    return NextResponse.json({ error: "Échec de l'envoi de l'email" }, { status: 500 });
  }
}
