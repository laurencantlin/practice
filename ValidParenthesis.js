function validParentheses(parens){
    var newStr=parens
    var isValid=false;
        if(parens.includes("()")){ 
            for(var i=0;i<(parens.length);i++){
             if(newStr.length===0){isValid=true; break;}
              newStr=newStr.split("()").join("")
    //         console.log(i,parens.length,"at length:"+newStr.length, "parens="+newStr)
            }
        }
      return isValid
    }