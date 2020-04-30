

const isHappy = (n) => {
let num = n, sum = n;

while(sum>9){
  sum=0;
  while(num > 0){
      sum += ((num%10)*(num%10));
      num=Math.floor(num/10);

    }
    console.log(sum,num);
    if(sum ===1)
      return true;
    num=sum;
  }
  if(sum ===7)
    return true;
  return false
}

console.log(isHappy(1111111));;
