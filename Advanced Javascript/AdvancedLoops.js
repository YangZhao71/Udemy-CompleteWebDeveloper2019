const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
	apples: 5,
	oranges: 9,
	grapes: 7
}

//1
for(let i = 0; i < basket.length; i++) {
	console.log(basket[i]);
}

//2
basket.forEach(fruit => {
	console.log(fruit);
})


//3. for of
// iterating
// array/string iteratable & enumeratable
for(fruit of basket) {
	console.log(fruit);
}

//4. for in - properties
// enumerating 
// object only enumeratable
for(fruit in detailedBasket) {
	console.log(fruit);	
}
// apples, oranges, grapes
for(fruit in basket) {
	console.log(fruit);	
}
// 0, 1, 2