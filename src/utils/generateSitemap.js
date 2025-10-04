// Generate sitemap.xml for better SEO
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.hairsncares.com';

const routes = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'weekly'
  },
  {
    path: '/best-hair-care-products-hair-loss-scalp-health',
    priority: '0.9',
    changefreq: 'weekly'
  },
  {
    path: '/about-us-quality-hair-loss-scalp-care',
    priority: '0.8',
    changefreq: 'monthly'
  },
  {
    path: '/hair-loss-treatment-experts-dermatologists',
    priority: '0.9',
    changefreq: 'weekly'
  },
  {
    path: '/take-hair-test',
    priority: '0.9',
    changefreq: 'weekly'
  },
  {
    path: '/contact-hair-experts',
    priority: '0.8',
    changefreq: 'monthly'
  },
  {
    path: '/effective-hair-loss-treatment-men',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    path: '/hair-loss-women-causes-treatments-remedies',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    path: '/hair-transplants-fue-dhi-mhi-natural-restoration',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    path: '/advanced-hair-loss-solutions-prp-smp-cloning-systems',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    path: '/online-hair-loss-test-diagnosis-treatment',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    path: '/dr-amit-agarkar-hair-restoration-expert',
    priority: '0.7',
    changefreq: 'monthly'
  },
  {
    path: '/hair-care-blogs',
    priority: '0.7',
    changefreq: 'daily'
  },
  {
    path: '/disclaimer',
    priority: '0.3',
    changefreq: 'yearly'
  },
  {
    path: '/policy',
    priority: '0.3',
    changefreq: 'yearly'
  },
  {
    path: '/terms-of-service',
    priority: '0.3',
    changefreq: 'yearly'
  },
  {
    path: '/return-policy',
    priority: '0.3',
    changefreq: 'yearly'
  }
];

function generateSitemap() {
  const lastmod = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  routes.forEach(route => {
    sitemap += `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
}

const sitemapContent = generateSitemap();
const outputPath = path.join(__dirname, '../../public/sitemap.xml');

fs.writeFileSync(outputPath, sitemapContent, 'utf8');
console.log('Sitemap generated successfully at:', outputPath);

module.exports = { generateSitemap };