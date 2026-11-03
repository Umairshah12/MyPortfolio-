import { NextResponse } from 'next/server';

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

    const sanitizedData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      receivedAt: new Date().toISOString(),
      submissionId: `MSG-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
    };

    // Log the message on the server (In a production environment, this connects to Resend, SendGrid, or AWS SES)
    console.log('[PORTFOLIO_CONTACT_DISPATCH]', JSON.stringify(sanitizedData, null, 2));

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been successfully transmitted and logged.',
        submissionId: sanitizedData.submissionId,
        receivedAt: sanitizedData.receivedAt,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[PORTFOLIO_CONTACT_ERROR]', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An internal error occurred while processing your message. Please try again or email directly.',
      },
      { status: 500 }
    );
  }
}

