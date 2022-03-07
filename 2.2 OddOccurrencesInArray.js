function solution(A) {
  const pairs = new Set();

  for (const num of A) {
    if (pairs.has(num)) {
      pairs.delete(num);
    } else {
      pairs.add(num);
    }
  }

  const [unpaired] = pairs;
  return unpaired;
}

function solution2(A) {
  let unpaired;

  for (const num of A) {
    // using bitwise XOR trick
    unpaired ^= num;
  }

  return unpaired;
}
