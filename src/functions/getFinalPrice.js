export const getFinalPrice = (price, discount) => {
  return Math.round(price - (price * discount) / 100);
};
