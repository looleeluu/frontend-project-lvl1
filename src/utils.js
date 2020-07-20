const getRandomInt = (max = 100) => Math.round(Math.random() * max);

const getRandomMathOperator = (...operators) => operators[getRandomInt(operators.length - 1)];

export {
  getRandomInt,
  getRandomMathOperator,
};
