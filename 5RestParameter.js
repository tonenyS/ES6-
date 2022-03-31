//Rest Parameter
summation = (...arrNumber) => {
  let total = 0;
  for (number of arrNumber) total += number;
  return total;
};

console.log(summation(10, 50, 60));
console.log(summation(10, 50, 60, 70, 80));
console.log(summation(10, 50, 60, 70, 80, 90));
