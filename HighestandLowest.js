function highAndLow(numbers){
    newArr=[];
    numbers.split(" ").map((num)=>newArr.push(parseInt(num)))
    var max=Math.max(...newArr);
    var min=Math.min(...newArr);
    return `${max} ${min}` 
    }