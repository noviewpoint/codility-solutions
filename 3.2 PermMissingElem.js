function solution(A) {
  const N = A.length;

  // use the Gauss formula
  const sumNatural = ((N + 1) * (N + 2)) / 2;

  // actual sum with the missing number (smaller than sumNatural above)
  const actualSum = A.reduce((sum, num) => (sum += num), 0);

  // the difference between sums is the missing number
  return sumNatural - actualSum;
}
