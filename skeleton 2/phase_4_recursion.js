const range = (start, end) => {
	if (start === end) {
		return [start];
	}

	return [start].concat(range(start+1, end));
} 

console.log(range(2, 6));