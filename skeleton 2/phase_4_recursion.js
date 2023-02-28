const range = (start, end) => {
	if (start === end) {
		return [start];
	}

	return [start].concat(range(start+1, end));
} 

// console.log(range(2, 6));

const sumRec = (arr) => {
	if (arr.length === 1) {
		return arr[0];
	}
	return arr[0] + sumRec(arr.slice(1,arr.length));
}

// console.log(sumRec([1,2,3,4]));

function exponentv1(base, n) {
	if (n === 1) { return base;}
	return base * exponent(base, n-1);
}


const exponentv2 = (base, n) => {
	if (n === 0) {return 1;}
	if (n===1) {return base;}
	if (n % 2 === 0 ) { return Math.pow(exponentv2(base, n/2), 2);}
	else { return base * Math.pow(exponentv2(base, (n-1)/2), 2);}
}

// console.log(exponentv2(2,4));

const fibonacci = (n) => {
	if (n == 1) {return [0];}
	if (n == 2) {return [0, 1];}
	last = fibonacci(n-1) // array [0,1,1,2,3]
	last.push(last.length-1 + last.length - 2);
	return last;
}

console.log(fibonacci(5));