module.exports = function check(str, bracketsConfig) {
  const arrStr = str.split('');

  const openBrackets = new Set(bracketsConfig.map(elConfig => elConfig[0]));
  const closeByOpenBrackets = new Map(bracketsConfig.map(elConfig => [elConfig[1],elConfig[0]]));
  const stack = [];

  for (const el of arrStr){
    if (openBrackets.has(el)) {
      if (el === stack[stack.length-1] 
        && openBrackets.has(el) 
        && closeByOpenBrackets.get(el)) {
        stack.pop()
      } else { 
        stack.push(el)
      }
    } else {
      let lastSymbol = stack.pop();
      if (lastSymbol !== closeByOpenBrackets.get(el)) return false
    }
  }
 
  return stack.length===0
}
