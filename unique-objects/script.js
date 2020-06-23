const data = [
  { id: 1, name: "Jhon" },
  { id: 2, name: "sss" },
  { id: 1, name: "Jhon" },
];
const uniqueElementsBy = (arr, fn) =>
  arr.reduce((acc, v) => {
    if (!acc.some((x) => fn(v, x))) acc.push(v);
    return acc;
  }, []);

let result = uniqueElementsBy(data, (a, b) => a.id === b.id);
console.log('result:', result);
