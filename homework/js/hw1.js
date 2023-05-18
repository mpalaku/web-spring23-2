//  question 1
function ageRequirement(age) {
	if (age >= 65) {
		return "Special discount";
	} else {
		return "Not Allowed";
	}
}

console.log(ageRequirement(95));
console.log(ageRequirement(15));

// question 2
function multiply(hello) {
	return hello.map(function (num) {
		return num * 100;
	});
}

var hello = [6, 12, 18, 24, 30];
var multipliedNumbers = multiplyBy100(hello);

console.log(multipliedNumbers);
console.log(hello);

//   question 3

function multiplyGreater5(numbers) {
	if (numbers.length > 5) {
		return numbers.map(function (number) {
			return number * 100;
		});
	} else {
		return numbers.slice();
	}
}

var numbers1 = [6, 7, 3, 6.4];
var multipliedNumbers1 = multiplyBy100IfLengthGreaterThan5(numbers1);
console.log(multipliedNumbers1); // Output: [1, 2, 3, 4, 5] (original array is not mutated)

var numbers2 = [5, 53, 53, 62, 67, 23, 62, 35];
var multipliedNumbers2 = multiplyBy100IfLengthGreaterThan5(numbers2);
console.log(multipliedNumbers2);

// question 4

function multiplyEvenBy100(numbers) {
	return numbers.map(function (number) {
		if (number % 2 === 0) {
			return number * 100; // Multiply even numbers by 100
		} else {
			return number; // Return odd numbers unchanged
		}
	});
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var multipliedNumbers = multiplyEvenBy100(numbers);

console.log(multipliedNumbers);
// Output: [1, 200, 3, 400, 5, 600, 7, 800, 9, 1000]

console.log(numbers);

// question 5
function countOccurrences(numbers, target) {
	var count = 0;

	numbers.forEach(function (number) {
		if (number === target) {
			count++;
		}
	});

	return count;
}

var numbers = [154, 657, 564, 561, 154, 678, 100, 154];
var target = 154;

var occurrenceCount = countOccurrences(numbers, target);

console.log(occurrenceCount);

// question 6
function checkType(input) {
	if (Array.isArray(input) || typeof input === "object") {
		return "object";
	} else {
		return "It's something else";
	}
}

console.log(checkType([1, 2, 3])); // Output: "object"
console.log(checkType({ key: "object" })); // Output: "object"
console.log(checkType("Hello")); // Output: "It's something else"
console.log(checkType(123)); // Output: "It's something else"
