function findDuplicate(intArray) {

const n = intArray.length - 1;

// STEP 1: GET INSIDE A CYCLE
// Start at position n+1 and walk n steps to
// find a position guaranteed to be in a cycle
let positionInCycle = n + 1;
for (let i = 0; i < n; i++) {

  // We subtract 1 from the current position to step ahead:
  // the 2nd *position* in an array is *index* 1
  positionInCycle = intArray[positionInCycle - 1];
  console.log(positionInCycle,intArray);
}

// STEP 2: FIND THE LENGTH OF THE CYCLE
// Find the length of the cycle by remembering a position in the cycle
// and counting the steps it takes to get back to that position
const rememberedPositionInCycle = positionInCycle;
let currentPositionInCycle = intArray[positionInCycle - 1];  // 1 step ahead
let cycleStepCount = 1;
console.log(currentPositionInCycle,rememberedPositionInCycle);
while (currentPositionInCycle !== rememberedPositionInCycle) {
  currentPositionInCycle = intArray[currentPositionInCycle - 1];
  cycleStepCount += 1;
  console.log("inside while: ",currentPositionInCycle,cycleStepCount);
}

// STEP 3: FIND THE FIRST NODE OF THE CYCLE
// Start two pointers
//   (1) at position n+1
//   (2) ahead of position n+1 as many steps as the cycle's length
let pointerStart = n + 1;
let pointerAhead = n + 1;
for (let i = 0; i < cycleStepCount; i++) {
  pointerAhead = intArray[pointerAhead - 1];
}

// Advance until the pointers are in the same position
// which is the first node in the cycle
while (pointerStart !== pointerAhead) {
  pointerStart = intArray[pointerStart - 1];
  pointerAhead = intArray[pointerAhead - 1];
}

// Since there are multiple values pointing to the first node
// in the cycle, its position is a duplicate in our array
return pointerStart;
}
console.log(findDuplicate([3, 4, 2, 3, 1, 5]));;
