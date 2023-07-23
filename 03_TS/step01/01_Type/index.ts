
let 이름 :string = 'ko';

// Array 타입도 지정해줘야함
let 이름들 :string[] =['ko', 'kim']


// ?는 name 속성은 옵션이에염 이라고 하는거임
let 사람 :{ name? : string } = { name : 'ko'}

// Union Type
let 이름또는나이 :string | number = 'kim';
이름또는나이 = 20; 

// 타입은 변수에 담아쓸 수 있음.
type Name = string | number;

let 이름임 :Name = 'wowman'; 

// 함수에 타입지정 가능
// 파라미터도 number, reuturn도 number인 함수
function 함수(x : number) :number {
  return x * 2 ;
}

// tuple 타입
// 하단의 예시는 무조건 첫째는 number, 둘째는 boolean 들어가야한다는 예시임
type Member = [number, boolean];
let john:Member = [123, true];

// object 에 타입지정해야할 속성이 너무 많으면

type User = {
  name : string
}
let bob:User = { name : 'bob'};


// 글자로된 모든 object 속성의 타입은 :string 이라는 뜻
type Person = {
  [key : string] : string
}
let eric:Person = { name : 'eric'};

class Human {
  name :string;
  constructor(name : string){
    this.name = name;
  }
}