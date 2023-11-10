//Create Empty Array for the Positive Numbers
//Create a Variable for the sum of Negatives
//Loop through the Given Array
//Check if the number is positive add it to Array



function Count_positives(input){
    /* Method 1 */

//     let positiveArray=[]
//     let sumNegative=0



//     for(let i=0; i <input.length; i++){

//         if(input[i] > 0){
//              positiveArray.push(input[i])



//         }
//         else {
//             sumNegative += input[i]
//         }


// }
// return [positiveArray.length,sumNegative]






 
/* Method 2 */
let positiveArray=input.filter((x)=> x>0).length

let sumNegative=input.filter((x)=> x <0 ).reduce((acc,current)=>acc + current,0) 

return [positiveArray,sumNegative]



}



console.log(Count_positives([1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15]))


