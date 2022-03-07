function solution(A) {
  const sortedLeft = A.map((n, i) => i - n).sort((a, b) => a - b);
  const sortedRight = A.map((n, i) => i + n).sort((a, b) => a - b);

  let overlaps = 0;
  let pairs = 0;

  let i = 0;
  let j = 0;
  let len = A.length;

  while (Math.min(i, j) < len) {
    if (sortedLeft[i] <= sortedRight[j]) {
      pairs += overlaps;
      overlaps++;
      i++;
    } else {
      overlaps--;
      j++;
    }

    if (pairs > 10000000) {
      return -1;
    }
  }
  return pairs;
}
