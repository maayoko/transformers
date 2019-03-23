const hourPreviousSelector = (value) => {
  if ((value - 1) >= 0) {
    return value - 1;
  }
  return 23;
};

const hourNextSelector = (value) => {
  if ((value + 1) <= 23) {
    return value + 1;
  }
  return 0;
};

const leadingZeroFormatFunction = (value) => {
  if (value < 10) return `0${value}`;
  return `${value}`;
};

export {
  hourPreviousSelector,
  hourNextSelector,
  leadingZeroFormatFunction,
};
