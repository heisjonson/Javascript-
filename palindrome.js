
const prompt = require("prompt-sync")();


 let word = prompt("Enter a word: ");
 
 
 let reverse = ""
 	
 	for (let count =0; count < word.length; count++){
 	
 		reverse = word.charAt(count) + reverse;	 		
 }
 
		console.log(reverse);
		
	if (word === reverse){
 			console.log("This is a palindrome")
 		}
 		
 		else{
 			console.log("This is not a palindrome")
 		}
 		

 