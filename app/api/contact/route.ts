import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, honeypot } = body;

    // Honeypot spam protection
    if (honeypot) {
      return NextResponse.json(
        { success: false, error: 'Spam detected' },
        { status: 400 }
      );
    }

    // Input Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid full name (at least 2 characters).' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length < 3) {
      return NextResponse.json(
        { success: false, error: 'Please enter a subject (at least 3 characters).' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: 'Please enter a message (at least 10 characters).' },
        { status: 400 }
      );
    }

    const targetRecipient = process.env.CONTACT_RECEIVER_EMAIL || 'syedumairshah763@gmail.com';
    const submissionId = `MSG-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    const receivedAt = new Date().toISOString();

    const sanitizedData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      receivedAt,
      submissionId,
    };

    console.log('[PORTFOLIO_CONTACT_DISPATCH]', sanitizedData);

    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER || 'syedumairshah763@gmail.com';
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

    let emailDelivered = false;
    let deliveryMethod = 'logged';
    let deliveryNotes = '';

    // 1. Direct Nodemailer SMTP delivery (e.g. Gmail App Password)
    if (smtpPass) {
      try {
        const cleanPass = smtpPass.trim().replace(/\s+/g, '');
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: cleanPass,
          },
        });

        const htmlContent = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #030712; color: #f8fafc; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.1); overflow: hidden; padding: 24px;">
            <div style="border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding-bottom: 16px; margin-bottom: 20px;">
              <h2 style="color: #00f2fe; margin: 0; font-size: 20px; font-weight: 700;">New Portfolio Inquiry Transmission</h2>
              <p style="color: #94a3b8; font-size: 12px; margin: 4px 0 0 0;">Received via syedumairshah.dev | ID: ${submissionId}</p>
            </div>
            
            <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; padding: 16px; margin-bottom: 20px;">
              <p style="margin: 0 0 8px 0; font-size: 14px;"><strong style="color: #00f2fe;">From:</strong> ${sanitizedData.name} (&lt;<a href="mailto:${sanitizedData.email}" style="color: #38bdf8;">${sanitizedData.email}</a>&gt;)</p>
              <p style="margin: 0 0 8px 0; font-size: 14px;"><strong style="color: #00f2fe;">Subject:</strong> ${sanitizedData.subject}</p>
              <p style="margin: 0; font-size: 12px; color: #64748b;"><strong style="color: #94a3b8;">Timestamp:</strong> ${new Date(receivedAt).toUTCString()}</p>
            </div>

            <div style="background: rgba(255, 255, 255, 0.02); border-left: 3px solid #00f2fe; padding: 16px; border-radius: 4px; margin-bottom: 20px;">
              <h4 style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8;">Message:</h4>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap;">${sanitizedData.message}</p>
            </div>

            <div style="text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 16px;">
              <a href="mailto:${sanitizedData.email}?subject=Re: ${encodeURIComponent(sanitizedData.subject)}" style="background: linear-gradient(to right, #00f2fe, #38bdf8); color: #000; font-weight: 600; padding: 10px 20px; border-radius: 8px; text-decoration: none; display: inline-block; font-size: 13px;">Reply to ${sanitizedData.name}</a>
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"Portfolio Contact Form" <${smtpUser}>`,
          to: targetRecipient,
          replyTo: sanitizedData.email,
          subject: `[Portfolio Inquiry] ${sanitizedData.subject} (${sanitizedData.name})`,
          text: `New Portfolio Inquiry:\n\nFrom: ${sanitizedData.name} <${sanitizedData.email}>\nSubject: ${sanitizedData.subject}\nTimestamp: ${receivedAt}\n\nMessage:\n${sanitizedData.message}\n\nSubmission ID: ${submissionId}`,
          html: htmlContent,
        });

        emailDelivered = true;
        deliveryMethod = 'smtp';
      } catch (smtpErr: any) {
        console.error('[SMTP_SEND_FAILED]', smtpErr?.message || smtpErr);
        if (smtpErr?.message?.includes('Application-specific password') || smtpErr?.message?.includes('534')) {
          deliveryNotes = 'Google requires a 16-character App Password (https://myaccount.google.com/apppasswords) rather than your standard login password.';
        } else {
          deliveryNotes = smtpErr?.message || 'SMTP delivery issue';
        }
      }
    }

    // 2. Web3Forms fallback if access key is present
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!emailDelivered && web3formsKey) {
      try {
        const w3fRes = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: web3formsKey,
            name: sanitizedData.name,
            email: sanitizedData.email,
            subject: `[Portfolio Inquiry] ${sanitizedData.subject}`,
            message: sanitizedData.message,
            to_email: targetRecipient,
          }),
        });
        if (w3fRes.ok) {
          emailDelivered = true;
          deliveryMethod = 'web3forms';
          deliveryNotes = '';
        }
      } catch (w3fErr) {
        console.error('[WEB3FORMS_SEND_FAILED]', w3fErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: emailDelivered
          ? 'Your inquiry has been successfully transmitted and dispatched to Syed Umair Shah.'
          : 'Your inquiry has been successfully transmitted and logged.',
        submissionId,
        receivedAt,
        delivered: emailDelivered,
        deliveryMethod,
        targetEmail: targetRecipient,
        ...(deliveryNotes ? { note: deliveryNotes } : {}),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[PORTFOLIO_CONTACT_ERROR]', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An internal error occurred while processing your message. Please reach out directly to syedumairshah763@gmail.com or +92 313 9837430.',
      },
      { status: 500 }
    );
  }
}
