// var longestCommonSubsequence = function(text1, text2) {
//     let t1Index =0 , t2Index =0;
//     let t1MaxIndex = text1.length-1;
//     let t2MaxIndex = text2.length-1;
//     let count=0;
//     let maxIndex= Math.max(t1MaxIndex,t2MaxIndex)
//     for(let i=0; i<=t1MaxIndex; i++){
//         let current = t1MaxIndex[i];
//         if(t1Index<=t1MaxIndex && current==text1[t1Index]){
//             t1Index++;
//             count++;
//         }else if(t2Index<=t2MaxIndex && current==text2[t2Index]){
//             t2Index++;
//             count++;
//         } else{
//             return 0;
//         }
//     }
//     if(t1Index !=text1.length || t2Index !=text2.length )
//         return 0;
//     return count;
// };
const longestCommonSubsequenceLength = (text1, text2) => {
    let result=[];
      for (var i = -1; i < text1.length; i = i + 1) {
        result[i] = [];
        for (var j = -1; j < text2.length; j = j + 1) {
          if (i === -1 || j === -1) {
            result[i][j] = 0;
          } else if (text1[i] === text2[j]) {
            result[i][j] = result[i - 1][j - 1] + 1;
          } else {
            result[i][j] = Math.max(result[i - 1][j], result[i][j - 1]);
          }
        }
      }
      return result;
};
const getLcs = (str1, str2, lcsLengthsMatrix) => {
  var execute = function (i, j) {
    if (!lcsLengthsMatrix[i][j]) {
      return '';
    } else if (str1[i] === str2[j]) {
      return execute(i - 1, j - 1) + str1[i];
    } else if (lcsLengthsMatrix[i][j - 1] > lcsLengthsMatrix[i - 1][j]) {
      return execute(i, j - 1);
    } else {
      return execute(i - 1, j);
    }
  };
  return execute(str1.length - 1, str2.length - 1);
};
const longestCommonSubsequence = (text1, text2) => {
      var lcsLengthsMatrix = longestCommonSubsequenceLength(text1, text2);
      let len= getLcs(text1, text2, lcsLengthsMatrix);
      return len.length;
    };

console.log(longestCommonSubsequence("ABCDE","ACE"));
