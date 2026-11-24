
const prompt = require("prompt-sync")();

let number = Number(prompt("Enter a number: "))


if(number >= 100 && number < 999){

		for (let count1 = 1; count1 <= 9; count1++){
			for (let count2 =0; count2 <= 9; count2++){
				for (let count3 = 0; count3 <= 9; count3++){
					
					
					let sum = count1 **2 + count2 **2 + count3 **2;
					let total = (count1 * 100) + (count2 * 10) + (count3);
					
					 if (sum == total){
						console.log(total);
					}
				}
			}
		}
		 
	}
else{
	console.log("Invalid Number");
}