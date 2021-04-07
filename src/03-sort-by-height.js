/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexBreakValue = [];
  const newArr = arr.slice().sort((a, b) => a - b);
  let k = 0;
  const sortArr = [];
  let i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      indexBreakValue.push(i);
    }
  }
  for (i = 0; i < arr.length; i++) {
    if (i === indexBreakValue[0]) {
      sortArr[i] = -1;
      indexBreakValue.shift(0);
    } else {
      for (; k < newArr.length; k++) {
        if (newArr[k] !== -1) {
          sortArr[i] = newArr[k];
          k++;
          break;
        }
      }
    }
  }
  return sortArr;
}

module.exports = sortByHeight;
