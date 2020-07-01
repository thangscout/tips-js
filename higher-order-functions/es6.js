const {data: grades} = require('./data.js');

// + 1.

let averageClass = grades.reduce((acc, curr) => (acc + curr.grade), 0) / grades.length;

console.log('1.Tìm thứ hạng trung bình của cả lớp >>> :', averageClass);

// + 2.

let findM = grades.filter((i) => 'M' === i.sex );
let averageM = findM.reduce((acc, curr) => (acc + curr.grade), 0) / findM.length;

console.log('2.Tìm thứ hạng trung bình của nam trong lớp >>> :', averageM);

// + 3.

let findF = grades.filter((i) => "F" === i.sex);
let averageF = findF.reduce((acc, cur) => (acc + cur.grade), 0) / findF.length;

console.log('3.Tìm thứ hạng trung bình của Nữ trong lớp >>> :', averageF);

// + 4.

let findMaxM = Math.max.apply(Math, findM.map(i => i.grade));

console.log('4.Tìm thứ hạng cao nhất của Nam trong lớp  >>>> :', findMaxM);

// + 5.

let findMaxF = Math.max.apply(Math, findF.map(i => i.grade));

console.log('5.Tìm thứ hạng cao nhất của Nữ trong lớp >>> :', findMaxF);

// + 6.

let findMinM = Math.min.apply(Math, findM.map(i => i.grade));

console.log('6.Tìm thứ hạng thấp nhất của Nam trong lớp >>> :', findMinM);

// + 7.

let findMinF = Math.min.apply(Math, findF.map(i => i.grade));

console.log('7.Tìm thứ hạng thấp nhất của Nữ trong lớp  >>> :', findMinF);

// + 8.

let findMaxClass = Math.max.apply(Math, grades.map(i => i.grade));

console.log('8.Tìm thứ hạng cao nhất của cả lớp  >>> :', findMaxClass);

// + 9.

let findMinClass = Math.min.apply(Math, grades.map(i => i.grade));

console.log('9.Tìm thứ hạng thấp nhất của cả lớp  >>> :', findMinClass);