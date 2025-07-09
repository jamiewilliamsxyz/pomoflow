export const calculateLbIntervals = (lbIntervalLength) => {
  const result = [];
  for (let i = 1; i < 99; i++) {
    let intervalEntry = lbIntervalLength * i;
    result.push(intervalEntry);
  }
  return result;
};
