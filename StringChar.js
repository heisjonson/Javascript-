
const prompt = require("prompt-sync")();

 let word = prompt("Enter a word: ");
 
 let char = 0;
 let number = word.length;
 	
 	for (let count =0; count < word.length; count++){
 		
 		if (count % 2 === 0){
 			let string = word.charAt(count) 
 			console.log(string);
 		}	 		
 }
 
		
	
 		
 	
 