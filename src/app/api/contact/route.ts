import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Validation
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Tous les champs sont obligatoires' },
                { status: 400 }
            );
        }

        // Email au propriétaire
        const { data, error } = await resend.emails.send({
            from: 'Hôtel La Valeureuse Mère <onboarding@resend.dev>',
            to: [process.env.HOTEL_EMAIL || 'info@hotelvaleureusemere.cm'],
            subject: `Nouveau message de contact - ${subject}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <style>
                        body {
                            font-family: 'Arial', sans-serif;
                            line-height: 1.6;
                            color: #333;
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                        }
                        .header {
                            background: linear-gradient(135deg, #FFD700 0%, #FFC107 100%);
                            color: #000;
                            padding: 30px;
                            text-align: center;
                            border-radius: 10px 10px 0 0;
                        }
                        .content {
                            background: #fff;
                            padding: 30px;
                            border: 1px solid #e0e0e0;
                        }
                        .info-box {
                            background: #f5f5f5;
                            padding: 15px;
                            border-left: 4px solid #FFD700;
                            margin: 15px 0;
                        }
                        .footer {
                            background: #000;
                            color: #fff;
                            padding: 20px;
                            text-align: center;
                            border-radius: 0 0 10px 10px;
                        }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1>✉️ Nouveau Message de Contact</h1>
                    </div>
                    
                    <div class="content">
                        <div class="info-box">
                            <strong>De :</strong> ${name}<br>
                            <strong>Email :</strong> ${email}<br>
                            <strong>Sujet :</strong> ${subject}
                        </div>
                        
                        <h3 style="color: #FFD700;">Message :</h3>
                        <div style="background: #f9f9f9; padding: 20px; border-radius: 5px;">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                        
                        <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-left: 4px solid #FFD700;">
                            <strong>⚠️ Action requise :</strong> Veuillez répondre à ce message dans les plus brefs délais.
                        </div>
                    </div>
                    
                    <div class="footer">
                        <p>Hôtel La Valeureuse Mère</p>
                        <p>📞 +237 650 78 63 86 • +237 697 25 11 95</p>
                    </div>
                </body>
                </html>
            `,
            replyTo: email,
        });

        if (error) {
            console.error('Erreur Resend:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        // Email de confirmation au client
        await resend.emails.send({
            from: 'Hôtel La Valeureuse Mère <onboarding@resend.dev>',
            to: [email],
            subject: 'Message bien reçu - Hôtel La Valeureuse Mère',
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <style>
                        body {
                            font-family: 'Arial', sans-serif;
                            line-height: 1.6;
                            color: #333;
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                        }
                        .header {
                            background: linear-gradient(135deg, #FFD700 0%, #FFC107 100%);
                            color: #000;
                            padding: 30px;
                            text-align: center;
                            border-radius: 10px 10px 0 0;
                        }
                        .content {
                            background: #fff;
                            padding: 30px;
                            border: 1px solid #e0e0e0;
                        }
                        .footer {
                            background: #000;
                            color: #fff;
                            padding: 20px;
                            text-align: center;
                            border-radius: 0 0 10px 10px;
                        }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1>✅ Message Bien Reçu</h1>
                    </div>
                    
                    <div class="content">
                        <p>Bonjour <strong>${name}</strong>,</p>
                        
                        <p>Nous avons bien reçu votre message et nous vous remercions de nous avoir contactés.</p>
                        
                        <p>Notre équipe vous répondra dans les plus brefs délais.</p>
                        
                        <p>Cordialement,<br><strong>L'équipe de l'Hôtel La Valeureuse Mère</strong></p>
                    </div>
                    
                    <div class="footer">
                        <p>📞 +237 650 78 63 86 • +237 697 25 11 95</p>
                        <p>✉️ info@hotelvaleureusemere.cm</p>
                    </div>
                </body>
                </html>
            `,
        });

        return NextResponse.json(
            { success: true, message: 'Message envoyé avec succès', data },
            { status: 200 }
        );

    } catch (error) {
        console.error('Erreur lors de l\'envoi:', error);
        return NextResponse.json(
            { error: 'Erreur lors de l\'envoi du message' },
            { status: 500 }
        );
    }
}
