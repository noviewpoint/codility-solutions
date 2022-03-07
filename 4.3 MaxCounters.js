function solution(N, A) {
  const counters = Array(N).fill(0);
  let max = 0;
  let maxCounter = 0;

  for (const operation of A) {
    if (operation > N) {
      maxCounter = max;
      continue;
    }
    if (maxCounter > counters[operation - 1]) {
      counters[operation - 1] = maxCounter;
    }
    max = Math.max(max, ++counters[operation - 1]);
  }

  return counters.map((x) => Math.max(maxCounter, x));
}
