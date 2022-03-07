function solution(A, B, K) {
  const high = Math.floor(B / K);
  const low = Math.ceil(A / K);
  return 1 + high - low;
}
