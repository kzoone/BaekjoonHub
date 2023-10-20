function solution(a, b) {
    let sum1 = 2 * a * b  
    let sum2 = a.toString()+b.toString()
    if(sum1 > parseInt(sum2)) return sum1;
    else{
        return parseInt(sum2);
    }
}