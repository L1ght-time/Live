// TODO: https://leetcode.com/problems/count-sorted-vowel-strings/

const countVowelStrings = (n: number): number => {
    const array = [1, 1, 1, 1, 1];

    for (let _ = 0; _ < n - 1; _++) {
        for(let i = 1; i < 5; i++) {
            array[i] += array[i - 1];
        }
    }

    return array.reduce((acc, nextValue) => acc + nextValue, 0);
};

// countVowelStrings(1);
// countVowelStrings(2);
