function solution(my_string, n) {
    let answer ='';
    for(i=0; i<my_string.length; i++){
        for(l=0; l<n; l++){
            answer += my_string.charAt(i)
        }
    }
    return answer;
}