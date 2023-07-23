// Type Aliases
// Type은 낙타표기법 으로 
// type은 재정의가 불가능하다.

type AnimalType = string | number | undefined;
let 동물 :AnimalType = 'Monkey';

// Object도 가능하다.
type MemberType = { name : string, age : number }
let user:MemberType = { name : 'ko', age : 20 }

const 출생지역 = 'Seoul';
// 출생지역 = 'Lodnon'; // const는 원래 불변

// const 변수는 등로로 재할당만 막는 역할임. const로 담은 Object 수정은 자유롭게 가능
const 출생지역임 = { region : 'seoul'}
출생지역임.region = 'london'


// readonly 쓰면 object 자료 수정도 막을 수 있음
type Girlfriend = {
  readonly name : string
}
const 여친:Girlfriend = {
  name : 'Nana'
}
// 타입 스크립트 에러는 에디터 & 터미널에서만 존재해서 보여주는거임 -> 작동은 해버림.
// 여친.name = '유라' // -> 안됨

// 물음표 - undefined
type Friend = {
  name? : string // 이건 string | undefined 라는 뜻임
}
const 친구:Friend = {
  name : 'eric'
}

type Name = string;
type Age = number;
// type 도 union type 으로 합치기 가능
type Person = Name | Age;

// obejct type 합치기
type PositionX = { x : number };
type PositionY = { y : number };

// & 연산자로 object 타입 extend 하기
type NewType = PositionX & PositionY;

let position :NewType = { x : 10 , y : 20 }


// 연습문제
type MyType = { color? : string, size : number , readonly position : number[]};

type User = { name : string, phone : number, email : string };

type UserType = { name : string, email : string , phone : string, adult : boolean}