function Square_Or_Not(array){
    /*Method 1 */


   /*   let new_Array=[]

    for(let i=0 ;i<array.length;i++){
        if(Number.isInteger(Math.sqrt(array[i]))){

            new_Array.push(Math.sqrt(array[i])) 


        }
         else{
             new_Array.push(array[i] * array[i])
         }



    }
  


   return new_Array */

   console.log(array)


       /*Method 2 */
       return array.map((number)=>
        Number.isInteger(Math.sqrt(number)) ? Math.sqrt(number) : number * number)





}


   




console.log(Square_Or_Not([4,3,9,7,2,1]))