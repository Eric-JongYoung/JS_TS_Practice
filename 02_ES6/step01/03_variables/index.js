
// variables
// 선언, 할당, 범위

var 이름 = 'ko'; // 재선언 o 재할당 o 범위 function 안에서만 존재함
var 이름 = 'wow';

function 함수 ()  {
  var 이름이에요 = 'ko';
  이름이에요;
}


let 나이 = 32; // 재선언 x 재할당 o 범위 {}
나이 = 29;

if(true){
  let 나이에요 = 22;
}


const 외모 = 'good'; // 재선언 x 재할당 x 범위 {}

const 사람 = { 이름 : 'ko'};
사람.이름 = 'wow'; // object 내부의 값을 변경 가능 ! 이건 재할당이 아님!


//수정불가능한 Object 를 만들고 싶을때
const 인간 = { name : 'hi'};
Object.freeze(인간);
인간.name = 'wow';
