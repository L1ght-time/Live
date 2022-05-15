function permuteUnique(nums: number[]): number[][] {
    let result: number[][] = [];

    const counter: { [key: number]: number } = {};

    for (let number of nums) {
        if (counter[number]) {
            counter[number] += 1;
        } else {
            counter[number] = 1;
        }
    }

    const findAllPermutations = (resultArray: number[]): void => {
        if (resultArray.length === nums.length) {
            result.push(resultArray);
            return;
        }

        for (let key in counter) {
            if (counter[key]) {
                counter[key] -= 1;
                findAllPermutations([...resultArray, +key]);
                counter[key] += 1;
            }
        }
    }

    findAllPermutations([]);
    return result;
};


console.log(permuteUnique([1, 2, 3]))
