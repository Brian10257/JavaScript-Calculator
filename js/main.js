let penddingResult = 0;
let operationOptions = [ 'divide', 'multiply', 'subtract', 'add' ];
operation = '';

function mainLogic(input) {
	let display = document.getElementById('display');
	let memory = document.getElementById('memory');

	if (display.innerHTML === '0' && operationOptions.indexOf(input) === -1) {
		if (input === 'decimal') {
			display.innerHTML = '0.';
		} else if (input === 'neg-val') {
			if (display.innerHTML.indexOf('-1') === -1) {
				display.innerHTML = '-' + display.innerHTML;
			} else if (display.innerHTML.indexOf('-1' > -1)) {
				display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
			}
		} else {
			display.innerHTML = input;
		}
	} else if (operationOptions.indexOf(input) >= 0) {
		if (operation === '') {
			operation = input;
			penddingResult = display.innerHTML;
			display.innerHTML = 0;
		} else {
			penddingResult = evaluate(penddingResult, display.innerHTML, operation);
			memory.innerHTML = penddingResult;
			display.innerHTML = 0;
			operation = input;
		}
	} else if (input === 'equals') {
		display.innerHTML = evaluate(penddingResult, display.innerHTML, operation);
		penddingResult = 0;
		operation = '';
		memory.innerHTML = penddingResult; 
	} else if (input === 'decimal') {
		if (display.innerHTML.indexOf('.') === -1) {
			display.innerHTML += '.';
		}
	} else if (input === 'neg-val') {
		if (display.innerHTML.indexOf('-1') === -1) {
			display.innerHTML = '-' + display.innerHTML;
		} else if (display.innerHTML.indexOf('-1' > -1)) {
			display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
		}
	} else {
		display.innerHTML += input;
	}
}

function clearInput() {
	let display = document.getElementById('display');
	let memory = document.getElementById('memory');
	penddingResult = 0;
	display.innerHTML = 0;
	memory.innerHTML = penddingResult;
}

function evaluate(num1, num2, operation) {
	let result;
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	switch (operation) {
		case 'add':
			result = num1 + num2;
			break;
		case 'subtract':
			result = num1 - num2;
			break;
		case 'multiply':
			result = num1 * num2;
			break;
		case 'divide':
			result = num1 / num2;
			break;
		default:
			console.log('evaluate Result');
	}
	return result.toString();
}
