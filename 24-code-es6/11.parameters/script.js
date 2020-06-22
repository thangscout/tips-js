const getURLParamters = url => (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),{}
)

let hasParam = getURLParamters('https://url.com/page?n=Adam&s=Smith&age=11');
let noParam = getURLParamters('https:google.com');

console.log('result 1:', hasParam);
console.log('result 1:', Object.keys(hasParam).length);

console.log('result 2:', noParam);
console.log('result 2:', Object.keys(noParam).length);