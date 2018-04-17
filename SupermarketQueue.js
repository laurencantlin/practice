//thread pool practice
function queueTime(customers, n) {
    if (n=1){
       var totaltime=0
       for(var i =0;i<customers.length; i++)  {
           totaltime=totaltime+customers[i];
       }
       return totaltime;
   
     }
   }