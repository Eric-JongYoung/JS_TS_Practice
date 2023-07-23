// function
function 함수(x) {
    return x * 2;
}
// void
function 함수2(x) {
}
// 타입지정된 함수는 파라미터 무조건 넣어줘야함.
// 함수()
// 파라미터가 옵션일 경우엔
// x? :number 는 결국엔 x :number | undefined 와 같음
function 함수3(x) {
}
// Narrowing
// 변수가 타입이 불확실하면 if문 등으로 Narrowing 해줘야 조작가능
function 내함수(x) {
    // return x + 1; // union 타입이라 안됨.
    if (typeof x === 'string') {
        return x + '1';
    }
    else {
        return x + 1;
    }
}
내함수(2);
// typeof , in , instanceof 가능
function 내함수2(x) {
    var arr = [];
    if (typeof x === 'number') {
        arr[0] = x;
    }
    else {
    }
}
// Assertion 문법 -> 타입 덮어쓰기
// 1. Narrowing 할떄
// 2. 무슨 타입이 들어올지 100% 확실할때
function 내함수3(x) {
    var arr = [];
    arr[0] = x;
}
