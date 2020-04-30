
const unsortedScores = [37, 89, 41, 65, 91,91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

function sortScores(unorderedScores, highestPossibleScore) {

// Array of 0s at indices 0..highestPossibleScore
const scoreCounts = new Array(highestPossibleScore + 1).fill(0);
//console.log(scoreCounts);
// Populate scoreCounts
unorderedScores.forEach(score => {
  scoreCounts[score]++;
});
//console.log('unorderes',scoreCounts);
// Populate the final sorted array
const sortedScores = [];

// For each item in scoreCounts
for (let score = highestPossibleScore; score >= 0; score--) {
  const count = scoreCounts[score];

  // For the number of times the item occurs
  for (let time = 0; time < count; time++) {
    sortedScores.push(score);
  }
}

return sortedScores;
}

console.log(sortScores(unsortedScores,HIGHEST_POSSIBLE_SCORE));
