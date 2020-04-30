var stringShift = function(s, shift) {
          let val = 0;

        for(let i=0; i<shift.length; i++)
            val += shift[i][0]==0 ? -shift[i][1]: shift[i][1];

        let len = s.length;
        val %= len;

        let result = "";
        if(val>0)   //Right rotation
            result = s.substr(len-val,val) + s.substr(0,len-val);
        else        //Left rotation
            result = s.substr(-val,len+val) + s.substr(0,-val);

        return result;
};
