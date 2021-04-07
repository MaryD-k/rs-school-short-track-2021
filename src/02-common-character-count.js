/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const mas1 = s1.split('').sort();
  const mas2 = s2.split('').sort();
  let count1 = 0;
  let count2 = 0;
  let commonCharacterCount = 0;
  for (let i = 0; i < mas1.length; i++) {
    if (i === 0 || mas1[i] !== mas1[i - 1]) {
      for (let j = 0; j < mas1.length; j++) {
        if (mas1[j] === mas1[i]) {
          count1 += 1;
        }
      }
      for (let k = 0; k < mas2.length; k++) {
        if (mas2[k] === mas1[i]) {
          count2 += 1;
        }
      }
      const minAmount = Math.min(count1, count2);
      commonCharacterCount += minAmount;
      count1 = 0;
      count2 = 0;
    }
  }
  return commonCharacterCount;
}

module.exports = getCommonCharacterCount;
