// Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, when added together, give the target number. 
// For example: answer([1,2,3], 4)should return [1,3]

function addTarget(arr, target) {
	for(let i = 0; i < arr.length; i++) {
		for(let j = i + 1; j < arr.length; j++) {
			if(arr[j] === target - arr[i]) {
				return [arr[i], arr[j]];
			}
		}
	}
	return "Failed to find numbers adding up to the target"
}
addTarget([1, 2, 3], 4);
// [1,3]
addTarget([1, 1, 2], 4);
// Failed to find numbers adding up to the target