// Array.prototype.uniq = function() {
//     const answer = [];
//     this.forEach((el)=> {
//         if (!answer.includes(el)) { answer.push(el);}
//     })
//     return answer;
// }

Array.prototype.uniq = () => {
    const answer = [];
    this.forEach((el) => {
        if (!answer.includes(el)) { answer.push(el);}
    })
    return answer;
}