

var countElements = function(arr) {
    const countArr= new Array(1000).fill(0);

    arr.forEach((arr) => {
      countArr[arr]++;
    });
    let count=0;
    for( let i=0; i<arr.length; i++)
    {

      if(countArr[i]!==0 && countArr[i+1]!==0){
      //console.log(countArr[i+1],count,i);
      count+= countArr[i];
    }
    }
    return count;
};
console.log(countElements([1,3,2,3,5,0]));
console.log(countElements([1,1,3,3,5,5,7,7]));
