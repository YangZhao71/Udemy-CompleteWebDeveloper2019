// closures:
// a function ran. the function executed. It’s never going to execute again but it’s going to remember that there are references to those variables.
// so the child scope always has access to the parent scope
const first = () => {
	const greet = 'Hi';
	const second = () => {
		const name = 'bobby';
		alert(greet);
	}
	return second;
}
const newFunc = first();;
newFunc();

// currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3); //(b) => a * b
curriedMultiply(3)(4); //12
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(10); //50


//compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5); //7



//to avoiding side effects
var a = 1;
function b() {
	a = 2;
}
//functional purity
//determinism
//one input always return the same value