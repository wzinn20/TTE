// Configuração do EmailJS
// Para configurar, siga estes passos:

// 1. Acesse: https://www.emailjs.com/
// 2. Crie uma conta gratuita
// 3. Vá em "Email Services" e adicione o Gmail
// 4. Vá em "Email Templates" e crie um template
// 5. Vá em "Account" > "API Keys" para obter o User ID

// Substitua os valores abaixo pelos seus dados reais:

const EMAILJS_CONFIG = {
    USER_ID: "YOUR_USER_ID", // Seu User ID do EmailJS
    SERVICE_ID: "YOUR_SERVICE_ID", // ID do serviço Gmail
    TEMPLATE_ID: "YOUR_TEMPLATE_ID", // ID do template de email
    TO_EMAIL: "nelizeu070@gmail.com" // Email de destino
};

// Exemplo de template HTML para o EmailJS:
/*
Template HTML:
Nome: {{from_name}}
Email: {{from_email}}
Assunto: {{subject}}

Mensagem:
{{message}}
*/ 