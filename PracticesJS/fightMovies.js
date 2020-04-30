let travelTime =  130;
let movieLength= [65,70,30,120,35,70];

const canSeeTwo = (travelTime,movieLength) => {
  const movieSeen = new Set();

  for (let i=0; i<movieLength.length; i++){
    let firstMovielength = movieLength[i];
    const possibleSecondMovie = travelTime - firstMovielength;
    if(movieSeen.has(possibleSecondMovie)){
      return true;
    }
  movieSeen.add(firstMovielength);
  }
  return false;
}

console.log(canSeeTwo(travelTime,movieLength));
