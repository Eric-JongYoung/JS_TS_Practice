// Destructuring

var arr = [2,3,4];

var [a,b,c] = [2,3,4];

var [d,e,f] = arr;

// default 값을 만들어 넣을 수 도 있다.
var [g,h,i = 10] = [1,2];

// 아무것도 안넣으면 undefined 로 됨다.
var [j,k] = [];

// var obj = { name : 'Ko', age : 22};
// var name = obj.name;
// var age = obj.age;

// 이름을 맞춰줘야함.
var { name, age } = { name : 'Ko', age : 22};

// default 값, 변수명 바꾸기
var { id : 아이디, pw = 123 } = { id : 'Eric' };


// 변수로 Object 만들기
var 이름 = 'Eric';
var 나이 = 22;

var obj = { 이름 , 나이 };

// Parameter 에 이용 할 수 있다.

var 오브젝트 = { name : 'Eric' , age : 30};

function 함수({ name , age } ){
  console.log(name);
  console.log(age);
}
함수(오브젝트);

function 함수2([ name, age] ){
  console.log(name);
  console.log(age);
}

함수2([1,2]);


// 연습문제

let 신체정보 = {
  body: {
    height: 190,
    weight: 70
  },
  size: ["상의 Large", "바지 30인치"],
};

let {
  body: {
    height, 
    weight
  },
  size: [ 상의, 하의 ]
} = 신체정보;