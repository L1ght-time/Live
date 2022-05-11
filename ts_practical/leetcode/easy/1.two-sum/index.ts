const twoSum = (nums, target) => {
    for(let num = 0; num < nums.length; num++) {
        for(let numNext = num + 1; numNext < nums.length; numNext++) {
            if(nums[num] + nums[numNext] === target) {
                return [num, numNext];
            }
        }
    }
};
