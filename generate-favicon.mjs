// Converts azhar-cons-logo.png into a proper favicon.ico with resized PNG data
import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const pngPath = resolve(__dirname, 'public', 'azhar-cons-logo.png');
const icoPath = resolve(__dirname, 'src', 'app', 'favicon.ico');
const iconPngPath = resolve(__dirname, 'src', 'app', 'icon.png');

// Resize to 48x48 for the ICO (fits in browser tabs perfectly)
const resized48 = await sharp(pngPath)
  .resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();

// Also resize to 32x32 for icon.png used by Next.js metadata
const resized32 = await sharp(pngPath)
  .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();

// Write resized icon.png (used by Next.js App Router)
writeFileSync(iconPngPath, resized32);
console.log(`✅ icon.png (32x32) written to ${iconPngPath}`);

// Build ICO wrapping the resized 48x48 PNG
const pngSize = resized48.length;

// ICONDIR header (6 bytes)
const icondir = Buffer.alloc(6);
icondir.writeUInt16LE(0, 0);  // reserved
icondir.writeUInt16LE(1, 2);  // type: 1 = ICO
icondir.writeUInt16LE(1, 4);  // number of images: 1

// ICONDIRENTRY (16 bytes)
const entry = Buffer.alloc(16);
entry.writeUInt8(0, 0);         // width  (0 = 256, which is fine for 48px)
entry.writeUInt8(0, 1);         // height (0 = 256)
entry.writeUInt8(0, 2);         // color count (0 = no palette)
entry.writeUInt8(0, 3);         // reserved
entry.writeUInt16LE(1, 4);      // planes
entry.writeUInt16LE(32, 6);     // bit count
entry.writeUInt32LE(pngSize, 8);      // size of image data
entry.writeUInt32LE(6 + 16, 12);      // offset (after header + entry)

const ico = Buffer.concat([icondir, entry, resized48]);
writeFileSync(icoPath, ico);
console.log(`✅ favicon.ico (48x48) written to ${icoPath}`);
