"use sctrict";

function copy(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }

  return objCopy;
}

const numbers = {
  a: 5,
  b: 3,
  c: {
    x: 1,
    y: 9,
  },
};

const newNumbers = copy(numbers);

newNumbers.a = 2;

console.log(newNumbers);
console.log(numbers);
