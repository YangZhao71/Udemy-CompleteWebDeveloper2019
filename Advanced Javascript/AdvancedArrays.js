
const array = [1, 2, 10, 16];
const double = [];
array.forEach(num => {
	double.push(num * 2);
}); 
console.log('forEach', double);
// double = [2, 4, 20, 32];



//map always has a return element
const mapArray = array.map(num => num * 2);
console.log('map', mapArray);

//filter
const filterArray = array.filter(num =>{
	return num > 5;
});
console.log('filter', filterArray);

//reduce
const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num;
}, 0); // accumulator = 0
console.log('reduce', reduceArray); //29