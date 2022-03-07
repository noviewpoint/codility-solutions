function solution(A) {
  const set = new Set(A);
  let missing = 1;

  while (set.has(missing)) {
    missing++;
  }

  return missing;
}
