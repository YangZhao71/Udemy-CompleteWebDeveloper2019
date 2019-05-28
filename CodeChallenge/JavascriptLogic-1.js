// Make a function that organizes these into individual array that is ordered. 
// Input: [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]
// Output: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]

// const arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
// const arr = ["1", "2", "4", "591", "392", "391", "2", "5", "10", "2", "1", "1", "1", "20", "20"];
// const arr = [1,2,4,591,392,391,2,5,10,2, "1", "1", "1", "20", "20"];
function sort(arr) {
	// sort by numerical order
	arr.sort((a,b) => a - b);
	// move to new array, combine same items
	let counter = 0;
	let sorted = [];
	arr.forEach((num, i) => {
		if(i === arr.length || arr[i] !== arr[i+1]) {
			if(counter === 0) {
				sorted.push(arr[i]);
			} else {
				sorted.push(arr.slice(i-counter,i+1));
				counter = 0;
			}
		} else if (arr[i] === arr[i+1]) {
			counter++;
		}
	});
	return sorted;
}
sort(arr);

// Bonus: Make it so it organizes strings differently from number types.
// Input: [1, "2", "3", 2] 
// Output: [[1,2], ["2", "3"]]
function typeSort(arr) {
	const sorted = [];
	sorted.push(sort(arr.filter((num) => typeof num == "number")));
	sorted.push(sort(arr.filter((num) => typeof num == "string")));
	return sorted;
}
typeSort(arr);
