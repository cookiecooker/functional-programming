const demethodize1 = fn => (arg0, ...args) => fn.apply(arg0, args);
const demethodize2 = fn => (arg0, ...args) => fn.call(arg0, ...args);
const demethodize3 = fn => (...args) => fn.bind(...args)();

const toLocaleString = demethodize3(Number.prototype.toLocaleString);
const numbers = [2209.6, 124.56, 1048576];
const strings = numbers.map(toLocaleString)
console.log('strings: ', strings)

