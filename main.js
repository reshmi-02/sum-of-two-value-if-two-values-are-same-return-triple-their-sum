var num1=parseInt(prompt("Enter the first value"))
var num2=parseInt(prompt("Enter the second value"))
document.write(`num1=${num1}<br>`)
document.write(`num2=${num2}<br><br>`)
if(num1===num2){
    let c=num1+num2
    let ans=c*3
   
    document.write(`sum of two number is ${c}<br>`)
    document.write(`Two values are equal so triple of the sum is ${ans}<br>`)
   
}
else{
    let c=num1+num2
    document.write(`sum of two number is ${c}`)
}