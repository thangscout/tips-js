let cars = ['BMW', 'Benz', 'Benz', 'Tesla', 'BMW', 'Toyota'];
let carsObj = cars.reduce(function(obj, name) {
    obj[name] = obj[name] ? ++obj[name] : 1;
    return obj;
}, {});

console.log('result:', carsObj);