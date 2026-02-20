import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';

const input = readFileSync('/vercel/share/v0-project/public/logo.jpg');

// The background is a light gray (#f2f2f2 / ~242,242,242)
// We'll convert to PNG with transparency, replacing near-white/light-gray pixels with transparent
const image = sharp(input);
const { width, height } = await image.metadata();

const rawBuffer = await image.raw().toBuffer();

// Create RGBA buffer
const rgbaBuffer = Buffer.alloc(width * height * 4);

for (let i = 0; i < width * height; i++) {
  const r = rawBuffer[i * 3];
  const g = rawBuffer[i * 3 + 1];
  const b = rawBuffer[i * 3 + 2];
  
  // If pixel is close to the background color (light gray ~235-250)
  if (r > 230 && g > 230 && b > 230) {
    rgbaBuffer[i * 4] = 0;
    rgbaBuffer[i * 4 + 1] = 0;
    rgbaBuffer[i * 4 + 2] = 0;
    rgbaBuffer[i * 4 + 3] = 0; // transparent
  } else {
    rgbaBuffer[i * 4] = r;
    rgbaBuffer[i * 4 + 1] = g;
    rgbaBuffer[i * 4 + 2] = b;
    rgbaBuffer[i * 4 + 3] = 255; // opaque
  }
}

await sharp(rgbaBuffer, { raw: { width, height, channels: 4 } })
  .png()
  .toFile('/vercel/share/v0-project/public/logo.png');

console.log('Background removed successfully! Saved as logo.png');
