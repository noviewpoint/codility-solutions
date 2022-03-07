function solution(A) {
  const sorted = [...A].sort((a, b) => b - a);
  const [max1, max2, max3] = sorted;
  const min1 = sorted[sorted.length - 1];
  const min2 = sorted[sorted.length - 2];
  return Math.max(max1 * max2 * max3, min1 * min2 * max1);
}
