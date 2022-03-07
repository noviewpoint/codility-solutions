function solution(A) {
  const nums = new Set();
  let max = 1;

  for (const num of A) {
    if (nums.has(num)) {
      // A permutation is a sequence containing each element from 1 to N once, and only once.
      // if some element is present more than once already know this is not a permutation
      return 0;
    }
    nums.add(num);
    max = Math.max(max, num);
  }

  return nums.size === max ? 1 : 0;
}
