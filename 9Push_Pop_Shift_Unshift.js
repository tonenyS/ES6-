//pop ,push, shift, unshift

const data = [10, 20, 30];
data.push(...[30, 40, 50]);
console.log(data);

data.pop();
console.log(data);

data.shift();
console.log(data);

data.unshift(10);
console.log(data);
