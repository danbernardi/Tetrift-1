export const line = [
  [[0, 1], [1, 1], [2, 1], [3, 1]],
  [[1, 0], [1, 1], [1, 2], [1, 3]],
  [[0, 2], [1, 2], [2, 2], [3, 2]],
  [[2, 0], [2, 1], [2, 2], [2, 3]]
];

export const square = [
  [[1, 1], [1, 2], [2, 1], [2, 2]],
  [[1, 1], [1, 2], [2, 1], [2, 2]],
  [[1, 1], [1, 2], [2, 1], [2, 2]],
  [[1, 1], [1, 2], [2, 1], [2, 2]]
];

export const lShape = [
  [[0, 0], [0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 0], [1, 1], [1, 2]],
  [[0, 1], [1, 1], [2, 1], [2, 2]],
  [[1, 0], [1, 1], [1, 2], [2, 0]]
];

export const jShape = [
  [[0, 1], [0, 2], [1, 1], [2, 1]],
  [[1, 0], [1, 1], [1, 2], [2, 2]],
  [[0, 1], [1, 1], [2, 0], [2, 1]],
  [[0, 0], [1, 0], [1, 1], [1, 2]]
];

export const tShape = [
  [[0, 1], [1, 0], [1, 1], [1, 2]],
  [[0, 1], [1, 1], [1, 2], [2, 1]],
  [[1, 0], [1, 1], [1, 2], [2, 1]],
  [[0, 1], [1, 0], [1, 1], [2, 1]]
];

export const zShape = [
  [[0, 1], [1, 0], [1, 1], [2, 0]],
  [[0, 0], [0, 1], [1, 1], [1, 2]],
  [[0, 2], [1, 1], [1, 2], [2, 1]],
  [[1, 0], [1, 1], [2, 1], [2, 2]]
];

export const sShape = [
  [[0, 0], [1, 0], [1, 1], [2, 1]],
  [[0, 1], [0, 2], [1, 0], [1, 1]],
  [[0, 1], [1, 1], [1, 2], [2, 2]],
  [[1, 1], [1, 2], [2, 0], [2, 1]]
];

export const tetrominos = {
  line,
  square,
  lShape,
  jShape,
  tShape,
  zShape,
  sShape
};

export const pieceColors = {
  '-1': 'destroyed',
  1: 'border',
  2: 'line',
  3: 'square',
  4: 'lShape',
  5: 'jShape',
  6: 'tShape',
  8: 'sShape',
  7: 'zShape'
};

export const tetrominoShapeNames = Object.keys(tetrominos);

export default tetrominos;
