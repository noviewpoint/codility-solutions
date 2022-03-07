function solution(A) {
  // each element of array A is an integer within the range [0..200,000]
  let min = 200000;
  // The function should return 0 if it was impossible to gain any profit.
  let maxDiff = 0;

  for (const a of A) {
    min = Math.min(min, a);
    // find the maximum positive difference (profit) between current global minimum and current value of a
    maxDiff = Math.max(maxDiff, a - min);
  }

  return maxDiff;
}
