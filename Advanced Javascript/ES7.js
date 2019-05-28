// ES7
// 1.includes() - string/array
'Helloooo'.includes('o') //true
const pets = ['cat', 'dog', 'bat'];
pets.includes('dog') //true


// 2.exponential operator
const square = (x) => x**2
const cube = (y) => y**3
square(2) //4
square(5) //25



// ES8
// 1.string padding
.padStart() - # of spaces before the string
.padEnd() - # of spaces before the string

// 2.trailing commas in function's parameter lists 
const fun = (a, b, c,) => {
	console.log(a);
}
fun(1, 2, 3,)

// 3.
Object.values
Object.entries
Object.keys

let obj = {
	username0: 'Santa',
	username1: 'Rudolf',
	username2: 'Santa'
}

Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key]);
})
Object.values(obj).forEach(value => {
	console.log(value);
})
Object.entries(obj).forEach(value => {
	console.log(value)；
})

Object.entries(obj).map(value => value[1] + value[0].replace('username', ''));

