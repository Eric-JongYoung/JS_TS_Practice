// function & method Type Alias

type FunctionType = (a :string) => number
// string 파라미터, number 리턴 이란 뜻임

let 함수 :FunctionType = function (a){
  return 10
}

// object 안의 함수 타입지정은 어떻게?

type Member = {
  name : string,
  plusOne : ( x:number) => number,
  changeName : ( x:number) => void
}

let 회원정보:Member = {
  name : 'ko',
  plusOne(a){
    return a + 1
  },
  changeName : () => {}
}

회원정보.plusOne(1)


// callback 함수
function 함수1(a){
  a()
}
function 함수2(){
  
}
함수1(함수2)

// 연습문제
type CutType = (x :string) => string

let cutZero :CutType = function (x){
    let result = x.replace(/^0+/, "");
    return result
}
function removeDash(x :string) :number{
    let result = x.replace(/-/g, "");
    return parseFloat(result)
}

// 함수에 함수를 집어넣을때
type 함수타입1 = (a :string) => string;
type 함수타입2 = (a :string) => number;

function 만들함수(a :string, func1 :함수타입1, func2 :함수타입2){
  let result = func1(a);
  let result2 = func2(result);
  console.log(result2)
}
만들함수('010-1111-2222', cutZero, removeDash)  //1011112222 