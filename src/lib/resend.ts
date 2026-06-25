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
    const teamNotificationEmailHtml = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Novo contato - BinaryInc</title>
        <style>
            @media (prefers-color-scheme: dark) {
                body {
                    background-color: #1a1a1a !important;
                }
                .email-container {
                    background-color: #12053c !important;
                }
                .text-dark {
                    color: #ffffff !important;
                }
                .text-secondary {
                    color: #b0b0b0 !important;
                }
                .divider {
                    background-color: #03e2ad !important;
                }
                .light-logo {
                    display: none;
                }
                .dark-logo {
                    display: block;
                }
            }

            @media (prefers-color-scheme: light) {
                body {
                    background-color: #ffffff !important;
                }
                .email-container {
                    background-color: #ffffff !important;
                }
                .text-dark {
                    color: #12053c !important;
                }
                .text-secondary {
                    color: #666666 !important;
                }
                .divider {
                    background-color: #03e2ad !important;
                }
                .light-logo {
                    display: block;
                }
                .dark-logo {
                    display: none;
                }
            }

            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
                line-height: 1.6;
            }

            .email-container {
                max-width: 600px;
                margin: 0 auto;
                border-radius: 8px;
                overflow: hidden;
            }

            .header {
                padding: 40px 30px;
                background: linear-gradient(135deg, #12053c 0%, #1a0f4a 100%);
                text-align: center;
            }

            .logo {
                height: 60px;
                margin-bottom: 20px;
            }

            .logo img {
                max-height: 60px;
                width: auto;
            }

            .main-content {
                padding: 50px 30px;
            }

            h1 {
                font-size: 28px;
                font-weight: 600;
                margin-bottom: 15px;
                color: #12053c;
            }

            .subtitle {
                font-size: 16px;
                color: #03e2ad;
                margin-bottom: 30px;
                font-weight: 500;
            }

            .divider {
                height: 3px;
                width: 50px;
                margin-bottom: 30px;
            }

            .message {
                font-size: 16px;
                line-height: 1.8;
                margin-bottom: 30px;
            }

            .email-highlight {
                color: #03e2ad;
                font-weight: 600;
                word-break: break-all;
            }

            .cta-section {
                margin: 40px 0;
                text-align: center;
            }

            .cta-button {
                display: inline-block;
                padding: 14px 40px;
                background-color: #03e2ad;
                color: #12053c;
                text-decoration: none;
                border-radius: 6px;
                font-weight: 600;
                font-size: 16px;
                transition: all 0.3s ease;
            }

            .cta-button:hover {
                opacity: 0.9;
                transform: translateY(-2px);
            }

            .footer-section {
                background-color: #f8f9fa;
                padding: 40px 30px;
                text-align: center;
            }

            @media (prefers-color-scheme: dark) {
                .footer-section {
                    background-color: #0f0722 !important;
                }
            }

            .copyright {
                font-size: 12px;
                margin-top: 25px;
                padding-top: 20px;
                border-top: 1px solid #e0e0e0;
            }

            @media (prefers-color-scheme: dark) {
                .copyright {
                    border-top-color: #333 !important;
                }
            }

            .text-muted {
                color: #999999;
            }

            @media (prefers-color-scheme: dark) {
                .text-muted {
                    color: #888888 !important;
                }
            }

            /* Responsividade */
            @media only screen and (max-width: 600px) {
                .main-content {
                    padding: 30px 20px;
                }

                .footer-section {
                    padding: 30px 20px;
                }

                .header {
                    padding: 30px 20px;
                }

                h1 {
                    font-size: 24px;
                }

                .message {
                    font-size: 14px;
                }
            }
        </style>
    </head>
    <body style="margin: 0; padding: 20px; background-color: #f5f5f5;">
        <div class="email-container" style="max-width: 600px; margin: 0 auto;">
            <!-- Header -->
            <div class="header" style="padding: 40px 30px; background: linear-gradient(135deg, #12053c 0%, #1a0f4a 100%); text-align: center;">
                <div class="logo" style="height: 36px;margin-bottom: 0;">
                    <!--- dark --->
                    <img src="https://www.binaryinc.com.br/emails/logo-binary-dark-theme.png" alt="logo binary dark theme" width="119" height="35" class="dark-logo" />
                </div>
            </div>

            <!-- Main Content -->
            <div class="main-content" style="padding: 50px 30px; background-color: #ffffff;">
                <h1 style="font-size: 28px; font-weight: 600; margin-bottom: 15px; color: #12053c;">Novo contato recebido!</h1>
                
                <div class="divider" style="height: 3px; width: 50px; background-color: #03e2ad; margin-bottom: 30px;"></div>
                
                <p class="subtitle" style="font-size: 16px; color: #03e2ad; margin-bottom: 30px; font-weight: 500;">Cliente interessado nos nossos serviços</p>

                <div class="message" style="font-size: 16px; line-height: 1.8; margin-bottom: 30px; color: #333333;">
                    <p>Olá time,</p>
                    <p style="margin-top: 15px;">Um novo contato está <span class="email-highlight" style="color: #03e2ad; font-weight: 600;">interessado nos serviços da BinaryInc</span>.</p>
                    <p style="margin-top: 30px; font-size: 14px; color: #999999;">
                        <strong style="color: #12053c;">Email do cliente:</strong>
                    </p>
                    <p style="margin-top: 8px; font-size: 18px; font-weight: 600; color: #03e2ad; word-break: break-all;">
                        ${email}
                    </p>
                </div>

                <div class="cta-section" style="margin: 40px 0; text-align: center;">
                    <a href="mailto:${email}" class="cta-button" style="display: inline-block; padding: 14px 40px; background-color: #03e2ad; color: #12053c; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">Responder Cliente</a>
                </div>

                <p style="font-size: 14px; color: #666666; margin-top: 30px;">
                    Responda assim que possível para garantir o melhor atendimento.
                </p>
            </div>

            <!-- Footer -->
            <div class="footer-section" style="background-color: #f8f9fa; padding: 40px 30px; text-align: center;">
                <div class="copyright" style="font-size: 12px; margin-top: 25px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #999999;">
                    <p style="margin: 5px 0;">© ${new Date().getFullYear()} BinaryInc. Todos os direitos reservados.</p>
                    <p style="margin: 5px 0;">Email automático — não responda aqui</p>
                </div>
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
        <title>BinaryInc - Obrigado por entrar em contato</title>
        <style>
            @media (prefers-color-scheme: dark) {
                body {
                    background-color: #1a1a1a !important;
                }
                .email-container {
                    background-color: #12053c !important;
                }
                .text-dark {
                    color: #ffffff !important;
                }
                .text-secondary {
                    color: #b0b0b0 !important;
                }
                .divider {
                    background-color: #03e2ad !important;
                }
                .light-logo {
                    display: none;
                }
                .dark-logo {
                    display: block;
                }
            }

            @media (prefers-color-scheme: light) {
                body {
                    background-color: #ffffff !important;
                }
                .email-container {
                    background-color: #ffffff !important;
                }
                .text-dark {
                    color: #12053c !important;
                }
                .text-secondary {
                    color: #666666 !important;
                }
                .divider {
                    background-color: #03e2ad !important;
                }
                .light-logo {
                    display: block;
                }
                .dark-logo {
                    display: none;
                }
            }

            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
                line-height: 1.6;
            }

            .email-container {
                max-width: 600px;
                margin: 0 auto;
                border-radius: 8px;
                overflow: hidden;
            }

            .header {
                padding: 40px 30px;
                background: linear-gradient(135deg, #12053c 0%, #1a0f4a 100%);
                text-align: center;
            }

            .logo {
                height: 60px;
                margin-bottom: 20px;
            }

            .logo img {
                max-height: 60px;
                width: auto;
            }

            .main-content {
                padding: 50px 30px;
            }

            h1 {
                font-size: 28px;
                font-weight: 600;
                margin-bottom: 15px;
                color: #ffffff;
            }

            .subtitle {
                font-size: 16px;
                color: #03e2ad;
                margin-bottom: 30px;
                font-weight: 500;
            }

            .divider {
                height: 3px;
                width: 50px;
                margin-bottom: 30px;
            }

            .message {
                font-size: 16px;
                line-height: 1.8;
                margin-bottom: 30px;
            }

            .highlight {
                color: #03e2ad;
                font-weight: 600;
            }

            .cta-section {
                margin: 40px 0;
                text-align: center;
            }

            .cta-button {
                display: inline-block;
                padding: 14px 40px;
                background-color: #03e2ad;
                color: #12053c;
                text-decoration: none;
                border-radius: 6px;
                font-weight: 600;
                font-size: 16px;
                transition: all 0.3s ease;
            }

            .cta-button:hover {
                opacity: 0.9;
                transform: translateY(-2px);
            }

            .footer-section {
                background-color: #f8f9fa;
                padding: 40px 30px;
                text-align: center;
            }

            @media (prefers-color-scheme: dark) {
                .footer-section {
                    background-color: #0f0722 !important;
                }
            }

            .website-link {
                font-size: 16px;
                margin-bottom: 25px;
            }

            .website-link a {
                color: #03e2ad;
                text-decoration: none;
                font-weight: 500;
            }

            .website-link a:hover {
                text-decoration: underline;
            }

            .social-icons {
                margin: 25px 0;
            }

            .social-icon {
                display: inline-block;
                width: 40px;
                height: 40px;
                margin: 0 10px;
                border-radius: 50%;
                background-color: #03e2ad;
                text-align: center;
                line-height: 40px;
            }

            .social-icon a {
                color: #12053c;
                text-decoration: none;
                font-weight: bold;
                font-size: 18px;
            }

            .copyright {
                font-size: 12px;
                margin-top: 25px;
                padding-top: 20px;
                border-top: 1px solid #e0e0e0;
            }

            @media (prefers-color-scheme: dark) {
                .copyright {
                    border-top-color: #333 !important;
                }
            }

            .text-muted {
                color: #999999;
            }

            @media (prefers-color-scheme: dark) {
                .text-muted {
                    color: #888888 !important;
                }
            }

            /* Responsividade */
            @media only screen and (max-width: 600px) {
                .main-content {
                    padding: 30px 20px;
                }

                .footer-section {
                    padding: 30px 20px;
                }

                .header {
                    padding: 30px 20px;
                }

                h1 {
                    font-size: 24px;
                }

                .message {
                    font-size: 14px;
                }
            }
        </style>
    </head>
    <body style="margin: 0; padding: 20px; background-color: #f5f5f5;">
        <div class="email-container" style="max-width: 600px; margin: 0 auto;">
            <!-- Header -->
            <div class="header" style="padding: 40px 30px; background: linear-gradient(135deg, #12053c 0%, #1a0f4a 100%); text-align: center;">
                <div class="logo" style="height: 36px;margin-bottom: 0;">
                    <!--- dark --->
                    <img src="https://www.binaryinc.com.br/emails/logo-binary-dark-theme.png" alt="logo binary dark theme" width="119" height="35" class="dark-logo" />
               </div>
            </div>

            <!-- Main Content -->
            <div class="main-content" style="padding: 50px 30px; background-color: #ffffff;">
                <h1 style="font-size: 28px; font-weight: 600; margin-bottom: 15px; color: #12053c;">Obrigado por entrar em contato!</h1>
                
                <div class="divider" style="height: 3px; width: 50px; background-color: #03e2ad; margin-bottom: 30px;"></div>
                
                <p class="subtitle" style="font-size: 16px; color: #03e2ad; margin-bottom: 30px; font-weight: 500;">Recebemos sua mensagem com sucesso</p>

                <div class="message" style="font-size: 16px; line-height: 1.8; margin-bottom: 30px; color: #333333;">
                    <p>Olá,</p>
                    <p style="margin-top: 15px;">Muito obrigado por entrar em contato com a <span class="highlight" style="color: #03e2ad; font-weight: 600;">BinaryInc</span>!</p>
                    <p style="margin-top: 15px;">Recebemos sua mensagem e estamos muito felizes em saber que você se interessou pelos nossos serviços. Nossa equipe está analisando seus dados e <span class="highlight" style="color: #03e2ad; font-weight: 600;">retornará em breve</span> com uma resposta completa.</p>
                    <p style="margin-top: 15px;">Enquanto isso, sinta-se à vontade para explorar mais sobre nossas soluções no nosso site.</p>
                </div>

                <div class="cta-section" style="margin: 40px 0; text-align: center;">
                    <a href="https://binaryinc.com.br" class="cta-button" style="display: inline-block; padding: 14px 40px; background-color: #03e2ad; color: #12053c; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">Visite nosso site</a>
                </div>

                <p style="font-size: 14px; color: #666666; margin-top: 30px;">
                    Se você tiver alguma dúvida urgente, não hesite em entrar em contato conosco novamente.
                </p>
            </div>

            <!-- Footer -->
            <div class="footer-section" style="background-color: #f8f9fa; padding: 40px 30px; text-align: center;">
                <div class="website-link" style="font-size: 16px; margin-bottom: 25px;">
                    <a href="https://binaryinc.com.br" style="color: #03e2ad; text-decoration: none; font-weight: 500;">binaryinc.com.br</a>
                </div>

                <p style="font-size: 14px; color: #666666; margin-bottom: 20px;">Siga-nos nas redes sociais:</p>

                <div class="social-icons" style="margin: 25px 0;">
                    <a href="https://linkedin.com/company/binaryinc" style="display: inline-block;width:40px;height:40px;margin:0 10px;border-radius:50%;background-color:#03e2ad;text-align:center;line-height: 56px;text-decoration:none">
                        <img src="https://www.binaryinc.com.br/emails/linkedin-icon-white.png" alt="linkedin icon" width="25px" height="25px" />
                    </a>
                    <a href="https://instagram.com/binaryinc" style="display: inline-block;width:40px;height:40px;margin:0 10px;border-radius:50%;background-color:#03e2ad;text-align:center;line-height: 56px;text-decoration:none">
                        <img src="https://www.binaryinc.com.br/emails/instagram-icon-white.png" alt="instagram icon" width="25px" height="25px" />
                    </a>
                </div>

                <div class="copyright" style="font-size: 12px; margin-top: 25px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #999999;">
                    <p style="margin: 5px 0;">© ${new Date().getFullYear()} BinaryInc. Todos os direitos reservados.</p>
                    <p style="margin: 5px 0;">Brasil</p>
                </div>
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
        html: teamNotificationEmailHtml,
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
