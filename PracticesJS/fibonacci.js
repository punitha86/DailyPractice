
// const fibonacci = (num) =>{
//   let result=1;
//   let prevResult= new Set();
//   for (let i=0;i<num; i++){
//     if()
//     result= fibonacci(num-1) + fibonacci(num-2);
//   }
//   return result;
// }
//
// console.log(fibonacci(3));


// class Fibber {
// constructor() {
//   this.memo = {};
// }
//
// fib(n) {
//
//   // Edge case: negative index
//   if (n < 0) {
//     throw new Error('Index was negative. No such thing as a negative index in a series.');
//   }
//
//   // Base case: 0 or 1
//   else if (n === 0 || n === 1) {
//     return n;
//   }
//
//   // See if we've already calculated this
//   if (this.memo.hasOwnProperty(n)) {
//     return this.memo[n];
//   }
//
//   const result = this.fib(n - 1) + this.fib(n - 2);
//
//   // Memoize
//   this.memo[n] = result;
//
//   return result;
// }
// }

// function fib(n) {
//
// // Edge cases:
// if (n < 0) {
//   throw new Error('Index was negative. No such thing as a negative index in a series.');
// } else if (n === 0 || n === 1) {
//   return n;
// }
//
// // We'll be building the fibonacci series from the bottom up
// // So we'll need to track the previous 2 numbers at each step
// let prevPrev = 0;  // 0th fibonacci
// let prev = 1;      // 1st fibonacci
// let current;       // Declare current
//
// for (let i = 1; i < n; i++) {
//
//   // Iteration 1: current = 2nd fibonacci
//   // Iteration 2: current = 3rd fibonacci
//   // Iteration 3: current = 4th fibonacci
//   // To get nth fibonacci ... do n-1 iterations.
//   current = prev + prevPrev;
//   prevPrev = prev;
//   prev = current;
// }
//
// return current;
// }
//
//  console.log(fibonacci(3));









function changePossibilitiesBottomUp(amount, denominations) {

// Initialize an array of zeros with indices up to amount
const waysOfDoingNcents = new Array(amount + 1).fill(0);
waysOfDoingNcents[0] = 1;
console.log(waysOfDoingNcents);
denominations.forEach(coin => {
  for (let higherAmount = coin; higherAmount <= amount; higherAmount++) {
    const higherAmountRemainder = higherAmount - coin;
    waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
console.log(coin, waysOfDoingNcents[higherAmount],waysOfDoingNcents[higherAmountRemainder]);
  }
});

return waysOfDoingNcents[amount];
}
console.log(changePossibilitiesBottomUp(6,[1,3,5]));
