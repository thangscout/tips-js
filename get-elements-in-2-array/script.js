const similarity = ( arr, values ) => arr.filter(v => values.includes(v));

console.log('result:', similarity([1, 2, 3], [1, 2, 5, 3]));