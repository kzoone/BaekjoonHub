function solution(n, k) {
    arr = [];
    for(i=1;i<=n;i++){
      if(i % k === 0){
        arr.push(i);     
      }
  }
    return arr;
}