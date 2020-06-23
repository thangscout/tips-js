const deepFlatten = arr => [].concat(
    ...arr.map(v => (
        Array.isArray(v) ? deepFlatten(v) : v
    ))
);

let result = deepFlatten([1, [2], [[3], 4], 5]);
console.log('result:', result);