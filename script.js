console.log("Hello, World!");

// one line comment

/*
multi line comment
*/


const name = "Ryu Fauzan Yusuf"; // string
let currentAge = 15; // number
let isStudent = true; // boolean
let hobbies = ["reading", "coding", "gaming"]; // array
let money = null; // null
let futureJob; // undefined
let person = {
    name: "Ryu Fauzan Yusuf",
    currentAge: 15,
    isStudent: true,
    hobbies: ["reading", "coding", "gaming"],
    money: null,
    futureJob: undefined
}

console.log("My name is " + name);
console.log("My current age is " + currentAge);
console.log("I am a student: " + isStudent);
console.log("My hobbies are: " + hobbies.join(", "));
console.log("I have " + money + " money.");


console.log("My name is " + person.name + " and I am " + person.currentAge + " years old.");
