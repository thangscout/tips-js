let isEmailAddress = val => {
    return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(val) || /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(val);
};

console.log(isEmailAddress('gmail.com@.com'));
console.log(isEmailAddress('gmailtrue@gmail.com'));