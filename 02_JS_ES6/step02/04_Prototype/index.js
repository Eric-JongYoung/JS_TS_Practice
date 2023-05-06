// Prototype - JS에만 있음


// constructor 가 부모, 나온 객체가 자식
// prototype은 유전자 라고 생각.

function 기계(이름){
  this.name = 이름;
  this.age = 15;
  this.sayHi = function() {
    console.log('안녕하세요 ' + this.name + ' 입니다.');
  }
}

기계.prototype.gender = '남';

var 학생1 = new 기계('Ko');
var 학생2 = new 기계('Kim');

// prototype 동작원리
// 학생1 이 직접 name을 가지고 있는가? -> 있으면 출력

// 학생1 이 직접 gender를 가지고 있는가? -> 없을때 -> 그때 부모 유전자를 검사함. -> 있으면 출력

// 비슷한 예시로 toString 도 부모의 유전자중 하나 있어서 사용가능한것임.
console.log(학생1.toString());

var array = [1,2,3];
var array = new Array(1,2,3); // 원래는 이렇게 만들어진것임.

// 그러므로 arrary.sort();같은 것도 부모의 것이니 사용 가능한 것임!

Array.prototype;

// 1. prototype은 함수에만 몰래 생성된다.
// arr 같은 곳 엔 없지만, Array에는 있다


// 2. 내 부모 유전자(부모의 prototype)를 검사하고 싶다면 __proto__
console.log(학생1.__proto__)

// 3. __proto__ 를 이용해 부모님 강제 등록하기

var 부모 = { name : 'Ko'};
var 자식 = {};

자식.__proto__ = 부모; // 실제로 쓰지는 않음

console.log(자식.name);

// 연습문제

function Parent(){
  this.name = 'Kim';
}
var a = new Parent();

a.__proto__.name = 'Park';
console.log(a.name);