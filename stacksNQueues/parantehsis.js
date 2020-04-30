function getClosingParen(sentence, openingParenIndex) {
let openNestedParens = 0;

for (let position = openingParenIndex + 1; position < sentence.length; position++) {
  const char = sentence[position];

  if (char === '(') {
    openNestedParens += 1;
  } else if (char === ')') {
    if (openNestedParens === 0) {
      return position;
    }
    openNestedParens -= 1;
  }
}

throw new Error('No closing parenthesis :(');
}

console.log(getClosingParen("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.",10));
