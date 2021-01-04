window.addEventListener('load', init, false);

var firstNumber = null;
var secondNumber = null;
var operation = null;

function init(e) {
	let numbers = document.getElementsByClassName('number');
	let operators = document.getElementsByClassName('operator');
	let clearButton = document.getElementById('clear');
	clearButton.addEventListener('click', clearResult, false);
	for (n=0; n<numbers.length; n++) {
		numbers[n].addEventListener('click', addNumber, false);
	};
	for (o=0; o<operators.length; o++) {
		operators[o].addEventListener('click', addOperation, false);
	};
}

function addNumber(numberButton) {
	let resultArea = document.getElementById('result');
	if (!Number(resultArea.innerHTML)){
	resultArea.innerHTML = numberButton.target.textContent;} else {
		resultArea.innerHTML = resultArea.innerHTML + numberButton.target.textContent;
	}
}

function addOperation(operatorButton) {
	let resultArea = document.getElementById('result');
	if (!firstNumber){
		firstNumber = Number(resultArea.innerHTML);
	} else {
		secondNumber = Number(resultArea.innerHTML);
	}
	resultArea.innerHTML = operatorButton.target.textContent
	switch (resultArea.innerHTML) {
		case "+":
		operation = sum;
		break;
		case "-":
		operation = diff;
		break;
		case "*":
		operation = multiplication;
		break;
		case "/":
		operation = division;
		break;
		case "=":
		if (operation) {
			firstNumber = operation(firstNumber, secondNumber);
			secondNumber = null;
			operation = null;
			}
		break;
	};
}



function clearResult() {
	let resultArea = document.getElementById('result');
	resultArea.innerHTML = "...";
	firstNumber = 0;
	secondNumber = 0;
	operation = null;
}

function sum(num1, num2) {
	let resultArea = document.getElementById('result');
	let result = num1 + num2;
	resultArea.innerHTML = result
	return result
}

function diff(num1, num2) {
	let resultArea = document.getElementById('result');
	let result = num1 - num2;
	resultArea.innerHTML = result
	return result
}

function multiplication(num1, num2) {
	let resultArea = document.getElementById('result');
	let result = num1 * num2;
	resultArea.innerHTML = result
	return result
}

function division(num1, num2) {
	let resultArea = document.getElementById('result');
	let result = num1 / num2;
	resultArea.innerHTML = result
	return result
}

