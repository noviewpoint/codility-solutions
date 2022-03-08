function solution(A) {
  const sums = A.map((x) => ({ left: 0, right: 0 }));

  for (let i = 1, len = A.length - 1; i < len; i++) {
    sums[i].left = Math.max(0, sums[i - 1].left + A[i]);
  }

  for (let i = A.length - 2; i > 0; i--) {
    sums[i].right = Math.max(0, sums[i + 1].right + A[i]);
  }

  let maxSum = 0;

  for (let i = 1, len = A.length - 1; i < len; i++) {
    maxSum = Math.max(maxSum, sums[i - 1].left + sums[i + 1].right);
  }

  return maxSum;
}
