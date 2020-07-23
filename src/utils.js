const getRandomInt = (min = 1, max = 100) => Math.round(Math.random() * (max - min) + min);

const getRandomMathOperator = (operators) => operators[getRandomInt(0, operators.length - 1)];

const gameExpressionOutput = (string) => {
  console.log(`Question: ${string}`);
};

export {
  getRandomInt,
  getRandomMathOperator,
  gameExpressionOutput,
};
