//thread pool practice
function queueTime(customers, n) {
    if(customers.length===0){return 0}
    else if (n = 1) {
        return customers.reduce((total, num) => { return total + num });

    }
    //else if n>length of array, then return sum of items in array
    //else if 1<n<length of of array,??

}