function solution(array, height) {
    var cnt = 0;
    for(i=0; i<array.length; i++){
        if(array[i]>height){
            cnt = cnt + 1;
        }
    }
    return cnt;
}