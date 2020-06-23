const data = {
    name: 'Anonystick',
    age: 18,
    add: 'HN',
}

const objectToQueryString = (obj) => 
    Object.keys(obj).map((key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`
    ).join('&');

let result = objectToQueryString(data);

console.log('result:', result);