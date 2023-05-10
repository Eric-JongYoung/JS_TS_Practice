// Symbol
// Object 자료형의 비밀스러운 key값

var 심볼 = Symbol('설명');


var weight = Symbol('내 시크릿 몸무게');
var height = Symbol('내 시크릿 키');

var person = { name : 'Eric', [height] : 175};

// 이렇게 하면 다 보임 -> 숨기고 싶다.
person.weight = 65;

person[weight] = 70;

// 반복문을 돌려서 Symbol은 안나옴
for(var key in person){
  console.log(person[key]);
}

// import 해온파일, 라이브러리 쓸때, 거기에 있던 object 자료를 추가하고싶을때 도 좋음
// -> 반복문해도 안뜨니까, 기존 코드 해칠 염려가 없음

// Symbol 특징 1.
// 설명이 같다고 해서 같은 Symbol 이 아님.

var a = Symbol('설명1');
var b = Symbol('설명1');
// -> a 랑 b 는 다름

// Symbol 특징2 
// 전역 변수 같은 전역 Symbol?

var c = Symbol.for('설명');
var d = Symbol.for('설명');
// -> c 랑 d 는 같음


// Symbol 특징3
// 기본 내장 Symbol들

var 어레이 = [2,3,4];
console.log(어레이[Symbol.iterator]);
console.log(어레이[Symbol.iterator]());