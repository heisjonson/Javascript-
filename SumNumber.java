public class SumNumber{
	public static void main(String[] args){
		for (int count1 = 1; count1 <= 9; count1++){
			for (int count2 =2; count2 <= 9; count2++){
				for (int count3 = 3; count3 <= 9; count3++){
					
					int square1 = count1 * count1;
					int square2 = count2 * count2;
					int square3 = count3 * count3;
					
					int sum = square1 + square2 + square3;
					int total = (count1 * 100) + (count2 * 10) + (count3);
					
					if (sum == total){
						System.out.print(total);
					}
				}
			}
		} 
	}
}