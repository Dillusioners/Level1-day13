// importing for input and output
# include <iostream>
// importing for dynamic arrays
# include <vector>

/*
	Author: LeeTuah
	Program: Sum and average of n numbers
	For SuperB league event
*/

// returns the sum and average of the numbers
std::pair<int, float> sum_and_average(std::vector<int> numbers){
	std::pair<int, float> res = std::pair(0, 0);
	
	// iterating through all the numbers to get their sum and average
	for(auto i = numbers.begin(); i != numbers.end(); i++){
		res.first += *i;
		res.second += *i;
	}
	res.second /= (float) numbers.size();
	
	// returning the sum and average of the numbers
	return res;
}

int main(int argc, char const** argv){
	// declaring all the variables here
	int total, input;
	std::pair<int, float> ans;
	std::vector<int> nums;
	
	// taking in the total integer count
	std::cout << "How many numbers you want to input?: ";
	std::cin >> total;
	
	// iterating over the integer count to get all of them
	for(int i = 0; i < total; i++){
		std::cout << "Enter integer #" << i + 1 << ": ";
		std::cin >> input;
		nums.push_back(input);
	}
	
	// calculating the answer
	ans = sum_and_average(nums);
	
	// printing the answer to the console
	std::cout << "The sum of all the numbers is " << ans.first << std::endl;
	std::cout << "The average of all the numbers is " << ans.second;
}
