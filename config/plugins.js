module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('EMAIL_HOST', 'smtp-relay.brevo.com'),
          port: env('EMAIL_PORT', 587),
          auth: {
            user: env('EMAIL_USERNAME'),
            pass: env('EMAIL_PASSWORD'),
          },
          secure: false,
        },
        settings: {
            defaultFrom: 'paulodaviddias4@gmail.com',
            defaultReplyTo: 'paulodaviddias4@gmail.com',
        },
      },
    },
    // ...
  });