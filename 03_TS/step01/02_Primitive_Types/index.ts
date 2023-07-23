// primitive types

let 이름 :string = 'ko';
let 나이 :number = 23;
let 물음표 :null = null;

// array 자료에 타입 지정 가능
let 회원들 :string[] = ['kim', 'ko', 'park']


// Object 타입
let 회원 :{ name : string, age : number } = { name : 'ko', age : 23 };

// ts는 타입지정이 원래 자동으로 된다.
let 헬로우 = 'hello';
let hola = 123;
let wow = [1,2,3];

let project :{
  member : string[],
  days : number,
  started : boolean,
}
 = {
  member : ['kim', 'park'],
  days : 30,
  started : true,
}

// 타입을 미리 정하기 애매할떄

// Union Type
let member :(number | string | boolean) = 123;
member = 'hello';

let members :(number | string)[] = [1,'2',3];

let obj :{ a : string|number} = { a : '123'};

// Any - TS를 해제 하고 완전히 JS처럼 쓰는 방법임
let 아무거나 :any;
아무거나 = 123;
아무거나 = true;

// Unknown - Any랑 비슷하지만 조금더 안전함 
let 몰라 :unknown;
몰라 = 123;
몰라 = false;
몰라 = {};
// let 변수 :string = 몰라; // 다른 변수에 들어가는걸 막아줌
// 몰라 - 1; // unknown은 number 타입이 아니라서 엄격하게 안됨

let age : string|number;
// string + 1 => 허용
// number + 1 => 허용
// string|number +1 => 안돼
// age + 1; // Union 타입에는 불가능

// 연습문제

let user : string = 'kim';
let age1 : undefined | number = undefined;
let married : boolean = false; 
let 철수 : (string|number|undefined|boolean)[]= [user, age1, married]; 

let 학교 : {
  score : (number|boolean)[],
  teacher : string,
  friend : string | string[]
}
= {
  score : [100, 97, 84],
  teacher : 'Phil',
  friend : 'John'
}

학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]