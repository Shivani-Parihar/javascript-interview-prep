/* Given an object and a filter function, write a function that will go through and filter the object,
then return a filtered object */

const input = {
	a: 1,
	b: {
	 c: 2,
	  d: -3,
	  e: {
		f: {
		  g: -4,
		}
	  },
	  h: {
		i: 5,
		j: 6,
	  }
	}
}

const filter = n => n >= 0;

// Expected O/P : { a: 1, b: { c: 2, h: { i: 5, j: 6 } } }

const deepFilter = (input, filter) => {
	for(let key in input) {
		let value = input[key]

		if(typeof value === "object") {
			deepFilter(value, filter)
		} else if(filter(value) === false) {
			delete input[key];
		}

		if(JSON.stringify(value) === '{}') {
			delete input[key];
		}
	}

	return input;
} 