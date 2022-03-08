function solution(N) {
  let i = 1;
  let a = 1;
  let b = 1;
  let diff = Infinity;

  while (i * i <= N) {
    if (N % i === 0 && N / i - i < diff) {
      diff = N / i - i;
      a = i;
      b = N / i;
    }
    i++;
  }

  return 2 * (a + b);
}
