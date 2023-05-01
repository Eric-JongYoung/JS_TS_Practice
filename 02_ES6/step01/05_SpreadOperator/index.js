// Spread Operator 
// 항상 괄호 안에서만 사용

var array = ['hello', 'world'];
console.log(array)

// 1. Array에 붙이면 대괄호를 제거.
console.log(...array);


// 2. 문자를 펼쳐줌.
var word = 'hello';
console.log(word);
console.log(...word);

// spread operator 활용

var a = [1,2,3];
var b = [4,5];

var c = [...a, ...b];
var a_1 = [...a];

// Array 합쳐짐
console.log(c);

// Array 복사
console.log(a_1);



var d = [1,2,3];
// 이렇게 복사하면 약간 이상한 일이 발생함
var e = d;

// 독립적인 값을 같도록 복사하려면 -> Deep Copy
var f = [...d];

d[3] = 4;

console.log(d);
// e에는 직접 값을 수정한 적이 없는데 4가 추가됨. -> 등호로 복사하면 값을 공유함.
console.log(e);

console.log(f);


// Object 
var o1 = { a : 1, b : 2 };
var o2 = { ...o1 ,c : 3 };

// Deep Copy
var o3 = { ...o1 };

// 만약 copy 값이 중복이 일어난다면?
var o4 = { a: 2 , ...o1};
var o5 = { ...o1, a : 2};

console.log(o2);

// 만약 copy 값이 중복이 일어난다면? -> 가장 뒤에 있는 내용으로 적용
console.log(o4);
console.log(o5);


// 3. 함수에 파라미터 넣을때 사용

function 더하기 (a,b,c){
  console.log(a + b + c);
}

더하기(1,2,3);

var 더하기Array = [10, 20, 30];


더하기.apply(undefined, 더하기Array);
더하기(...더하기Array);


// apply
var person = {
  인사 : function(){
    console.log(this.name + '안녕')
  },
  name : 'hello'
}

person.인사();

var person2 = {
  name : 'eric'
}

person.인사.apply(person2, [1,2]);
person.인사.call(person2, 1, 2);