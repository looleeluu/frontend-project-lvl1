const getRules = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomInt = () => Math.round(Math.random() * 100);

const isEven = (n) => {
  if (n % 2 === 0) {
    return true;
  }
  return false;
};

export { getRules, getRandomInt, isEven };
