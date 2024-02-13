var 이름 = 'kim';
var 이름들 = ['kim', 'lee', 'park'];
var 학생 = { 이름: 'kim', 나이: 20 }; // 나이? : number 는 옵셔널 프로퍼티
var 알수없는이름 = 123; // 유니언 타입
var 내가만든타입변수 = 123;
// 함수에도 타입을 지정할 수 있다.
function 함수(x, y) {
    return x + y;
}
var jonh = [123, true];
var tom = { name: 'kim' };
// class 타입 지정
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
