// default parameter/arguemnts

// default로 값을 줄 수 있음
function add(a, b = 10){
  console.log(a + b);
}

function add2(a, b = a *2){
  console.log(a + b);
}

add(1);
add(1,2);

add2(1);
add2(1,2);

function 임시함수(){
  return 999;
}

function 함수add(a, b = 임시함수()){
  console.log(a + b);
}

함수add(1);


// Arguements

function 함수(a, b, c){
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}

함수(11,22,33);

function 함수2(a,b,c){
  for( var i = 0 ; i < arguments.length ; i++){
    console.log(arguments[i]);
  }
}
함수2(2,3,4);

// rest 는 항상 마지막에 써야함.
// rest 는 한번만 가능

function 함수3(...rest){
  console.log(rest)
}

함수3(1,2,3,4,5,6,7,8,9)

function 함수4(a,b, ...rest){
  console.log(rest)
}

함수4(1,2,3,4,5,6,7,8,9)

function 함수5(...rest){
  for(var i = 0 ; i < rest.length ; i++){
    console.log(rest[i]);
  }
}

함수5(1,2,3,4,564,4423,14234,12,312,3123,12);


// 연습문제

var ㄱ = [1,2,3];
var ㄴ = '김밥';
var ㄷ = [...ㄴ,...ㄱ];
console.log(ㄷ);

var ㄹ = ['you','are'];
var ㅁ = function(a, b){
  console.log( [[...a], ...[...b]][1]);
}

ㅁ(ㄱ,ㄹ); // you

function 함수6(a = 5, b = a * 2 ){
  console.log(a + b);
  return 10
}
함수6(3);


function 함수7(a = 5, b = a * 2 ){
  console.log(a + b);
}
함수7(undefined, undefined);


function 어레이(...rest){
  return rest;
}

var newArray = 어레이(1,2,3,4,5,6,7,8);
console.log(newArray);


var numbers = [2,3,4,5,6,1,3,2,5,5,4,6,7];
console.log( Math.max(...numbers) );


function 정렬(글자){
  console.log([...글자].sort());
  console.log([...글자].sort().join());
}

정렬('bear');

function 글자세기(글자){
  var 결과 = {};
  [...글자].forEach(function(a){
    if( 결과[a] > 0){
      결과[a]++;
    }else{
      결과[a] = 1;
    }
  });
  console.log(결과);
}

글자세기('aacbbb');