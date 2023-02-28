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