function solution(A, B) {
  let numAliveFishes = A.length;

  const downstreamFishes = [];

  for (let i = 0, len = A.length; i < len; i++) {
    const [fishDirection, fishPower] = [B[i], A[i]];

    if (fishDirection === 1) {
      downstreamFishes.push(fishPower);
      continue;
    }

    // if fish direction is 0

    while (downstreamFishes.length > 0) {
      numAliveFishes--;
      const downstreamFishPower = downstreamFishes.pop();
      if (downstreamFishPower > fishPower) {
        downstreamFishes.push(downstreamFishPower);
        break;
      }
    }
  }

  return numAliveFishes;
}
