function solution(A) {
  let index = 0; // default slice index
  let minAvgGlobal = 10000; // max integer value inside A

  for (let p = 0, len = A.length; p < len - 1; p++) {
    const first = A[p];
    const second = A[p + 1];
    const third = A[p + 2] !== undefined ? A[p + 2] : Infinity;
    // in case we are accessing undefined element at the end, Infinity / 3 is still Infinity
    const twoSliceAvg = (first + second) / 2;
    const threeSliceAvg = (first + second + third) / 3;
    const minAvg = Math.min(twoSliceAvg, threeSliceAvg);
    if (minAvg < minAvgGlobal) {
      minAvgGlobal = minAvg;
      index = p;
    }
  }

  return index;
}
