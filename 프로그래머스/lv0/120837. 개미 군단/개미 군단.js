function solution(hp) {
    var a = Math.floor(hp / 5);
    var b = Math.floor((hp % 5) / 3)
    var c = ((hp % 5) % 3) 
    return a + b + c;
}