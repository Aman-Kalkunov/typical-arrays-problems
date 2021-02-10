
exports.min = function min(array) {
  if (array !== undefined && array.length !== 0) {
    let number = Math.min(...array);
    return number;
  }
  return 0;
}

exports.max = function max(array) {
  if (array !== undefined && array.length !== 0) {
    let number = Math.max(...array);
    return number;
  }
  return 0;
}

exports.avg = function avg(array) {
  if (array !== undefined && array.length !== 0) {
    let number = array.reduce((a, b) => {
      return a + b;
    }) / array.length;
    return number
  }
  return 0;
}