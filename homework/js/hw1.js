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
var multipliedNumbers = multiply(hello);

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
var multipliedNumbers1 = multiplyGreater5(numbers1);
console.log(multipliedNumbers1);

var numbers2 = [5, 53, 53, 62, 67, 23, 62, 35];
var multipliedNumbers2 = multiplyGreater5(numbers2);
console.log(multipliedNumbers2);

// question 4

function multiplyEvenBy100(numbers) {
	return numbers.map(function (number) {
		if (number % 2 === 0) {
			return number * 100;
		} else {
			return number;
		}
	});
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var multipliedNumbers = multiplyEvenBy100(numbers);

console.log(multipliedNumbers);
console.log(numbers);

// question 5
function counting(occurence, times) {
	var count = 0;

	occurence.forEach(function (number) {
		if (number === times) {
			count++;
		}
	});

	return count;
}

var occurence = [154, 657, 564, 561, 154, 678, 100, 154];
var times = 154;

var occurrenceCount = counting(occurence, times);

console.log(occurrenceCount);

function count(array, target) {
	return array.reduce(function (count, number) {
		if (number === target) {
			count++;
		}
		return count;
	}, 0);
}

// question 6
function checking(input) {
	if (Array.isArray(input) || typeof input === "object") {
		return "object";
	} else {
		return "It's something else";
	}
}

console.log(checking([1, 2, 3]));
console.log(checking("Hello"));
