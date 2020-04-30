let numbers=[1,2,3,4,6,5,6,2,8];

function findRepeat(numbers) {

let floor = 1;
let ceiling = numbers.length - 1;

while (floor < ceiling) {

  // Divide our range 1..n into an upper range and lower range
  // (such that they don't overlap)
  // lower range is floor..midpoint
  // upper range is midpoint+1..ceiling
  const midpoint = Math.floor(floor + ((ceiling - floor) / 2));
  const lowerRangeFloor = floor;
  const lowerRangeCeiling = midpoint;
  const upperRangeFloor = midpoint + 1;
  const upperRangeCeiling = ceiling;

  const distinctPossibleIntegersInLowerRange = lowerRangeCeiling - lowerRangeFloor + 1;
console.log("upperRange",upperRangeFloor,upperRangeCeiling);
console.log("lowerrange",lowerRangeFloor,lowerRangeCeiling);
  // Count number of items in lower range
  let itemsInLowerRange = 0;
  numbers.forEach(item => {

    // Is it in the lower range?
    if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {
      itemsInLowerRange += 1;
    }
console.log("Items in lower range ",itemsInLowerRange, "item",item," /n",distinctPossibleIntegersInLowerRange);
  });
//console.log(itemsInLowerRange,distinctPossibleIntegersInLowerRange);
  if (itemsInLowerRange > distinctPossibleIntegersInLowerRange) {
//console.log("if",floor,ceiling);
    // There must be a duplicate in the lower range
    // so use the same approach iteratively on that range
    floor = lowerRangeFloor;
    ceiling = lowerRangeCeiling;

  } else {
//console.log("else",floor,ceiling);
    // There must be a duplicate in the upper range
    // so use the same approach iteratively on that range
    floor = upperRangeFloor;
    ceiling = upperRangeCeiling;
  }
  console.log("floor: ",floor,"ceiling:",ceiling);
}

// Floor and ceiling have converged
// We found a number that repeats!
return floor;
}


console.log(findRepeat(numbers));
