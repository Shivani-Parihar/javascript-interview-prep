// const arr = [1, 2, [3, 4, [5, 6]]];
// reduce + concat + isArray + recursivity
function flatDeep(arr, depth = 1) {
	return depth > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, depth - 1) : val), [])
						: arr.slice()
}

// flatDeep(arr, Infinity);
// >> [1, 2, 3, 4, 5, 6]