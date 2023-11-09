function Returning_negative(number){

/** Method 2 */

    //return number > 0 ? -number: number 


    /** Method 1 */

    if(number > 0) {
        console.log(number,"number is + ") 
        return number * -1

    }
    else{
        console.log(number," number is - ") 


    }
  
}


console.log(Returning_negative(10))