function solution(start, end_num) {
    arr = [];
    for(i=start;i>=end_num;i--){
        arr.push(i);
    }
    return arr;
}