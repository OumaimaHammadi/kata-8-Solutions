function Mathematical_Operations(operation,value1,value2){
/*Method 1 */
/*     if(operation=='+') {
        return value1 + value2


    }
else  if(operation=='-') {
    return value1 - value2


}
else if(operation=='*'){
    return value1 * value2


}


else if(operation=='/'){
    return value1 / value2


} */



/*Method 2*/
return eval(value1+operation+value2)


}

console.log(Mathematical_Operations('-',1,7))

