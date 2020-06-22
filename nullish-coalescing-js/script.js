const doge = {
    name: 'anonystick',
    height: '50cm',
    weight: undefined,
    hasBaby: null,
    age: 0,
    babyName: '',
    babyAge: NaN,
};

const dogeWeight = doge.weight || 10; 
const dogeHasBaby = doge.hasBaby || false; 
const dogeAge = doge.age || 0.1; 
const dogeBabyName = doge.babyName || 'defaultName';
const dogeBabyAge = doge.babyAge || 'defaultAge';

console.log('dogeWeight:', dogeWeight);
console.log('dogeHasBaby:', dogeHasBaby);
console.log('dogeAge:', dogeAge);
console.log('dogeBabyName:', dogeBabyName);
console.log('dogeBabyAge:', dogeBabyAge);