//
const expandCenter=(s,left,right)=>{
  let l = left;
  let r = right;
  let len= s.length;

  while(l>=0 && r<len && s[l] === s[r]){
    l--;
    r++;
  }
  return r-l-1;
}

const longPali = (s) =>{
let start,end=0;
let num =0 ;
for(let i=0; i<s.length;i++){
num= Math.max(expandCenter(s,i,i),expandCenter(s,i,i+1));
  if(num > end-start){
    start= i-(num-1)/2
    end = i+num/2
  }
}
return s.slice(start,end+1)
}

console.log(longPali("testtsing"));
