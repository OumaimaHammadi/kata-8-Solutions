//Sum-Without-The-Highest-And-The-Lowest-Number
function sum_Array(array){
   if(array == null) return 0

   /* Method 2*/ 
   return array
   .sort((a,b) => a-b)
   .slice(1,-1)
   .reduce((acc,current)=> acc + current,0) 


 


   /* Method 1*/ 



   // let max_value=Math.max(...array)
   // let min_value = Math.min(...array)
   // let filterArray = array.filter((x) => x!==max_value && x!==min_value)
   // let newArray = filterArray.reduce((acc,current) => acc + current ,0)
   // console.log(newArray)
}
console.log(sum_Array([1,10,8,10,7,3])
)

