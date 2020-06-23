function equar(a, b) {
    if ( a.length !== b.length ) {
        return false;
    } else {
        for ( let i = 0; i < a.length; i++) {
            if ( a[i] !== b[i] ) {
                return false;
            }
        }
        return true;
    }
} 

const s = equar([1, '2', 3], [1, 2, 3]);
const t = equar([1, 2, 3], [1, 2, 3]);

console.log('result 1:', s);
console.log('result 2:', t);