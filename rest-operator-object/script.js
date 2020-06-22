const options = {
    enabled: true,
    text: 'Hello',
    color: 'red'
};

const { enabled, ...others } = options;
console.log(enabled);
console.log(others);