// implement Arr.flat()
// flat input arr = [1, 2, [3, 4, [5, 6]]]
function flat(arr) {
	const stack = [...arr]
	const result = []

	while(stack.length) {
		const next = stack.pop()

		if(Array.isArray(next)) {
			stack.push(...next)
		} else {
			result.push(next)
		}
	}

	return result.reverse()
}