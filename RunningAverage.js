
const prompt = require("prompt-sync")();


 
 
 let sum = 0
 let average =0
 let count =1
 
 if (count > 1){
 	
 	for (; count >0; count++){
 	let number = Number(prompt("Enter a number: "))
 	
 	sum += number;
 	average = sum / count;
 	 console.log(`The average is ${average}`)
 	 if (number == null || number == -1){
 	 	break;
 	 }
 	}
 }

 