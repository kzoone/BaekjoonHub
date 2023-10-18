function solution(n, control) {
    const w ="w";
    const s ="s";
    const d ="d";
    const a ="a";
    let sum = 0;
    let arr=control.split("");
    for(i=0;i<arr.length;i++){
        if(arr[i] === w){
            sum = sum + 1;
        }
        else if(arr[i] === s){
            sum = sum -1;
        }
        else if(arr[i] === d){
            sum = sum + 10;
        }
        else if(arr[i] === a){
            sum = sum - 10;
        }
    }
    return n + sum;
}