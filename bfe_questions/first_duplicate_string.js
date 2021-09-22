// BFE 105
/**
 * @param {string} str
 * @return {string | null}
 */
 function firstDuplicate(str) {
	let map = new Map();
  
	for(let i = 0; i < str.length; i++) {
	  if(map.get(str[i])) return str[i]
  
	  map.set(str[i], 1)
	}
  
	return null
  }