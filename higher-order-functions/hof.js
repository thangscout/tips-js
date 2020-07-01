const {data: grades} = require('./data.js');

let isBoy = student => "M" === student.sex;

let isGirl = student => "F" === student.sex;

let getBoys = grades => (grades.filter(isBoy));

let getGirls = grades => (grades.filter(isGirl));

let average = grades => (
    grades.reduce((acc, curr) => (acc + curr.grade), 0) / grades.length
);

let maxGrade = grades => (Math.max(...grades.map(i => i.grade)));

let minGrade = grades => (Math.min(...grades.map(i => i.grade)));

console.log('1. Tìm thứ hạng trung bình của ca lớp>>', average(grades));
console.log('2. Tìm thứ hạng trung bình của nam trong lớp>>', average(getBoys(grades)));
console.log('3. Tìm thứ hạng trung bình của nu trong lớp>>', average(getGirls(grades)));
console.log('4. Tìm thứ hạng cao nhat của nam trong lớp>>', maxGrade(getBoys(grades)));
console.log('5. Tìm thứ hạng cao nhat của nu trong lớp>>', maxGrade(getGirls(grades)));
console.log('6. Tìm thứ hạng thap nhat của nam trong lớp>>', minGrade(getBoys(grades)));
console.log('7. Tìm thứ hạng thap nhat của nu trong lớp>>', minGrade(getGirls(grades)));
console.log('8. Tìm thứ hạng cao nhat của ca lớp>>', maxGrade(grades));
console.log('9. Tìm thứ hạng thap nhat của ca lớp>>', minGrade(grades));