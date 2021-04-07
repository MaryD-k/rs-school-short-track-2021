/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const valueMas = [];
  const numMas = String(n).split('');
  for (let i = 0; i < numMas.length; i++) {
    if (i === 0) {
      valueMas[i] = numMas.slice(i + 1, numMas.length).join('');
    } else {
      valueMas[i] = numMas.slice(0, i).concat(numMas.slice(i + 1, numMas.length)).join('');
    }
  }
  const maxNumber = valueMas.reduce((a, b) => Math.max(a, b));
  return maxNumber;
}

module.exports = deleteDigit;
