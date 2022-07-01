function maximumUnits(boxTypes: number[][], truckSize: number): number {
  let counter = 0;
  const sortingArray = boxTypes.sort((a, b) => b[1] - a[1]);

  for (let array of sortingArray) {
    const numBoxes = Math.min(array[0], truckSize);
    counter += numBoxes * array[1];
    truckSize -= numBoxes;

    if (truckSize === 0) {
      return counter;
    }
  }

  return counter;
}
