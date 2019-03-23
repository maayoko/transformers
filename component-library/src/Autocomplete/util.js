/* eslint-disable no-cond-assign */
function getNormalized(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}
function getIndices(normalizedValue, normalizedDisplay) {
  const regex = new RegExp(normalizedValue, 'g');
  let result;
  const indices = [];
  while ((result = regex.exec(normalizedDisplay))) {
    indices.push(result.index);
  }
  return indices;
}
export {
  getNormalized,
  getIndices,
};
