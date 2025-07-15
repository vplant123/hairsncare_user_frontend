// Sitemap Generator Utility
export const generateSitemapXML = (routes, products = [], blogs = []) => {
  const baseURL = 'https://www.hairsncares.com';
  const currentDate = new Date().toISOString().split('T')[0] + 'T10:00:00+05:30';

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static routes
  const staticRoutes = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/best-hair-care-products-hair-loss-scalp-health', priority: '0.9', changefreq: 'weekly' },
    { path: '/about-us-quality-hair-loss-scalp-care', priority: '0.8', changefreq: 'monthly' },
    { path: '/hair-loss-treatment-experts-dermatologists', priority: '0.9', changefreq: 'monthly' },
    { path: '/our-expertise', priority: '0.8', changefreq: 'monthly' },
    { path: '/contact-hair-experts', priority: '0.7', changefreq: 'monthly' },
    { path: '/effective-hair-loss-treatment-men', priority: '0.9', changefreq: 'weekly' },
    { path: '/hair-loss-women-causes-treatments-remedies', priority: '0.9', changefreq: 'weekly' },
    { path: '/hair-transplants-fue-dhi-mhi-natural-restoration', priority: '0.9', changefreq: 'weekly' },
    { path: '/advanced-hair-loss-solutions-prp-smp-cloning-systems', priority: '0.9', changefreq: 'weekly' },
    { path: '/take-hair-test', priority: '0.9', changefreq: 'weekly' },
    { path: '/online-hair-loss-test-diagnosis-treatment', priority: '0.9', changefreq: 'weekly' },
    { path: '/dr-amit-agarkar-hair-restoration-expert', priority: '0.8', changefreq: 'monthly' },
    { path: '/hair-care-blogs', priority: '0.8', changefreq: 'daily' },
    { path: '/policy', priority: '0.3', changefreq: 'yearly' },
    { path: '/termsOfService', priority: '0.3', changefreq: 'yearly' },
    { path: '/disclaimer', priority: '0.3', changefreq: 'yearly' },
    { path: '/returnPolicy', priority: '0.3', changefreq: 'yearly' }
  ];

  // Add static routes to sitemap
  staticRoutes.forEach(route => {
    sitemap += `
  <url>
    <loc>${baseURL}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>${route.priority}</priority>
    <changefreq>${route.changefreq}</changefreq>
  </url>`;
  });

  // Add product pages
  products.forEach(product => {
    sitemap += `
  <url>
    <loc>${baseURL}/product-detail/${product?.metaSlug ?? product._id}</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.9</priority>
    <changefreq>weekly</changefreq>
  </url>`;
  });

  // Add blog posts
  blogs.forEach(blog => {
    const blogPath = `/hair-care-blogs/${encodeURIComponent(blog.category)}/${encodeURIComponent(blog.slug)}`;
    sitemap += `
  <url>
    <loc>${baseURL}${blogPath}</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.6</priority>
    <changefreq>monthly</changefreq>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
};

// Function to download sitemap
export const downloadSitemap = (sitemapContent, filename = 'sitemap.xml') => {
  const blob = new Blob([sitemapContent], { type: 'application/xml' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
};

// Function to validate sitemap URLs
export const validateSitemapURLs = (sitemapContent) => {
  const urlRegex = /<loc>(.*?)<\/loc>/g;
  const urls = [];
  let match;

  while ((match = urlRegex.exec(sitemapContent)) !== null) {
    urls.push(match[1]);
  }

  return urls;
};

// Function to check for duplicate URLs
export const checkDuplicateURLs = (urls) => {
  const duplicates = urls.filter((url, index) => urls.indexOf(url) !== index);
  return [...new Set(duplicates)];
}; 