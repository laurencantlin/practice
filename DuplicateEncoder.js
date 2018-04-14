function duplicateEncode(word){
    var arr=word.toUpperCase().split("");
  var newArr=[...arr];
  newArr.fill(")");
  for(var i =0;i<arr.length;i++){
      if(arr.indexOf(arr[i])===arr.lastIndexOf(arr[i])){
          newArr.splice(i, 1, "(")
      }
  }
return newArr.join("");

}