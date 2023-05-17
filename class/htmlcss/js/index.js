// Javascript we can declare variable - var, let and const are keyword.Keywords are reserved. so we can name it for variable like var var = "maddy";

// var is legacy keyword is not used mostlt trying to see the drawbacks with the code below
var myName = "Maddy";
let age = 10;
let active = true;
let membership;

// var, let & const are keywords to declare a variable, keywords are reserved
// = is the assignment operator and is used to assign value to a variable
// JS has 5 primitive data types: string (enclosed in ""), number, boolean, undefined, null

var myName = "tai"; // "tai" and "10" are both strings
// let age = 10; // 10 is a number, while "10" is a string - numbers can perform math operations
// let active = true; // true/false is boolean ; "true" is a string (enclosed in "")
// let membership; // declared a variable, but not assigned a value to it: JS auto. assign value of undefined
console.log("before", membership);
membership = "gold"; // reassignment
console.log("after", membership);

// const date; // compile-time error; const cannot be reassigned so it must be initialized/declared with a value
const date_created = null; // null is a data type as well as a value

// var can be redeclared (reusing the keyword)
var myName = "anna";
// let age = 20; // this results in compile-time error
// console.log(myName);

// redeclare vs reassign are different (var and let can be reassigned, const cannot be reassigned)
myName = "jack";
age = 25; // reassign does not use the keyword again

// == & === are called 'comparison operator' (99.999% of the time, we should be using ===) === is called strict comparison op.
console.log("10" == 10); // true, this will attempt to do type conversion first - then compare the values "10" == "10"; 10 == 10
console.log("10" === 10); // false, this check type first, if diff. type then it's immediately false - NO TYPE CONVERSION will be done

console.log("ten" === "10"); // false, false => different scalar value
console.log("ten" == "10"); // true, true => false => different scalar value

console.log(0 === false); // false
console.log(0 == false); // false => true

// HOISTING: bring var declarations to the top of the scope
// var fruit; // hoisting happens: JS auto. assigns undefined
// console.log("fruit", fruit); // undefined
// console.log("num", num); // ReferenceError: Cannot access 'num' before initialization

// var fruit = "apple";
// let num = 25;

// console.log("fruit", fruit); // apple
// console.log("num", num); // 25

//======= more hoisting
var nameA;
// console.log("nameA", nameA); // undefined, undefined, undefined
nameA = "Dave";
// console.log("nameA", nameA); // Dave, Dave, Dave

let nameB;
// console.log("nameB", nameB); // undefined, ReferenceError, undefined (init. then accessed an empty variable so it's undefined)
nameB = "Dave";
// console.log("nameB", nameB); // Dave, not execute, Dave

// 2 phases: 1. memory allocation (where hoisting happens) => 2. execution

// hoisting with functions
// USING A FUNCTION BEFORE DECLARING IT - functions get hoisted, BUT unlike 'var' functions still work normally
// this only applies to functions declared using the 'function' keyword
const result = multiply(5, 10); // invoke a function by calling its funcName()
console.log("result", result);

function multiply(a, b) {
	return a * b;
}

// typeof
