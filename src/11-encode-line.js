/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const strMas = str.split('');
  let count;
  let j;
  const newStrMas = [];
  for (let i = 0; i < strMas.length; i++) {
    for (count = 1, j = i + 1; j < strMas.length; j++) {
      if (strMas[i] === strMas[j]) {
        count += 1;
      } else {
        break;
      }
      i = j;
    }
    if (count > 1) {
      newStrMas.push(`${count}${strMas[i]}`);
    } else {
      newStrMas.push(`${strMas[i]}`);
    }
  }
  return newStrMas.join('');
}

module.exports = encodeLine;
