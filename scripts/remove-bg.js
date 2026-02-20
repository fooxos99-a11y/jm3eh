import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';

const inputPath = '/vercel/share/v0-project/public/logo.jpg';
const outputPath = '/vercel/share/v0-project/public/logo.png';

const image = sharp(readFileSync(inputPath));
const { data, info } = await image.raw().ensureAlpha().toBuffer({ resolveWithObject: true });

const pixels = new Uint8Array(data);
const threshold = 30;

for (let i = 0; i < pixels.length; i += 4) {
  const r = pixels[i];
  const g = pixels[i + 1];
  const b = pixels[i + 2];

  // Check if pixel is close to the gray background (#f0f0f0 area)
  if (r > 220 && g > 220 && b > 220) {
    pixels[i + 3] = 0; // Make transparent
  }
}

const output = await sharp(Buffer.from(pixels), {
  raw: {
    width: info.width,
    height: info.height,
    channels: 4,
  },
})
  .png()
  .toBuffer();

writeFileSync(outputPath, output);
console.log('Background removed and saved to', outputPath);
