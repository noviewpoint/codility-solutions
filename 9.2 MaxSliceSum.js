function solution(A) {
  let sum = 0;
  let maxSum = 0;
  let maxValue = A[0];

  for (const a of A) {
    sum = Math.max(0, sum + a);
    maxSum = Math.max(maxSum, sum);
    maxValue = Math.max(maxValue, a);
  }

  return maxSum === 0 ? maxValue : maxSum;
}
