/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const newObject = {};
  const domainsMas = [];
  let i;
  let j;
  for (i = 0; i < domains.length; i++) {
    const k = domains[i].split('.').reverse();
    domainsMas[i] = [];
    for (j = 0; j < k.length; j++) {
      if (j === 0) {
        domainsMas[i][j] = `.${k[j]}`;
      } else {
        domainsMas[i][j] = `.${k.slice(0, j + 1).join('.')}`;
      }
    }
  }
  for (i = 0; i < domainsMas.length; i++) {
    for (j = 0; j < domainsMas[i].length; j++) {
      if (domainsMas[i][j] in newObject === true) {
        newObject[domainsMas[i][j]] += 1;
      } else {
        newObject[domainsMas[i][j]] = 1;
      }
    }
  }
  return newObject;
}

module.exports = getDNSStats;
