//Convert-number-to-reversed-array.js

//Change the number to String
//Split the String to an array
//Change the Strings in the array to Numbers
//Reverse the Array

function Convert_number(n){
    return n
    .toString()
    .split("")
    .map((m)=> Number(m))
    .reverse()


}


console.log(Convert_number(123456789)) 
//console.log(typeof Convert_number()) 