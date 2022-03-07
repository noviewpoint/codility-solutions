function solution(S, P, Q) {
  // initialize prefix sums for A, C, G (you don't need T)
  const A = [0];
  const C = [0];
  const G = [0];

  // calculate prefix sums for A, C, G
  for (let i = 0, len = S.length; i < len; i++) {
    A.push(A[i] + Number("A" === S[i]));
    C.push(C[i] + Number("C" === S[i]));
    G.push(G[i] + Number("G" === S[i]));
  }

  // calculate the result using prefix sums
  const result = [];
  for (let i = 0, len = P.length; i < len; i++) {
    const from = P[i];
    const to = Q[i] + 1;
    if (A[to] - A[from] > 0) {
      result.push(1);
    } else if (C[to] - C[from] > 0) {
      result.push(2);
    } else if (G[to] - G[from] > 0) {
      result.push(3);
    } else {
      result.push(4); // this is why you don't need T
    }
  }

  return result;
}
