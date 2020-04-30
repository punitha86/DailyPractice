int rangeBitwiseAnd(int m, int n) {

    let count = 0;
    while(m!=n)
    {
      //rightshifting till we get the fixed number of non flipped numbers
        m>>=1;
        n>>=1;
        //counter to keep track of number of right shifts
        count+=1;
    }
    //left shift this number
    return m<<=count;
}

console.log(rangeBitwiseAnd(5,7));
