const compare = (str)=>{
    let result = "";
    let i=0;
    while(str[i]){
        if(str[i]>='a' && str[i]<='z'){
            result+=str[i];
        }
        else if (result!=="" && str[i]=="#"){
            result = result.slice(0,-1);
        }
            i++;
          
    }

    return result;
}
var backspaceCompare = function(S, T) {
    let result1=compare(S);
    let result2= compare(T);

    return (result1==result2) ?  true :  false;


};

console.log(backspaceCompare("ab#c","ad#c"));;
