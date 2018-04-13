function createPhoneNumber(numbers){
numbers.splice(3,0,")", " ");
numbers.splice(0,0,"(")
numbers.splice(9,0,"-")
var newArr=numbers.join("");
return newArr

}
