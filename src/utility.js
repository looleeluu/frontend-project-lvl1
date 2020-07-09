const getRandomInt = (max = 100) => Math.round(Math.random() * max);

const getRandomMathOperator = (...operators) => operators[getRandomInt(operators.length - 1)];

const getGcd = (m, n) => {
  if (n === 0) {
    return m;
  }
  return getGcd(n, m % n);
};

const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const isEven = (n) => {
  if (n % 2 === 0) {
    return true;
  }
  return false;
};

export {
  getRandomInt,
  getRandomMathOperator,
  getGcd,
  isPrime,
  isEven,
};
