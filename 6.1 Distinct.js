function solution(A) {
  const set = new Set();
  for (const a of A) {
    set.add(a);
  }
  return set.size;
}
