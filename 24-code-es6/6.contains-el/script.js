const elementContains = ( parent, child ) => parent !== child && parent.contains(child);

let a1 = elementContains(document.querySelector('head'), document.querySelector('title'));
let a2 = elementContains(document.querySelector('body'), document.querySelector('body'));

console.log('a1', a1);
console.log('a2', a2);