// function getMaxProfit(stockPrices) {
// let maxProfit = 0;
//
// // Go through every time
// for (let outerTime = 0; outerTime < stockPrices.length; outerTime++) {
//
//   // For each time, go through every other time
//   for (let innerTime = 0; innerTime < stockPrices.length; innerTime++) {
//
//     // For each pair, find the earlier and later times
//     const earlierTime = Math.min(outerTime, innerTime);
//     const laterTime = Math.max(outerTime, innerTime);
//
//     // And use those to find the earlier and later prices
//     const earlierPrice = stockPrices[earlierTime];
//     const laterPrice = stockPrices[laterTime];
//
//     // See what our profit would be if we bought at the
//     // min price and sold at the current price
//     const potentialProfit = laterPrice - earlierPrice;
//
//     // Update maxProfit if we can do better
//     maxProfit = Math.max(maxProfit, potentialProfit);
//   }
// }
//
// return maxProfit;
// }
// ////
//
// function getMaxProfit(stockPrices) {
// let maxProfit = 0;
//
// // Go through every price and time
// for (let earlierTime = 0; earlierTime < stockPrices.length; earlierTime++) {
//   const earlierPrice = stockPrices[earlierTime];
//
//   // And go through all the LATER prices
//   for (let laterTime = earlierTime + 1; laterTime < stockPrices.length; laterTime++) {
//     const laterPrice = stockPrices[laterTime];
//
//     // See what our profit would be if we bought at the
//     // min price and sold at the current price
//     const potentialProfit = laterPrice - earlierPrice;
//
//     // Update maxProfit if we can do better
//     maxProfit = Math.max(maxProfit, potentialProfit);
//   }
// }
//
// return maxProfit;
// }
//
// ///////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////
//
//
//   function getMaxProfit(stockPrices) {
// if (stockPrices.length < 2) {
//   throw new Error('Getting a profit requires at least 2 prices');
// }
//
// // We'll greedily update minPrice and maxProfit, so we initialize
// // them to the first price and the first possible profit
// let minPrice = stockPrices[0];
// let maxProfit = stockPrices[1] - stockPrices[0];
//
// // Start at the second (index 1) time
// // We can't sell at the first time, since we must buy first,
// // and we can't buy and sell at the same time!
// // If we started at index 0, we'd try to buy *and* sell at time 0.
// // this would give a profit of 0, which is a problem if our
// // maxProfit is supposed to be *negative*--we'd return 0.
// for (let i = 1; i < stockPrices.length; i++) {
//   const currentPrice = stockPrices[i];
//
//   // See what our profit would be if we bought at the
//   // min price and sold at the current price
//   const potentialProfit = currentPrice - minPrice;
//
//   // Update maxProfit if we can do better
//   maxProfit = Math.max(maxProfit, potentialProfit);
//
//   // Update minPrice so it's always
//   // the lowest price we've seen so far
//   minPrice = Math.min(minPrice, currentPrice);
// }
//
// return maxProfit;
// }
//
//




const stockPrices = [1,2,3,4,5];

const getMaxProfit = (prices) => {
  let minPrice = prices[0];
  let maxProfit= 0;
  let shortTermProfit=0;
  for(i=1; i<prices.length ; i++){
    let currentPrice=prices[i];
    let potentialProfit = currentPrice - minPrice;
    minPrice = Math.min(currentPrice,minPrice);
    maxProfit=Math.max(potentialProfit,maxProfit) ;

if(potentialProfit>0 && currentPrice>prices[i-1]){
  shortTermProfit+=Math.abs(currentPrice-prices[i-1])
}
//
// console.log("-----------");
//     console.log("STP",shortTermProfit);
//     console.log("Current",currentPrice);
//     console.log("minPrice",minPrice);

  }
  return Math.max(maxProfit,shortTermProfit);
}

console.log(getMaxProfit(stockPrices));;
