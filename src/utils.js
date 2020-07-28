/* eslint-disable import/prefer-default-export */
const getRandomInt = (min = 1, max = 100) => Math.round(Math.random() * (max - min) + min);

export {
  getRandomInt,
};
