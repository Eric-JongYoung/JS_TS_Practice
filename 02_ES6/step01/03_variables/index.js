
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

// Hoisting
// 변수나 함수의 선언부분을 변수의 범위 맨 위로 강제로 끌고가서 가장 먼저 해석합니다.
var 몰라;

몰라 = '몰라';



// 변수 여러개 편리하게 만들기
let hello = 20, wow = 'wow', nice;

// 전역변수 : 모든곳에서 쓸 수 있는 변수

var 전역변수 = 20;

window.이것도전역변수 = 'ko';

function hola() {
  console.log(전역변수);

  //지역변수
  var 지역변수 = 11; 
}


let a = 1;
var 함수 = function() {
  a = 2;
}
console.log(a); // 1

// 이럴때는 가장 가까운 범위 값으로 변함
let b = 1;
var c = 2;
window.b = 3;
window.c = 4;

console.log(b + c); // 5

// var i =  5 상태에서 돌기때문에 5만 나오는거임
// for (var i = 0; i < 5; i++) { 
//   setTimeout(function() { console.log(i); }, i*1000 ); 
// }

for (let i = 1; i < 6; i++) { 
  setTimeout(function() { console.log(i); }, i*1000 ); 
}

//모달
var 버튼들 = document.querySelectorAll('button');
var 모달창들 = document.querySelectorAll('div');


// var i 로 되어있으면, var i = 3 이 된 상태로 유지되므로 채워지지가 않음.
for (let i = 0; i < 3; i++){
  버튼들[i].addEventListener('click', function(){
    모달창들[i].style.display = 'block';
  });

}