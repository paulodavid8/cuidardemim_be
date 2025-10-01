module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST', 'smtp-relay.brevo.com'),
          port: env('SMTP_PORT', 587),
          auth: {
            user: env('SMTP_USERNAME'),
            pass: env('SMTP_PASSWORD'),
          },
          secure: false,
        },
        settings: {
            defaultFrom: env('EMAIL_FROM'),
            defaultReplyTo: env('EMAIL_FROM'),
        },
      },
    },
    // ...
  });