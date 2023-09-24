function solution(numbers) {
    const sortedNums = numbers.sort((a, b) => a - b);
    if(sortedNums[0] * sortedNums[1] > sortedNums[sortedNums.length -1] * sortedNums[sortedNums.length -2]){
        return (sortedNums[0] * sortedNums[1]);
    }
    else{
        return (sortedNums[sortedNums.length -1] * sortedNums[sortedNums.length -2]);
    }
}