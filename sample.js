
let num ='',num1, num2,operator;
let show='';
const refresh= (number)=>{
  document.getElementById('res').value = number;
}

const calcHelp = (num1,num2,operator) =>{
    if(operator==='add')
    document.getElementById('res').value = (Math.trunc(parseInt(num1,2)+parseInt(num2,2))).toString(2);
    else if(operator==='sub')
    document.getElementById('res').value = (Math.trunc(parseInt(num1,2)-parseInt(num2,2))).toString(2);
    else if(operator==='mul')
    document.getElementById('res').value = (Math.trunc(parseInt(num1,2)*parseInt(num2,2))).toString(2);
    else if(operator==='div')
    document.getElementById('res').value = (Math.trunc(parseInt(num1,2)/parseInt(num2,2))).toString(2);
}

const calc = (clickedId) =>{

  if(clickedId==='btn0'){
    num+='0';
    show+='0';
    refresh(show);
    //console.log(num);
  }else if (clickedId==='btn1') {
    num+='1';
    show+='1';
    refresh(show);

  }else if (clickedId ==='btnSum') {
    num1=num;
    operator='add';
    show+='+';
    refresh(show);
    num='';
  }else if (clickedId ==='btnSub') {
    num1=num;
    operator='sub';
    show+='-';
    refresh(show);
    num='';
  }else if (clickedId ==='btnMul') {
    num1=num;
    operator='mul';
    show+='*';
    refresh(show);
    num='';

  }else if (clickedId ==='btnDiv') {
    num1=num;
    operator='div';
    show+='/';
    refresh(show);
    num='';

  }else if(clickedId ==='btnEql'){
    num2=num;
    calcHelp(num1,num2,operator);
    num='';
  }else if (clickedId ==='btnClr') {
    num='';
    num1='';
    num2='';
    operator='';
    show='';
    document.getElementById('res').value ='';
  }

}
