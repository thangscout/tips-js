const RGBToHex = (r, g, b) => (
    (r << 16) + (g << 8) + b
).toString(16).padStart(6, '0');

let result = RGBToHex(255, 165, 1);
console.log('result:', result);