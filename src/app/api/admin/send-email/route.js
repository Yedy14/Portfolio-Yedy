import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';
import { Resend } from 'resend';
import { supabase } from '@/lib/supabase';

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error('RESEND_API_KEY not configured');
  return new Resend(key);
}

async function isAdmin() {
  const store = await cookies();
  const token = store.get('admin_token')?.value;
  if (!token) return false;
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    await jwtVerify(token, secret);
    return true;
  } catch {
    return false;
  }
}

export async function POST(request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const to = formData.get('to');
    const subject = formData.get('subject');
    const message = formData.get('message');
    const file = formData.get('file');

    if (!to || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    let attachments = [];
    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    // Note : avec Resend sans domaine vérifié, l'envoi n'est possible
    // que vers l'adresse du compte Resend. Pour envoyer vers n'importe
    // quel destinataire, vérifiez un domaine dans le dashboard Resend
    // et changez l'adresse 'from' ci-dessous.
    let resend;
    try {
      resend = getResend();
    } catch {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }
    const { data, error } = await resend.emails.send({
      from: "Innov'Yed Solutions <onboarding@resend.dev>",
      to: to,
      subject: subject,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #040B18; color: #ffffff; padding: 40px; border-radius: 16px; border: 1px solid #222;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h2 style="margin: 0; color: #fff; font-size: 24px; letter-spacing: -0.5px;">Yédydia</h2>
            <p style="margin: 4px 0 0; color: #00F5FF; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Innov'Yed Solutions</p>
          </div>
          <hr style="border: none; border-top: 1px solid #222; margin: 0 0 30px;" />
          <div style="font-size: 15px; line-height: 1.7; color: #d4d4d4; white-space: pre-wrap;">${message}</div>
          <hr style="border: none; border-top: 1px solid #222; margin: 40px 0 20px;" />
          <div style="text-align: center; color: #666; font-size: 12px;">
            <p style="margin: 0;">Envoyé depuis</p>
            <p style="margin: 4px 0 0;"><a href="https://portfolio-yedy.vercel.app" style="color: #00F5FF; text-decoration: none; font-weight: bold;">portfolio Yédydia</a></p>
          </div>
        </div>
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Save the sent email to the inquiries database so the admin can see the history
    await supabase.from('inquiries').insert([{
      name: 'Envoyé par Yédydia',
      email: to,
      message: `SUBJECT: ${subject}\n\n${message}`,
      read: true // automatically mark sent emails as read
    }]);

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('Send email error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
