///implementing the depth first search that came to mind
//
// const dfs =(grid,i,j) =>{
// ///as recursion the base case is to hit the end of the item
//   if(i==grid.length && j==grid[0].length){
//     return grid[i][j];
//   }
//   if(i<grid.length-1 && j<grid[0].length-1){
//     let r1= grid[i][j]+dfs(grid, i+1,j);
//     let r2= grid[i][j]+dfs(grid, i,j+1);
//     return Math.min(r1,r2)
//   }
//   if(i<grid.length-1){
//     return grid[i][j] + dfs(grid,i+1,j)
//   }
//   if(j<grid.length-1){
//     return grid[i][j] + dfs(grid,i,j+1)
//   }
// return 0;
// }
//
//
// const minPathSum = (grid) => {
//   console.log(grid);
// return dfs(grid,0,0);
// }


//////using dynamic programming

// const minPathSum = (grid) =>{
//   if(grid == null || grid.length ==0){
//     return 0;
//   }
//   let rowLength = grid.length;
//   let columnLength = grid[0].length;
//   const dynArr = Array(rowLength).fill().map(() => Array(columnLength).fill(0));
//
//   //initialize the top rowLength
//   for(let i=1; i<rowLength; i++){
//     dynArr[0][i]= dynArr[0][i-1] + grid[0][i];
//   }
//   //initialize the left columnLength
//   for(let j=1; j<columnLength; j++){
//     dynArr[j][0]= dynArr[j-1][0] + grid[j][0];
//   }
//
// for(let i=1; i<rowLength; i++){
//   for(let j=1; j<columnLength;j++){
//     if(grid[i-1][j]<grid[i][j-1]){
//       dynArr[i][j]=dynArr[i-1][j]+grid[i][j];
//     }else{
//         dynArr[i][j]=dynArr[i][j-1]+grid[i][j];
//       }
//   }
// }
// console.log(dynArr);
//   return dynArr[rowLength-1][columnLength-1];
//
// }

const minPathSum = (grid) =>{
  if(grid == null || grid.length ==0){
    return 0;
  }
  let rowLength = grid.length;
  let columnLength = grid[0].length;
  let dynArr = Array(rowLength).fill().map(() => Array(columnLength).fill(0));

//console.log(dynArr);
for(let i=0; i<rowLength; i++){
  for(let j=0; j<columnLength;j++){
    dynArr[i][j]+=grid[i][j];
    if(i>0 && j>0){
      dynArr[i][j]+=Math.min(dynArr[i-1][j],dynArr[i][j-1]);
    }else if (i>0) {
      dynArr[i][j]+=dynArr[i-1][j];
    }else if (j>0){
      dynArr[i][j]+=dynArr[i][j-1];
    }
  }
}
//console.log(dynArr);
  return dynArr[rowLength-1][columnLength-1];

}


console.log(minPathSum([
  [1,3,1],
  [1,5,1],
  [4,2,1]
]));
