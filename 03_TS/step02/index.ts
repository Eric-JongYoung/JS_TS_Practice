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