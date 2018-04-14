function removeSmallest(numbers) {
    var min=Math.min(...numbers)
    var numArr =[...numbers];
    var position= numArr.findIndex(function(item, i, arr){return item===min})
    console.log(numArr, position)
    numArr.splice(position,1);
    return numArr}