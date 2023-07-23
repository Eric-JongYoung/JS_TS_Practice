// primitive types
var 이름 = 'ko';
var 나이 = 23;
var 물음표 = null;
// array 자료에 타입 지정 가능
var 회원들 = ['kim', 'ko', 'park'];
// Object 타입
var 회원 = { name: 'ko', age: 23 };
// ts는 타입지정이 원래 자동으로 된다.
var 헬로우 = 'hello';
var hola = 123;
var wow = [1, 2, 3];
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
// 타입을 미리 정하기 애매할떄
// Union Type
var member = 123;
member = 'hello';
var members = [1, '2', 3];
var obj = { a: '123' };
// Any - TS를 해제 하고 완전히 JS처럼 쓰는 방법임
var 아무거나;
아무거나 = 123;
아무거나 = true;
// Unknown - Any랑 비슷하지만 조금더 안전함 
var 몰라;
몰라 = 123;
몰라 = false;
몰라 = {};
// let 변수 :string = 몰라; // 다른 변수에 들어가는걸 막아줌
// 몰라 - 1; // unknown은 number 타입이 아니라서 엄격하게 안됨
var age;
// string + 1 => 허용
// number + 1 => 허용
// string|number +1 => 안돼
// age + 1; // Union 타입에는 불가능
// 연습문제
var user = 'kim';
var age1 = undefined;
var married = false;
var 철수 = [user, age1, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
