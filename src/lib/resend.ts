"use server";

import { Resend } from "resend";

export async function SendContactEmails(email: string) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const resend = new Resend(apiKey);

    // Email para a equipe BinaryInc
    const teamEmailHtml = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Novo Contato</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 500px;
            margin: 0 auto;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #1a1f7f 0%, #2d2d99 100%);
            padding: 40px 30px;
            text-align: center;
            color: white;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
        }
        .content {
            padding: 40px 30px;
            text-align: center;
        }
        .email-box {
            background: #f0f7ff;
            border: 2px solid #00d97f;
            border-radius: 8px;
            padding: 25px;
            margin: 20px 0;
        }
        .email-label {
            font-size: 12px;
            color: #00d97f !important;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 8px;
        }
        .email-text {
            font-size: 18px;
            color: #1a1f7f !important;
            font-weight: 600;
            word-break: break-all;
        }
        .action-button {
            display: inline-block;
            background: #00d97f;
            color: white !important;
            padding: 12px 30px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
            margin-top: 20px;
        }
        .footer {
            background: #f9f9f9;
            padding: 20px 30px;
            text-align: center;
            font-size: 12px;
            color: #666;
            border-top: 1px solid #e5e5e5;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Novo Contato!</h1>
        </div>
        <div class="content">
            <p style="color: #333; font-size: 16px; margin: 0 0 20px 0;">
                Um novo cliente tentou entrar em contato!
            </p>
            <div class="email-box">
                <div class="email-label">E-mail do Cliente</div>
                <div class="email-text">${email}</div>
            </div>
            <a href="mailto:${email}" class="action-button">Responder</a>
        </div>
        <div class="footer">
            <p style="margin: 0;">BinaryInc &copy; ${new Date().getFullYear()}</p>
        </div>
    </div>
</body>
</html>
    `;

    // Email de confirmação para o cliente
    const clientEmailHtml = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contato Recebido</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 500px;
            margin: 0 auto;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #1a1f7f 0%, #2d2d99 100%);
            padding: 40px 30px;
            text-align: center;
            color: white;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
        }
        .content {
            padding: 40px 30px;
            text-align: center;
        }
        .checkmark {
            font-size: 48px;
            margin-bottom: 20px;
        }
        .message {
            color: #333;
            font-size: 16px;
            line-height: 1.6;
            margin: 20px 0;
        }
        .highlight {
            color: #00d97f;
            font-weight: 600;
        }
        .footer {
            background: #f9f9f9;
            padding: 20px 30px;
            text-align: center;
            font-size: 12px;
            color: #666;
            border-top: 1px solid #e5e5e5;
        }
        .footer a {
            color: #00d97f;
            text-decoration: none;
            font-weight: 600;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>✓ Contato Recebido!</h1>
        </div>
        <div class="content">
            <div class="checkmark">✓</div>
            <div class="message">
                Obrigado por entrar em contato com a <span class="highlight">BinaryInc</span>!
            </div>
            <div class="message">
                Recebemos seu e-mail e nossa equipe irá responder em breve.
            </div>
        </div>
        <div class="footer">
            <p style="margin: 0;">
                <a href="https://binaryinc.com.br">Visite nosso site</a>
            </p>
            <p style="margin: 10px 0 0 0;">BinaryInc © ${new Date().getFullYear()}</p>
        </div>
    </div>
</body>
</html>
    `;

    // Enviar ambos os emails
    await Promise.all([
      // Email para a equipe
      resend.emails.send({
        from: "Sistema BinaryInc <noreply@binaryinc.com.br>",
        to: "contato@binaryinc.com.br",
        subject: `Novo Contato: ${email}`,
        html: teamEmailHtml,
      }),
      // Email para o cliente
      resend.emails.send({
        from: "BinaryInc <noreply@binaryinc.com.br>",
        to: email,
        subject: "Contato Recebido ✓",
        html: clientEmailHtml,
      }),
    ]);

    return { success: true, error: null };
  } catch (error) {
    console.error("Erro ao enviar e-mails:", error);

    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Erro desconhecido ao enviar e-mails",
    };
  }
}
