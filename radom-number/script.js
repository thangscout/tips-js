function GetRadomNum(min, max) {
    let range = max - min;
    let rand = Math.random();
    return (min + Math.round(rand * range));
}
let num = GetRadomNum(10000, 999999);
alert(num);