import fs from 'fs-extra';
import path from 'path';
import { SiteInfo } from '../../app/_common/configs/siteInfo';

async function generateSitemap(appDirectory: string) {
  // Define the URL as SiteInfo.siteUrl in /app/_common/configs/siteInfo.ts or wherever for the baseUrl and import before using.
  let baseUrl = SiteInfo.siteUrl;

  // Add trailing slash to baseUrl if it's missing
  if (!baseUrl.endsWith('/')) {
    baseUrl += '/';
  }

  const outDir = path.join(process.cwd(), 'out');
  const sitemapPath = path.join(outDir, 'sitemap.xml');

  const urls: { loc: string, lastmod: string }[] = [];

  async function traverseDir(currentPath: string, currentUrl: string) {
    const files = await fs.readdir(currentPath);
    for (const file of files) {
      const fullPath = path.join(currentPath, file);
      const stat = await fs.stat(fullPath);

      if (stat.isDirectory()) {
        await traverseDir(fullPath, currentUrl + file + '/');
      } else if (file === 'page.tsx' && currentPath !== appDirectory) {
        const url = currentUrl.replace(/\\/g, '/');
        const lastmod = formatLastmodDate(stat.mtime); // Format lastmod date
        urls.push({ loc: url, lastmod });
      }
    }
  }

  // Add top level URL for /app/page.tsx
  const topLevelUrl = `${baseUrl}`;
  const pageTsxPath = path.join(appDirectory, 'page.tsx');
  const stat = await fs.stat(pageTsxPath);
  const lastmod = formatLastmodDate(stat.mtime); // Format lastmod date
  urls.push({ loc: topLevelUrl, lastmod });

  await traverseDir(appDirectory, baseUrl);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url><loc>${url.loc}</loc><lastmod>${url.lastmod}</lastmod></url>`).join('\n')}
</urlset>`;

  await fs.ensureDir(outDir);
  await fs.writeFile(sitemapPath, sitemap, 'utf-8');
  console.log(`Sitemap has been generated at ${sitemapPath}`);
}

function formatLastmodDate(date: Date): string {
  const year = date.getUTCFullYear();
  const month = `0${date.getUTCMonth() + 1}`.slice(-2);
  const day = `0${date.getUTCDate()}`.slice(-2);
  const hours = `0${date.getUTCHours()}`.slice(-2);
  const minutes = `0${date.getUTCMinutes()}`.slice(-2);
  const seconds = `0${date.getUTCSeconds()}`.slice(-2);
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+09:00`;
}

const appDirectory = path.join(process.cwd(), 'app');
generateSitemap(appDirectory).catch(err => {
  console.error(err);
  process.exit(1);
});
