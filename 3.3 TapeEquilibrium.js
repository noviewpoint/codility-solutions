function solution(A) {
  let left = 0;
  let right = A.reduce((sum, cur) => sum + cur, 0);
  let min = Infinity;

  for (let p = 0, len = A.length - 1; p < len; p++) {
    left += A[p];
    right -= A[p];
    min = Math.min(min, Math.abs(left - right));
  }

  return min;
}
