const calculate = method => (initialValue, value) =>
  method(initialValue, value);

const add = calculate((initialValue, value) => initialValue + value);
