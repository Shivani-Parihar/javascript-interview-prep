// Advanced currying implementation

const join = (a, b, c) => {
	return `${a}_${b}_${c}`;
}

function curry(func) {
	return function curried(...args) {
		if(args.length >= func.length) {
			return func.apply(this, args)
		} else {
			return function(...args2) {
				return curried.apply(this, args.concat(args2))
			}
		}
	}
}

const curriedJoin = curry(1)(2,3)
const curriedJoin1 = curry(1)(2)(3)
const curriedJoin2 = curry(1, 2, 3)