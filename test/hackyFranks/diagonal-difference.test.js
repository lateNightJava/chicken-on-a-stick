const { expect } = require('chai');
const { diagonalDiff } = require('../../src/hackyFranks');

const createRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const createSetMatrix = (cellValue, length) => {
  const matrix = [];

  for (let i = 0; i < length; i++) {
    matrix[i] = [];

    for (let j = 0; j < length; j++) {
      matrix[i][j] = cellValue;
    }
  }

  return matrix;
};

const createSeqMatrix = (cellStartValue, length) => {
  const matrix = [];

  for (let i = 0; i < length; i++) {
    matrix[i] = [];

    for (let j = 0; j < length; j++) {
      matrix[i][j] = cellStartValue++;
    }
  }

  return matrix;
};

describe('Diagonal Difference', () => {
  it('should return 0 for an empty square matrix', () => {
    const diff = diagonalDiff([]);

    expect(diff).to.be.a('number', 'returned result is not a number');
    expect(diff).to.equal(0, 'returned result is incorrect');
  });

  it('should return 0 for a single cell matrix', () => {
    const randomInt = createRandomInt(-1000, 1000);
    const diff = diagonalDiff([randomInt]);

    expect(diff).to.be.a('number', 'returned result is not a number');
    expect(diff).to.equal(0, 'returned result is incorrect');
  });

  it('should return 2 for a hardcoded matrix', () => {
    const matrix = [[1,2,3], [4,5,6], [9,8,9]];
    const diff = diagonalDiff(matrix);


    expect(diff).to.be.a('number', 'returned result is not a number');
    expect(diff).to.equal(2, 'returned result is incorrect');
  });

  it('should return 1 for a hardcoded matrix', () => {
    const matrix = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,17]];
    const diff = diagonalDiff(matrix);

    expect(diff).to.be.a('number', 'returned result is not a number');
    expect(diff).to.equal(1, 'returned result is incorrect');
  });

  it('should return 3 for a hardcoded matrix', () => {
    const matrix = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [16,14,15,16]];
    const diff = diagonalDiff(matrix);


    expect(diff).to.be.a('number', 'returned result is not a number');
    expect(diff).to.equal(3, 'returned result is incorrect');
  });

  it('should return 0 for a matrix with same cell values', () => {
    const randomInt = createRandomInt(-1000, 1000);
    const randomLength = createRandomInt(2, 15);
    const matrix = createSetMatrix(randomInt, randomLength);
    const diff = diagonalDiff(matrix);

    expect(diff).to.be.a('number', 'returned result is not a number');
    expect(diff).to.equal(0, 'returned result is incorrect');
  });

  it('should return 0 for a matrix with sequential cell values', () => {
    const randomInt = createRandomInt(-1000, 1000);
    const randomLength = createRandomInt(2, 15);
    const matrix = createSeqMatrix(randomInt, randomLength);
    console.log('matrix', matrix);
    const diff = diagonalDiff(matrix);

    expect(diff).to.be.a('number', 'returned result is not a number');
    expect(diff).to.equal(0, 'returned result is incorrect');
  });
});