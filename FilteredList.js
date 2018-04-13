function filter_list(l) {
    // Return a new array with the strings filtered out
  var newArr=[];
  l.map((e,i)=>{
      if(typeof e === "string"){
      return
      }
      if (typeof e==="number"){
          newArr.push(e);
      }
    })
  return newArr
  }