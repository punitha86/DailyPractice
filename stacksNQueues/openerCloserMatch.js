const isValidClosures = (code) => {

  const openToCloser = {
    '(':')',
    '[':']',
    '{':'}'
  }
  const openers = new Set(['(','{','[']);
  const closers = new Set([')', ']', '}']);
const openerArray=[];

for (let i = 0; i < code.length; i++) {
    const char = code.charAt(i);

    if (openers.has(char)) {
      openerArray.push(char);
    } else if (closers.has(char)) {
      if (!openerArray.length) {
        return false;
      }
      const lastUnclosedOpener = openerArray.pop();

      // If this closer doesn't correspond to the most recently
      // seen unclosed opener, short-circuit, returning false
      if (openToCloser[lastUnclosedOpener] !== char) {
        return false;
      }
    }
  }
  return openerArray.length === 0;

}

console.log(isValidClosures("{ [ ]}"));
