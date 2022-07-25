TODO: //leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

// O(n), O(1), n - nums length
https: function searchRange(nums: number[], target: number): [number, number] {
  let matches: [number, number] = [-1, -1];

  for (let [index, item] of nums.entries()) {
    if (item !== target) {
      continue;
    }

    if (matches[0] === -1 && item === target) {
      matches[0] = index;
    }

    if (nums[index + 1] !== target && item === target) {
      matches[1] = index;
      return matches;
    }
  }

  return matches;
}
