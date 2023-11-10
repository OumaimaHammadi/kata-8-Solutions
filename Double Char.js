///Given a str
//return a str in whitch each character 
//(Case-sensitives) is repeated once


//turn the String into Array ==>  return input.split('')
//Loop through the Array ===> map((s) =>)
// Repeat Each Element Once ====> map((s) => s.repeat(2))
// Return the Array Into String again ====> .map((s) => s.repeat(2)).join("")

function Double_Char(input){
    return input.split('').map((s) => s.repeat(2)).join("")



 


}



console.log(Double_Char("oui"))
