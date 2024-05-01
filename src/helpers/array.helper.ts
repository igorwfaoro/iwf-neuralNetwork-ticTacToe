const arrayMatrixDot = (array: number[], matrix: number[][]): number[] =>
  matrix[0].map((_, colIndex) =>
    array.reduce(
      (sum, currentValue, rowIndex) =>
        sum + currentValue * (matrix[rowIndex][colIndex] || 0),
      0
    )
  );
