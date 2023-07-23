// Literal Types

// 변수에 뭐가 들어올지 더 엄격하게 관리가능
// 자동완성 힌트 

// 이러면 해당 변수는 'ko'만 무조건 fix저장됨.
let 이름 :'ko'; 

let 접니다:'남자' | '개발자';
접니다 = '남자'

function 함수(a :'hello') :1 | 0{
  return 1
}
함수('hello')

function game(a:'가위'|'바위'|'보') :('가위'|'바위'|'보')[] {
  return ['보','가위']
}
game('가위')


var 자료 = {
  name : 'ko'
}

function 내함수(a: 'ko'){
}
// 안되는 이유는 'ko'라는 type 이 올 수 있다는 뜻임. 값이 아니라.
// 내함수(자료.name) 

// as const 
// -> 효과1. object value 값을 그대로 타입으로 지정해줌.
// -> 효과2. object 속성들 모두 readyonly 로 바꿔줌
var data = {
  name : 'ko'
} as const

내함수(data.name)