function solution(number) {
// 인수로 받은 값을 배열로 만들어준후 다 더해준후 9로 나눈 나머지 값을 출력한다. 
	return number.split('').map(Number).reduce((a,b)=>a+b)%9
}