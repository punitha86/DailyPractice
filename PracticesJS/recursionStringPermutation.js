let str="cat";




const getPermutations=(str)=>{

console.log("inside function call for ", str);
  const permutations= new Set();

if(str.length<=1){
  return new Set([str]);
}

let allCharExceptLast = str.slice(0,-1);
const lastChar = str[str.length - 1];

const permutationsOfAllOtherChars=getPermutations(allCharExceptLast);

permutationsOfAllOtherChars.forEach(permutationsOfAllOtherChars => {
  for(let i=0; i<=allCharExceptLast; i++){
    const permutation = permutationsOfAllOtherChars.slice(0,i)+lastChar+permutationsOfAllOtherChars.slice(i);
    permutations.add(permutation);
  }
});
const iterator1 = permutations.entries();

for (let entry of iterator1) {
  console.log(entry);
}
return permutations;
}
getPermutations(str);
