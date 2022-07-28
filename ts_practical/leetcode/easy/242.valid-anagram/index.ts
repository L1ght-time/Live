TODO: "https://leetcode.com/problems/valid-anagram";

function isAnagram(s: string, t: string): boolean {
  const firts = s.split("").sort().join("");
  const second = t.split("").sort().join("");

  if (s.length === t.length && firts === second) {
    return true;
  }

  return false;
}
