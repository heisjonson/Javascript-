
const prompt = require("prompt-sync")();


 
 
 let random = 41
 let count =1
 let number = Number(prompt("Enter A Random Numbers(1-100): "))

 	if (number > 0 && number <= 99){
 	for (; count <= 99; count++){
 	 number = Number(prompt("try again: "))
 	
 	if (number == null || number == -1){
 		 consolelog("You quit the game")
 	 	break;
 	 	}
 	 
 	 	
 	if (number === random){
 		console.log(`You gusssed right number is: ${random}`)
 		break;
 		
 	}
 	}
 	


 	}
 

 