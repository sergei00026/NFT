export const getRandomBid = () => +(Math.random() * (5 - 0.2) + 0.2).toFixed(2);

export const getRandomEndDate = () => {
  const now = Date.now();
  const hours = Math.floor(Math.random() * 48) + 1;
  return now + hours * 60 * 60 * 1000;
};
