function solution(H) {
  let numBlocks = 0;
  const blocksHeights = [0];

  for (const height of H) {
    while (blocksHeights[blocksHeights.length - 1] > height) {
      blocksHeights.pop();
    }

    if (blocksHeights[blocksHeights.length - 1] !== height) {
      blocksHeights.push(height);
      numBlocks++;
    }
  }

  return numBlocks;
}
