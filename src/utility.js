const getRandomInt = (n = 100) => Math.round(Math.random() * n);

const getRandomMathOperator = (...operators) => operators[getRandomInt(operators.length - 1)];

const getGcd = (m, n) => {
  if (n === 0) {
    return m;
  }
  return getGcd(n, m % n);
};

export { getRandomInt, getRandomMathOperator, getGcd };
