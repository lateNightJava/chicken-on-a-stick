/*
 * @function
 * @name diagonalDiff
 * @description Returns the absolute difference of a square matrix.
 * See the [Hacker Rank Problem]{@link https://www.hackerrank.com/challenges/diagonal-difference/problem} 
 * 
 * @param {array} matrix 
 * 
 * @returns {number}
 */
const diagonalDiff = matrix => {
  if (matrix.length <= 1) return 0;

  let diagLeftTotal = 0, diagRightTotal = 0;

  for (let i = 0; i < matrix.length; i++) {
    if (i === 0) {
      diagLeftTotal = matrix[i][i];
      diagRightTotal = matrix[i][matrix.length - 1];
    } else {
      diagLeftTotal += matrix[i][i];
      diagRightTotal += matrix[i][matrix.length - 1 - i];
    }
  }

  return Math.abs(diagLeftTotal - diagRightTotal);
};

module.exports = diagonalDiff;