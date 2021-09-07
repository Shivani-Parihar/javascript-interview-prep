// Given two same DOM tree A, B, and an Element a in A, find the corresponding Element b in B.

// By corresponding, we mean a and b have the same relative position to their DOM tree root.


/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode = (rootA, rootB, target) => {
	if(rootA === target) return rootB;

	// 1. get the path Array<number>
	const path = [];
	let node = target;
	while(node !== rootA) {
		let parent = node.parentElement;
		let children = Array.from(parent.children);
		let index = children.indexOf(node);
		path.push(index)
		node = parent;
	}

	// 2. apply the path(reversed) to rootB
	return path.reduceRight((result, index) => result.children[index], rootB);

}
