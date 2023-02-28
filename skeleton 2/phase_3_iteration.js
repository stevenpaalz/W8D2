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

console.log([1,-3,5,2].bubbleSort());