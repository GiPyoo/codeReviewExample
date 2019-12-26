const add = (initialValue, value) => {
  return initialValue + value;
};

const minus = (initialValue, value) => {
  return initialValue - value;
};

const multi = (initialValue, value) => {
  return initialValue * value;
};

const divideForInt = (initialValue, value) => {
  return Math.floor(initialValue / value);
};

console.log(divideForInt(3, 4));
