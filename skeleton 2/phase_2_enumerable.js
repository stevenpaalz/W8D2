Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i ++) {
        callback(this[i]);
    }
}

// let arr = [1,2,3,4]
// // arr.myEach

// console.log(arr.myEach((el)=>{console.log(el)}))


Array.prototype.myMap = function(callback) {
    const answer = [];
    for (let i = 0; i < this.length; i ++) {
        answer.push(callback(this[i]))
    }
    return answer;
}

Array.prototype.myReduce = function(callback, initialValue =  null) {
	let i = 0;

	if (initialValue === null) {
		initialValue = this[0];
		i = 1;
	}

	let accumulator = initialValue;
	for (let j = i; j < this.length; j++) {
		let ele = this[j];
		accumulator = callback(accumulator, ele);
	}
	return accumulator
}

console.log([1, 2, 3, 4].myReduce(function(acc, el) {
	return acc + el;
}, 10));