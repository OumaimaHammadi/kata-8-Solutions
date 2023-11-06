function positive_Sum(arr){
/*1ere Methode */

  /*   let sum=0
    for(let i=0;i<arr.length;i++ ){
        if( arr[i]>0 ){
            console.log("positive")
           sum+=arr[i]
        }
        // else{
        // console.log('negative')
    
        // }

    } 
    
    
        return sum

    */


    /*2éme Methode */
    return arr.filter((x)=> x > 0).reduce((acc,current)=>acc + current,0)

 
}


console.log(positive_Sum([1,2,-3,3]))