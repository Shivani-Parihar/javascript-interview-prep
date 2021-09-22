/* Given a series of child-parent relations like
[['dog', 'mammal'],
["shark, fish"],
["cat", "mammal"],
["mammal", "animal"],
['fish', 'animal']]

capture the relationship of these entities so you can print the
relationships in a nested format at any point. */

function makeParentChildRel(list) {
	const has_parent = new Set()
	const allItems = {}
	const result = {}
	for([child, parent] of list) {
		if(!allItems[parent]) {
			allItems[parent] = {}
		}

		if(!allItems[child]) {
			allItems[child] = {}
		}

		allItems[parent][child] = allItems[child]
		has_parent.add(child)
	}

	for(const [key, value] of Object.entries(allItems)) {
		if(!has_parent.has(key)) {
			result[key] = value
			return result
		}
	}

	return result;
}
