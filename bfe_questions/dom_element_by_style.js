// Create a function that finds elements in the DOM by a style. The function should take a CSS property name and value
// and return the list of elements in the DOM that match that style. The function signature should look like the following:

// method signature:
// getElementsByStyle => (property: string, value: string): Array

// For example, you might call getElementsByStyle("color", "#FFF") and it would return all the elements in the DOM with white text.

getElementByStyle = (property, value) => {
	const queue = [document.body];
	const result = []

	while(queue.length > 0) {
		const head = queue.shift();
		const headClassList = getComputedStyle(head)
		// need to make sure if it is safe to access the property without knowing if it exists
		if(headClassList.getPropertyValue(property) === value) {
			result.push(head)
		}

		queue.push(...head.children)
	}

	return result;
}