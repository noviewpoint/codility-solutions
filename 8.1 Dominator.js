function solution(A) {
  let sum = 0;
  let leader;

  for (const a of A) {
    if (sum < 1) {
      leader = a;
    }
    a === leader ? ++sum : --sum;
  }

  sum = 0;
  const treshold = Math.floor(A.length / 2);

  for (let i = 0, len = A.length; i < len; i++) {
    if (A[i] === leader) {
      sum++;
    }
    if (sum > treshold) {
      return i;
    }
  }

  return -1;
}
