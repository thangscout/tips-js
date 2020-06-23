const items = [1, 2, 3, 4, 5];
const valueToRemove = 4;
const filteredItems = items.filter(item => item !== valueToRemove);
console.log('remove item result:', filteredItems);


const array = [ 1, 2, 3, 4, 5];
const valuesToRemove = [3, 4];
const filteredItems2 = array.filter(item => !valuesToRemove.includes(item));
console.log('remove items result:', filteredItems2);