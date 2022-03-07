function solution(A, K) {
  // avoids changing the value of A parameter by creating a copy of A beforehand:
  const rotatedA = [...A];

  for (let i = 0; i < K; i++) {
    rotatedA.length > 0 && rotatedA.unshift(rotatedA.pop());
  }

  return rotatedA;
}
