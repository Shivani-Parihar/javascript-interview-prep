// You get a string with operation as input:

// if it is a number push it to stack
// if it is "DUP", then duplicate the one one top and push it to the stack
// if it is "POP" then remove the one on top
// if it is "+" add the two numbers on top of the stack and replace both with the result of the addition
// if it is "-" then minus the two numbers on top (the second minus the first) of the stack and replace both with the result of the subtraction
// if an error occurs, e.g. not enough numbers to add/subtract/pop, then return -1

function handleOperation(S) {
	function StackError() {}

	if(!S.length) return -1
	const stack = [];
	const push = n => stack.push(Number(n))
	const pop = () => {
		if(stack.length) return stack.pop();
		throw new StackError();
	}

	const duplicate = () => {
		const numToDuplicate = pop();
		push(numToDuplicate);
		push(numToDuplicate);
	}

	const add = () => {
		const num1 = pop();
		const num2 = pop();
		push(num1 + num2);
	}

	const subtract = () => {
		const num1 = pop();
		const num2 = pop();
		push(num1 - num2);
	}

	const operation = {
		"DUP": duplicate,
		"POP": pop,
		"+": add,
		"-": subtract
	}

	const input = S.split(" ");
	try {
		input.forEach(op => {
			if(isNaN(op)) {
				operation[op]()
			} else {
				push(op)
			}
		});
	} catch(err) {
		console.log("exception", err)
		return -1;
	}

	return pop();
}