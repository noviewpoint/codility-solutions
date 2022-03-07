function solution(A) {
  A.sort((a, b) => a - b);

  for (let i = 0, len = A.length - 2; i < len; i++) {
    const [P, Q, R] = [A[i], A[i + 1], A[i + 2]];
    if (P + Q > R && Q + R > P && R + P > Q) {
      return 1;
    }
  }

  return 0;
}
