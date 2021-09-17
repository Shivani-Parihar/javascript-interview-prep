// BFE 104 : Traverse DOM level by level

/**
 * @param {HTMLElement | null} root
 * @return {HTMLElement[]}
 */
 function flatten(root) {
	if(root === null) {
	  return [];
	}
  
	const queue = [root];
	const result = [];
  
	while(queue.length > 0) {
	  const head = queue.shift();
  
	  result.push(head);
	  queue.push(...head.children)
	}
  
	return result
  }