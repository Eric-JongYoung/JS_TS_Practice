let 이름 :string = 'kim';
let 이름들 :string[] = ['kim', 'lee', 'park'];
let 학생 :{이름 : string, 나이? : number} = {이름:'kim', 나이:20}; // 나이? : number 는 옵셔널 프로퍼티

let 알수없는이름 :string | number = 123; // 유니언 타입

type MyType = string | number; // 타입 별칭

let 내가만든타입변수 :MyType = 123;


// 함수에도 타입을 지정할 수 있다.
function 함수(x :number, y :number) :number {
    return x + y;
}
// 함수('sdf', 123); // 에러 발생

type Member = [number, boolean]; // 튜플 타입
let jonh: Member = [123, true];


// 글자로된 모든 object속성의 타입을 string으로 지정
type Member2 = {
  [key :string] : string,
}

let tom :Member2 = {name:'kim'};


// class 타입 지정
class User {
  name :string;
  constructor(name :string) {
    this.name = name;
  }
}