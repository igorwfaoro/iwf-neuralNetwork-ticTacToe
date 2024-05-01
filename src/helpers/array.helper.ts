export const arrayMatrixDot = (array: number[], matrix: number[][]): number[] =>
  matrix[0].map((_, colIndex) =>
    array.reduce(
      (sum, currentValue, rowIndex) =>
        sum + currentValue * (matrix[rowIndex][colIndex] || 0),
      0
    )
  );

export const maxByOrNull = <T, R>(
  items: T[],
  selector: (item: T) => R
): T | null => {
  if (items.length === 0) {
    return null;
  }

  let maxItem = items[0];
  let maxValue = selector(maxItem);

  items.forEach((item) => {
    const value = selector(item);
    if (value > maxValue) {
      maxValue = value;
      maxItem = item;
    }
  });

  return maxItem;
};
