function solution(X, A) {
  const positions = new Set();

  for (let i = 0, len = A.length; i < len; i++) {
    positions.add(A[i]);
    if (positions.size === X) {
      return i;
    }
  }

  return -1;
}
