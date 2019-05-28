
var database = [
	{
	username: "Yang",
	password: "Zhao"
	}
];

var newsfeed = [
	{
		username: "first",
		timeline: "19:04"
	},
	{
		username: "second",
		timeline: "19:05"
	},
	{
		username: "thrid",
		timeline: "19:06"
	}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, password) {
	if (user == database[0].username && 
		password == database[0].password) {
		console.log(newsfeed);
	} else {
		alert("Sorry, wrong username and password!");
	}
}

signIn(userNamePrompt, passwordPrompt);