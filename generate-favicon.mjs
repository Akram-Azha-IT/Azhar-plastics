// Converts azhar-cons-logo.png into a valid favicon.ico (ICO wrapping PNG data)
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const pngPath = resolve(__dirname, 'public', 'azhar-cons-logo.png');
const icoPath = resolve(__dirname, 'src', 'app', 'favicon.ico');

const png = readFileSync(pngPath);
const pngSize = png.length;

// ICO format: 1 image, using raw PNG data (supported in all modern browsers)
// ICONDIR header (6 bytes)
const icondir = Buffer.alloc(6);
icondir.writeUInt16LE(0, 0);   // reserved
icondir.writeUInt16LE(1, 2);   // type: 1 = ICO
icondir.writeUInt16LE(1, 4);   // number of images

// ICONDIRENTRY (16 bytes)
const entry = Buffer.alloc(16);
entry.writeUInt8(0, 0);   // width  (0 = 256)
entry.writeUInt8(0, 1);   // height (0 = 256)
entry.writeUInt8(0, 2);   // color count
entry.writeUInt8(0, 3);   // reserved
entry.writeUInt16LE(1, 4); // planes
entry.writeUInt16LE(32, 6); // bit count
entry.writeUInt32LE(pngSize, 8);       // size of image data
entry.writeUInt32LE(6 + 16, 12);       // offset of image data (after header + entry)

const ico = Buffer.concat([icondir, entry, png]);
writeFileSync(icoPath, ico);
console.log(`✅ favicon.ico written to ${icoPath}`);
