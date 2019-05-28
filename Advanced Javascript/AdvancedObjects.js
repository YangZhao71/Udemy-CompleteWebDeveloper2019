// reference type
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

object1 == object2 //true
object1 == object3 //false

// primitive types: pass by value
// objects / arrays : pass by reference

// shallow copy:
// const array2 = [].concat(array1);
// const obj2 = Object.assign({}, obj1);
// const obj3 = {...obj};

// deep copy:
// const superClone = JSON.parse(JSON.stringify(obj));


// context VS scope 
const object = {
	a : function() {
		console.log(this);
	}
}

//instantiation
class Player {
	constructor(name, type) {
		console.log('player1', this);
		this.name = name;
		this.type = type;
		console.log('player2', this);
	}
	introduce() {
		console.log(`Hi I am $(this.name), I'm a $(this.type)`);
	}
}
class Wizard extends Player {
	constructor(name, type) {
		super(name, type);
		console.log('wizard', this);
	}
	play() {
		console.log(`WEEEEE I'm a $(this.type)`);
	}
}
const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Magician');


// type coercion - all languages have type coercion
1 == '1'  //true, try coerce
1 === '1' //false, don't coerce








