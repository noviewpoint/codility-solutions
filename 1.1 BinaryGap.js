function solution(N) {
  const binary = N.toString(2);
  let gap = 0;
  let maxGap = 0;

  for (let i = 1, len = binary.length; i < len; i++) {
    const prev = binary[i - 1];
    const cur = binary[i];

    if (prev === "1" && cur === "0") {
      gap = 1; // start counting the gap
    }

    if (prev === "0" && cur === "0" && gap > 0) {
      gap++; // increment the gap if the counting was previously started
    }

    if (prev === "0" && cur === "1" && gap > maxGap) {
      maxGap = gap; // save the gap if it is the largest
    }
  }

  return maxGap;
}
