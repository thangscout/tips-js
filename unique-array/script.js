const data = [
  { id: 1, name: "king" },
  { id: 2, name: "master" },
  { id: 3, name: "lisa" },
  { id: 4, name: "ion" },
  { id: 5, name: "jim" },
  { id: 6, name: "gowtham" },
  { id: 1, name: "jam" },
  { id: 1, name: "lol" },
  { id: 2, name: "kwick" },
  { id: 3, name: "april" },
  { id: 7, name: "sss" },
  { id: 8, name: "brace" },
  { id: 8, name: "peiter" },
  { id: 5, name: "hey" },
  { id: 6, name: "mkl" },
  { id: 9, name: "glow" },
  { id: 9, name: "glow" },
  { id: 10, name: "glow" }
];

const getUnique = ( arr, comp ) => {
  const unique = arr
    .map(e => e[comp])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter(e => arr[e])
    .map(e => arr[e]);
  
  return unique;
}

console.log(getUnique(data, 'name'))