// Inheritance

// ES5
// Object.create(프로토타입);
var 부모 = {name : 'Ko', age : 50};

// prototype 을 부모로 해주세요.
var 자식 = Object.create(부모);

console.log(자식); // 공백

console.log(자식.name); // Ko 라고 나옴. 왜냐하면 자식게 없으면 부모의 prototype을 가져와서 나오므로

자식.age = 20;

var 손자 = Object.create(자식);

console.log(손자.age); // 20나옴
console.log(손자.name); // Ko 나옴 부모꺼 나오는거임


// ES6

class Parent {
  
  constructor(){
    this.name = 'Ko';

    // 함수 추가하고싶을때 1.
    this.sayHi = function(){
      console.log('hola');
    }
  }

  // 함수 추가하고싶을때 2 -> 여기에 쓰면 자식 Object 에 추가 안됨.(부모의 prototype에 있음)
  sayHi2(){
    console.log('hola2');
  }
}

var children = new Parent();

console.log(children.__proto__); //-> 부모 prototype 나옴
console.log(Object.getPrototypeOf(children)); // 같음

// Parameter 넣는 법
class Parameter{
  constructor(wow){
    this.name = wow;
  }
}

var baby = new Parameter('yes');
console.log(baby);