import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public', 'images');

// Read the SVG and add background
const svgContent = readFileSync(join(publicDir, 'elysian-mark.svg'), 'utf8');

// Modify SVG to have #080C14 background and lighter mark color for visibility
const svgWithBg = svgContent
  .replace('<svg ', '<svg style="background-color:#080C14" ')
  .replace(/fill="#0A1929"/g, 'fill="rgba(224,233,248,0.92)"');

// Create a proper SVG with background rect
const svgWithRect = `<svg width="500" height="500" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
  <rect width="500" height="500" fill="#080C14"/>
  ${svgContent.replace(/<svg[^>]*>/, '').replace('</svg>', '').replace(/fill="#0A1929"/g, 'fill="rgba(224,233,248,0.92)"')}
</svg>`;

async function generateFavicons() {
  // Generate 32x32 favicon
  await sharp(Buffer.from(svgWithRect))
    .resize(32, 32)
    .png()
    .toFile(join(publicDir, 'favicon-32.png'));

  console.log('Created favicon-32.png');

  // Generate 180x180 apple touch icon
  await sharp(Buffer.from(svgWithRect))
    .resize(180, 180)
    .png()
    .toFile(join(publicDir, 'apple-touch-icon.png'));

  console.log('Created apple-touch-icon.png');
}

generateFavicons().catch(console.error);
