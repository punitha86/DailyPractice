const words = [
'ptolemaic',
'retrograde',
'supplant',
'undulate',
'xenoepist',
'zenith',
'asymptote',  // <-- rotates here!
'babka',
'banoffee',
'engender',
'karpatka',
'othellolagkage',
];

let startIndex = 0;
let endIndex = words.length-1;
let firstWord=words[0];
while(startIndex < endIndex){
  let halfway = Math.floor((endIndex-startIndex)/2);
  let guessIndex=startIndex+halfway;

  let guessValue=words[guessIndex];

  if(guessValue >=firstWord){
    startIndex=guessIndex;
  }else{
    endIndex= guessIndex;
  }
  if(startIndex+1===endIndex){
    break
  }
}

console.log(endIndex);
