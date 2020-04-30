
var groupAnagrams = function(strs) {

//Hashing the values for easy retrival
//split the letters and sort them so its easy to match the hashing
//them format the output to match the desired output with its keys
const hash = {};
strs.forEach(str => {
  let letters = str.split('').sort();
  hash[letters] ? hash[letters].push(str): hash[letters] = [str];
})

const keys = Object.keys(hash);
const values = keys.map((output) => {
  return hash[output]
})
return values;

};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
