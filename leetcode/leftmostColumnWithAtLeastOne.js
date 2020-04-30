////bruteforce
/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
// var leftMostColumnWithOne = function(binaryMatrix) {
//     let lengths= binaryMatrix.dimensions();
//     let xlength=lengths[0];
//     let ylength=lengths[1];
//     let count=0;
//     for(let y=0; y< ylength; y++){
//         for(let x=0; x< xlength;x++){
//             let elem = binaryMatrix.get(x,y);
//
//             if(elem==1){
//                 count++;
//                 break;
//             }
//
//         }
//
//         if (count>0){
//             return y;
//             break;
//         }
//     }
//     return -1;
// };
///using ladder approach
var leftMostColumnWithOne = function(binaryMatrix) {
  let lengths= binaryMatrix.dimensions();
  let xlength = lengths[0]-1;
  let ylength = lengths[1]-1;
  let count = -1;
  while( xlength>=0 && ylength>=0){
    if(binaryMatrix.get(xlength,ylength)==1){
      count = ylength;
      ylength--;
    }else {
      xlength--;
    }
  }

  return count;
};
