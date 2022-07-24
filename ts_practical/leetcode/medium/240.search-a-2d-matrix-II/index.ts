function searchMatrix(matrix: number[][], target: number): boolean {
  for (let array of matrix) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return true;
      }
    }
  }

  return false;
}
