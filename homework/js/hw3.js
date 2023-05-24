// question 1

function checkDiscount(date) {
	switch (date) {
		case 1:
			return "Too early";
		case 15:
			return "Here is your discount";
		case 30:
			return "Too late";
		default:
			return "Not a valid date";
	}
}

console.log(checkDiscount(1));

// question 2

function constructArray(num1, num2) {
	const result = [];

	let currentNum = num1 + 1;
	while (currentNum < num2) {
		result.push(currentNum);
		currentNum++;
	}

	return result;
}

const num1 = 2;
const num2 = 117;

const resultArray = constructArray(num1, num2);
console.log(resultArray);

// question 3

function getObjectKeys(obj) {
	return Object.keys(obj);
}

const myObject = { name: "Jack", email: "jack@gmail.com", age: 30 };
const keysArray = getObjectKeys(myObject);
console.log(keysArray);

// question 4
function calculateMaxProfit(stockPrices) {
	if (stockPrices.length < 2) {
		return 0;
	}

	let maxProfit = 0;
	let minPrice = stockPrices[0];

	for (let i = 1; i < stockPrices.length; i++) {
		const currentPrice = stockPrices[i];
		const profit = currentPrice - minPrice;

		if (profit > maxProfit) {
			maxProfit = profit;
		}

		if (currentPrice < minPrice) {
			minPrice = currentPrice;
		}
	}

	return maxProfit;
}
const stockPrices = [315, 50, 314, 684, 100, 648, 132, 50, 98, 45];
const maxProfit = calculateMaxProfit(stockPrices);
console.log(maxProfit);
