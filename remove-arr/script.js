let a = [
    {
        'id': '1',
        'name': 'a1'
    },
    {
        'id': '2',
        'name': 'a2'
    },
    {
        'id': '3',
        'name': 'a3'
    }
];

let b = [
    {
        'id': '2',
        'name': 'a2'
    }
];

let c = a.filter(function(obja) {
    return !b.find(function(objb) {
        return obja.id === objb.id
    })
});

console.log('c', c);