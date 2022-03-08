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
  }

  if (sum <= treshold) {
    return 0;
  }

  let encountered = 0;
  let equiLeader = 0;
  for (let i = 0, len = A.length; i < len; i++) {
    if (
      encountered > Math.floor(i / 2) &&
      sum - encountered > Math.floor((A.length - i) / 2)
    ) {
      equiLeader++;
    }
    if (A[i] === leader) {
      encountered++;
    }
  }
  return equiLeader;
}
