import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            fullname,
            email,
            phone,
            reservationType,
            checkin,
            checkout,
            adults,
            children,
            specialRequests,
        } = body;

        // Validation des données
        if (!fullname || !email || !reservationType || !checkin || !checkout) {
            return NextResponse.json(
                { error: 'Tous les champs obligatoires doivent être remplis' },
                { status: 400 }
            );
        }

        // Email au propriétaire de l'hôtel
        const { data, error } = await resend.emails.send({
            from: 'Hôtel La Valeureuse Mère <onboarding@resend.dev>',
            to: [process.env.HOTEL_EMAIL || 'info@hotelvaleureusemere.cm'],
            subject: `Nouvelle réservation - ${reservationType}`,
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
                        .header h1 {
                            margin: 0;
                            font-size: 24px;
                        }
                        .content {
                            background: #fff;
                            padding: 30px;
                            border: 1px solid #e0e0e0;
                        }
                        .info-row {
                            margin: 15px 0;
                            padding: 10px;
                            background: #f5f5f5;
                            border-left: 4px solid #FFD700;
                        }
                        .label {
                            font-weight: bold;
                            color: #000;
                            display: inline-block;
                            width: 180px;
                        }
                        .value {
                            color: #555;
                        }
                        .footer {
                            background: #000;
                            color: #fff;
                            padding: 20px;
                            text-align: center;
                            border-radius: 0 0 10px 10px;
                            font-size: 12px;
                        }
                        .highlight {
                            background: #FFD700;
                            color: #000;
                            padding: 2px 8px;
                            border-radius: 4px;
                            font-weight: bold;
                        }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1>🏨 Nouvelle Réservation</h1>
                        <p style="margin: 5px 0 0 0;">Hôtel La Valeureuse Mère</p>
                    </div>
                    
                    <div class="content">
                        <h2 style="color: #FFD700; border-bottom: 2px solid #FFD700; padding-bottom: 10px;">
                            Informations du Client
                        </h2>
                        
                        <div class="info-row">
                            <span class="label">Nom complet :</span>
                            <span class="value">${fullname}</span>
                        </div>
                        
                        <div class="info-row">
                            <span class="label">Email :</span>
                            <span class="value">${email}</span>
                        </div>
                        
                        ${phone ? `
                        <div class="info-row">
                            <span class="label">Téléphone :</span>
                            <span class="value">${phone}</span>
                        </div>
                        ` : ''}
                        
                        <h2 style="color: #FFD700; border-bottom: 2px solid #FFD700; padding-bottom: 10px; margin-top: 30px;">
                            Détails de la Réservation
                        </h2>
                        
                        <div class="info-row">
                            <span class="label">Type de réservation :</span>
                            <span class="highlight">${reservationType === 'room' ? 'Chambre' : reservationType === 'table' ? 'Table au restaurant' : 'Événement'}</span>
                        </div>
                        
                        <div class="info-row">
                            <span class="label">Date d'arrivée :</span>
                            <span class="value">${new Date(checkin).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        
                        <div class="info-row">
                            <span class="label">Date de départ :</span>
                            <span class="value">${new Date(checkout).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        
                        <div class="info-row">
                            <span class="label">Nombre d'adultes :</span>
                            <span class="value">${adults || '1'}</span>
                        </div>
                        
                        <div class="info-row">
                            <span class="label">Nombre d'enfants :</span>
                            <span class="value">${children || '0'}</span>
                        </div>
                        
                        ${specialRequests ? `
                        <h2 style="color: #FFD700; border-bottom: 2px solid #FFD700; padding-bottom: 10px; margin-top: 30px;">
                            Demandes Spéciales
                        </h2>
                        <div class="info-row">
                            <p style="margin: 0;">${specialRequests}</p>
                        </div>
                        ` : ''}
                        
                        <div style="margin-top: 30px; padding: 20px; background: #fff3cd; border-left: 4px solid #FFD700; border-radius: 4px;">
                            <strong>⚠️ Action requise :</strong> Veuillez contacter le client dans les plus brefs délais pour confirmer la réservation.
                        </div>
                    </div>
                    
                    <div class="footer">
                        <p style="margin: 0;">Hôtel La Valeureuse Mère</p>
                        <p style="margin: 5px 0;">NKOLBISSON-MINKOAMEYOS, Yaoundé, Cameroun</p>
                        <p style="margin: 5px 0;">📞 +237 650 78 63 86 • +237 697 25 11 95</p>
                        <p style="margin: 5px 0;">✉️ info@hotelvaleureusemere.cm</p>
                    </div>
                </body>
                </html>
            `,
        });

        if (error) {
            console.error('Erreur Resend:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        // Email de confirmation au client
        await resend.emails.send({
            from: 'Hôtel La Valeureuse Mère <onboarding@resend.dev>',
            to: [email],
            subject: 'Confirmation de votre demande de réservation',
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
                        <h1>✅ Demande de Réservation Reçue</h1>
                    </div>
                    
                    <div class="content">
                        <p>Bonjour <strong>${fullname}</strong>,</p>
                        
                        <p>Nous avons bien reçu votre demande de réservation à l'Hôtel La Valeureuse Mère.</p>
                        
                        <p>Notre équipe va examiner votre demande et vous contactera dans les plus brefs délais pour confirmer votre réservation.</p>
                        
                        <p><strong>Récapitulatif de votre demande :</strong></p>
                        <ul>
                            <li>Type : ${reservationType === 'room' ? 'Chambre' : reservationType === 'table' ? 'Table au restaurant' : 'Événement'}</li>
                            <li>Arrivée : ${new Date(checkin).toLocaleDateString('fr-FR')}</li>
                            <li>Départ : ${new Date(checkout).toLocaleDateString('fr-FR')}</li>
                            <li>Adultes : ${adults || '1'} | Enfants : ${children || '0'}</li>
                        </ul>
                        
                        <p>Si vous avez des questions, n'hésitez pas à nous contacter.</p>
                        
                        <p>Cordialement,<br><strong>L'équipe de l'Hôtel La Valeureuse Mère</strong></p>
                    </div>
                    
                    <div class="footer">
                        <p>📞 +237 650 78 63 86 • +237 697 25 11 95</p>
                        <p>✉️ info@hotelvaleureusemere.cm</p>
                        <p>📍 NKOLBISSON-MINKOAMEYOS, Yaoundé, Cameroun</p>
                    </div>
                </body>
                </html>
            `,
        });

        return NextResponse.json(
            {
                success: true,
                message: 'Réservation envoyée avec succès',
                data
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Erreur lors de l\'envoi:', error);
        return NextResponse.json(
            { error: 'Erreur lors de l\'envoi de la réservation' },
            { status: 500 }
        );
    }
}
