import fs from 'fs'
import path from 'path'
import { getSitemapContents } from "services/SanityServices";
import { hasArrayElements } from 'utils/commonUtils';

export const getSitemapData = async () => {
  const sitemapData = await getSitemapContents();

  let sitemapXml = '';
  const urls = sitemapData?.urls || [];
  const lastmod = new Date().toISOString().split('T')[0]

  if (!hasArrayElements(urls)) {
    console.warn('No sitemap URLs found')
    return {
      SitemapContent: { content: sitemapXml },
    };
  }

  try {
    sitemapXml =
      `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls.map((url) =>
        `<url>
          <loc>${url}</loc>
           <lastmod>${lastmod}</lastmod>
          </url>`)
        .join('')}
        </urlset>
    `;

    const filePath = path.join(process.cwd(), 'public', 'sitemap.xml');
    fs.writeFileSync(filePath, sitemapXml.trim());
    console.log('✅ sitemap.xml generated')
  } catch (error) {
    console.error('Error generating sitemap.xml:', error)
  }

  return {
    AppHead: { seo: { title: "Sitemap - Valoriz", description: "Explore the sitemap of Valoriz to discover our comprehensive range of services, industry solutions, and insights. Navigate through our digital transformation expertise and ecommerce development offerings." }, pathName: "/sitemap-creation" },
    SitemapContent: { content: sitemapXml },
  };
};

export default getSitemapData;
