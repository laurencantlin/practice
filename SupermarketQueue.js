//thread pool practice
function queueTime(customers, n) {
    if(customers.length===0){return 0}
    else if (n === 1) {
        return customers.reduce((total, num) => { return total + num });

    }
    else if (n>customers.length){
        return Math.max(...customers)
    }
    else if (1<n<customers.length){
        console.log("thread pool")
    }   
}