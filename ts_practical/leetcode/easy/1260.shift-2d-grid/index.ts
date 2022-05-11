const shiftGrid = (grid, k) => {
    const insertAmountArrays = grid.length;
    const amoutElementsInInsertArray = grid[0].length;
    let step = 0;

    const mainArray = grid.flat();
    if(k > mainArray.length) {
        k %= mainArray.length;
    }

    const deletedItems = mainArray.splice(-k);

    const incertArray = [...deletedItems, ...mainArray];


    const newArray = [];

    for(let i = 0; i < insertAmountArrays; i++) {
        step += amoutElementsInInsertArray;
        const previusStep = step - amoutElementsInInsertArray;
        newArray[i] = incertArray.slice(previusStep, step);
    }

    return newArray
};
