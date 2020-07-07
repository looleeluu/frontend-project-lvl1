const getRandomInt = (n = 100) => Math.round(Math.random() * n);

const getRandomMathOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInt(operators.length - 1)];
};

export { getRandomInt, getRandomMathOperator };
