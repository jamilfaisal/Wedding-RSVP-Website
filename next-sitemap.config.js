/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  generateRobotsTxt: true,
  generateIndexSitemap: false,

  transform: async (config, path) => {
    if (path.includes('/api/') || path.includes('/_next/') || path.includes('/rsvp/edit')) {
      return null;
    }

    // Default
    let priority = 0.8;
    let changefreq = 'monthly';

    if (path === '/en' || path === '/ar') {
      priority = 1.0;
      changefreq = 'weekly';
    }

    if (path.includes('/rsvp')) {
      priority = 0.6;
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },

  additionalPaths: async () => {
    const result = [];

    const routes = ['', '/accommodations', '/contact-faqs', '/rsvp', '/touristy-things'];
    const locales = ['en', 'ar'];

    locales.forEach((locale) => {
      routes.forEach((route) => {
        result.push({
          loc: `/${locale}${route}`,
          changefreq: 'monthly',
          priority: route === '' ? 1.0 : 0.8,
          lastmod: new Date().toISOString(),
        });
      });
    });

    return result;
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/rsvp/edit'],
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/sitemap.xml`,
    ],
  },

  exclude: ['/api/*', '/rsvp/edit', '/_next/*'],
};
