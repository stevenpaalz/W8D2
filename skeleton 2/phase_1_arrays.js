 Array.prototype.uniq = function() {
     const answer = [];
     this.forEach((el)=> {
         if (!answer.includes(el)) { answer.push(el);}
     })
     return answer;
 }

//Array.prototype.uniq = () => {
//    const answer = [];
//    this.forEach((el) => {
//        if (!answer.includes(el)) { answer.push(el);}
//    })
//    return answer;
//}

Array.prototype.twoSum = function() {
	const answer = [];

	this.forEach((ele, i) => {
		this.forEach((ele2, i2) => {
			if (ele + ele2 === 0 && i2 > i) {
				answer.push([i, i2]);
			}
		})
	})
	return answer;
}

Array.prototype.transpose = function() {
	const answer = Array.from(Array(this[0].length), () => []);

	this.forEach((subArr, idx1) => {
		subArr.forEach((ele, idx2) => {
			answer[idx2][idx1] = ele;
		})
	})
	return answer;
}

const a = [[1, 2, 3],[4, 5, 6]];

console.log(a.transpose())
