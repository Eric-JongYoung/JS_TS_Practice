var 이름 = 'ko';
// Array 타입도 지정해줘야함
var 이름들 = ['ko', 'kim'];
// ?는 name 속성은 옵션이에염 이라고 하는거임
var 사람 = { name: 'ko' };
// Union Type
var 이름또는나이 = 'kim';
이름또는나이 = 20;
var 이름임 = 'wowman';
// 함수에 타입지정 가능
// 파라미터도 number, reuturn도 number인 함수
function 함수(x) {
    return x * 2;
}
var john = [123, true];
var bob = { name: 'bob' };
var eric = { name: 'eric' };
var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
    }
    return Human;
}());
