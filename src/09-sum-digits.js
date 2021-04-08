/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if (Number(n) > 9) {
    return getSumOfDigits(String(n).split('').reduce((a, b) => Number(a) + Number(b)));
  }
  return Number(n);
}

module.exports = getSumOfDigits;
