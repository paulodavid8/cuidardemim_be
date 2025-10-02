module.exports = [
  (ctx, next) => {
    // Force HTTPS awareness for cookie security
    if (ctx.request.headers['x-forwarded-proto'] === 'https') {
      ctx.request.protocol = 'https';
    }
    return next();
  },
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
