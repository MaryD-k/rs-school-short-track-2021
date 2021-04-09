/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const newMatrix = [];
  let j;
  let i;
  for (i = 0; i < matrix.length; i++) {
    newMatrix[i] = [];
    for (j = 0; j < matrix[i].length; j++) {
      newMatrix[i][j] = 0;
    }
  }
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true) {
        newMatrix[i][j] = true;
        if (i === 0) {
          newMatrix[i + 1][j] += 1;
        }
        if (i > 0 && i !== matrix.length - 1) {
          newMatrix[i - 1][j] += 1;
          newMatrix[i + 1][j] += 1;
        }
        if (i === newMatrix.length - 1) {
          newMatrix[i + 1][j] += 1;
        }
        if (j === 0) {
          newMatrix[i][j + 1] += 1;
        }
        if (j > 0 && j !== matrix[i].length - 1) {
          newMatrix[i][j - 1] += 1;
          newMatrix[i][j + 1] += 1;
        }
        if (j === newMatrix[i].length - 1) {
          newMatrix[i][j - 1] += 1;
        }
        if (j !== 0 && i !== 0) {
          if (newMatrix[i - 1][j - 1] !== true) {
            newMatrix[i - 1][j - 1] += 1;
          }
          if (newMatrix[i - 1][j + 1] !== true) {
            newMatrix[i - 1][j + 1] += 1;
          }
          if (newMatrix[i + 1][j - 1] !== true) {
            newMatrix[i + 1][j - 1] += 1;
          }
          if (newMatrix[i + 1][j + 1] !== true) {
            newMatrix[i + 1][j + 1] += 1;
          }
        }
      }
      if (typeof newMatrix[i][j] !== 'number' && newMatrix[i][j] !== true) {
        newMatrix[i][j] = 0;
      }
    }
  }
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (newMatrix[i][j] === true) {
        newMatrix[i][j] = 1;
      }
    }
  }
  return newMatrix;
}

module.exports = minesweeper;
