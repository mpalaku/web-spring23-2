// question 1

function printCalendar(months, dates) {
	for (let i = 0; i < months.length; i++) {
		const month = months[i];
		const date = dates[i];

		for (let day = 1; day <= 10; day++) {
			console.log(month + " " + day);

			if (day === date) {
				break;
			}
		}
	}
}

// question 2

function cloneArray(array) {
	return array.slice();
}

// question 3

function getNthElement(arr, n) {
	if (n >= 0 && n < arr.length) {
		return arr[n];
	} else {
		return "element does not exist";
	}
}

// question 4

function customPush(arr, item) {
	arr[arr.length] = item; // Add the item at the end of the array
	return arr.length; // Return the length of the array after adding the item
}

function customPop(arr) {
	if (arr.length === 0) {
		return undefined; // Return undefined if the array is empty
	}

	const lastItem = arr[arr.length - 1]; // Get the last element of the array
	arr.length = arr.length - 1; // Reduce the length of the array by 1 to remove the last element

	return lastItem; // Return the removed element
}

//   question 5

Array.prototype.customReduce = function (callbackfn, initialValue) {
	const originalArray = this;

	let accumulator = initialValue !== undefined ? initialValue : originalArray[0];

	for (let i = initialValue !== undefined ? 0 : 1; i < originalArray.length; i++) {
		accumulator = callbackfn(accumulator, originalArray[i], i, originalArray);
	}

	return accumulator;
};
