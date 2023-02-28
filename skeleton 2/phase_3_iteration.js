Array.prototype.bubbleSort = function (){
    let sorted = false;
    while (!sorted) {
        sorted = true;
        this.forEach((el, i)=> {
            if (el > this[i+1]) {
                let temp = this[i+1];
                this[i+1] = this[i];
                this[i] = temp;
                sorted = false;
            }
        })
    }
    return this;
}

//console.log([1,-3,5,2].bubbleSort());

String.prototype.substrings = function() {
	debugger
	let result = [];
	
	let array = this.split(""); 
	array.forEach((el1, idx1) => {
		result.push(array[idx1])
		array.forEach((el2, idx2) => {
			if (idx2 > idx1) {
			result.push(array.slice(idx1, idx2+1).join(""));
		}})
	})
	return result;
}

//console.log("Hello".substrings());



