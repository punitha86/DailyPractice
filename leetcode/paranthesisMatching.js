var checkValidString = function(s) {
   let openStack= [];
  let starStack = [];

for( let i=0; i<s.length; i++){
  if(s[i]==='('){
      openStack.push(i);
  } else if (s[i]==='*') {
      starStack.push(i);
  } else if (s[i]===')') {
        if(openStack.length>0)
          openStack.pop();
        else if (starStack.length>0)
            starStack.pop();
        else
          return false;

    }
  }
///to balance the open brackets problem
while(openStack.length>0){
  if(starStack.length>0)
    return false
  else if (openStack[openStack.length-1]<starStack[starStack.length-1]) {
    openStack.pop();
    starStack.pop();
  }
  else{
    return false
  }
}
return true
};
//checkValidString(")(");
console.log(checkValidString("(*()"));
