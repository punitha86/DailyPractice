function maxDuffelBagValue(cakeTypes, weightCapacity) {

// We make an array to hold the maximum possible value at every
// duffel bag weight capacity from 0 to weightCapacity
// starting each index with value 0
const maxValuesAtCapacities = new Array(weightCapacity + 1).fill(0);

for (let currentCapacity = 0; currentCapacity <= weightCapacity; currentCapacity++) {

  // Set a variable to hold the max monetary value so far for currentCapacity
  let currentMaxValue = 0;

  cakeTypes.forEach(cakeType => {

    // If the current cake weighs as much or less than the current weight capacity
    // it's possible taking the cake would get a better value
    if (cakeType.weight <= currentCapacity) {

      // So we check: should we use the cake or not?
      // If we use the cake, the most kilograms we can include in addition to the cake
      // We're adding is the current capacity minus the cake's weight. we find the max
      // value at that integer capacity in our array maxValuesAtCapacities
      const maxValueUsingCake = cakeType.value
        + maxValuesAtCapacities[currentCapacity - cakeType.weight];

      // Now we see if it's worth taking the cake. how does the
      // value with the cake compare to the currentMaxValue?
      currentMaxValue = Math.max(maxValueUsingCake, currentMaxValue);
    }
    // console.log(cakeType.weight,maxValuesAtCapacities);
  });

  // Add each capacity's max value to our array so we can use them
  // when calculating all the remaining capacities
  maxValuesAtCapacities[currentCapacity] = currentMaxValue;
  console.log(maxValuesAtCapacities,currentCapacity);
}
return maxValuesAtCapacities[weightCapacity]
}
const cakeTypes = [
{ weight: 7, value: 160 },
{ weight: 3, value: 90 },
{ weight: 2, value: 15 },
];

const capacity = 20;

console.log(maxDuffelBagValue(cakeTypes, capacity));;
