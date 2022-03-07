function solution(A) {
  let eastTravelingCars = 0;
  let pairs = 0;

  for (const direction of A) {
    if (direction === 0) {
      eastTravelingCars++;
    } else {
      // each west traveling car creates a pair with previously encountered east traveling cars
      pairs += eastTravelingCars;
    }
    if (pairs > 1000000000) {
      return -1;
    }
  }

  return pairs;
}
