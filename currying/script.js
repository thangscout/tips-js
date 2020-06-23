const movies = [
  {
    id: 1,
    name: "Matrix",
  },
  {
    id: 2,
    name: "Star Wars",
  },
  {
    id: 3,
    name: "The wolf of Wall Street",
  },
];

const series = [
  {
    id: 4,
    name: "South Park",
  },
  {
    id: 5,
    name: "The Simpsons",
  },
  {
    id: 6,
    name: "The Big Bang Theory",
  },
];


const get = property => object => object[property];

const getId = get('id');
const getName = get('name');

console.log(movies.map(getName));
console.log(series.map(getName));
console.log(movies.map(getId));
console.log(series.map(getId));