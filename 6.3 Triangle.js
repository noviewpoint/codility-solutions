function solution(A) {
  const sorted = [...A].sort((a, b) => a - b);

  for (let i = 0, len = sorted.length - 2; i < len; i++) {
    const [P, Q, R] = [sorted[i], sorted[i + 1], sorted[i + 2]];
    if (P + Q > R && Q + R > P && R + P > Q) {
      return 1;
    }
  }

  return 0;
}
