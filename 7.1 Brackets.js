function solution(S) {
  const openingTags = {
    "[": "]",
    "{": "}",
    "(": ")",
  };

  const stack = [];

  for (const char of S) {
    // if char is not an opening tag, it is a closing tag
    if (openingTags.hasOwnProperty(char)) {
      stack.push(char);
    } else if (openingTags[stack.pop()] !== char) {
      return 0;
    }
  }

  return Number(stack.length < 1);
}
