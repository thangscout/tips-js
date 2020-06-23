let arr1 = [1, 2, 5, 6, 9];
let arr2 = [3, 4, 7, 8, 10];

let res = [...arr1, ...arr2].sort((a, b) => +a > +b);
console.log('res', res);