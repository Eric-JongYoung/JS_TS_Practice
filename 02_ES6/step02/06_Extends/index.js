// Extends

class 할아버지 {
  constructor(name){
    this.성 = 'Kim';
    this.이름 = name;
  }
  sayHi(){
    console.log('hola! 나는 할아버지');
  }
}

var 할아버지1 = new 할아버지('만덕');

class 아버지 extends 할아버지 {
  constructor(name){
    super(name); // extends 쓰려면 super 가 있어야함. super의 첫번째 기능8
    this.나이 = 50;
  }
  sayHi(){
    console.log('hola! 나는 아버지');
    super.sayHi(); // super의 두번째 기능
  }
}

var 아버지1 = new 아버지('만수');

// 파라미터가 2개 이상이면?

class 할아버지2 {
  constructor(name, name2){
    this.성 = 'Kim';
    this.이름 = name;
    this.이름2 = name2;
  }
}

class 아버지2 extends 할아버지2 {
  constructor(name, name2){
    super(name, name2);
    this.나이 = 45;
  }
}