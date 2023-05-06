// Getter Setter

var 사람 = {
  name : 'Ko',
  age : 30,
  nextAge(){
    return this.age + 1;
  },
  setAge(나이){
    this.age = parseInt(나이); // set을 쓰면 이런식으로 안전장치를 만들 수 있다.
  }
}

console.log(사람.age +1);
console.log(사람.nextAge()); // 같은내용이지만, 함수를 만들어서 Obbject 를 다룸
// 1. Object 자료가 복잡할때 이득
// 2. Object 자료 수정시 편리

사람.setAge(20);

// ES5 부터 제공된 기능 - getter, setter 

var person ={
  name : 'ko',
  age : 30,
  set setAge(나이){ // 파라미터가 1개 꼭 있어야함.
    this.age = parseInt(나이);
  },
  get getAge(){
    return this.age; // return 이 꼭 있어야함.
  }
}

person.setAge = '20';
console.log(person.getAge);


class Human {
  constructor() {
    this.name = 'Park';
    this.age = 20;
  }
  get getAge(){
    return this.age;
  }
  set setAge(age){
    this.age = age;
  }
}

var 휴먼 = new Human();


// 연습문제

class Dog {
  constructor(타입, 칼라){
    this.type = 타입;
    this.color = 칼라;
  }
}
var 강아지1 = new Dog('똥개', 'black');

class Cat extends Dog {
  constructor(타입, 칼라, 나이){
    super(타입, 칼라);
    this.age = 나이;
  }
}

var 고양이1 = new Cat('동네고양이', 'white', 5);

class Dog2 {
  constructor(타입, 칼라){
    this.type = 타입;
    this.color = 칼라;
  }
  한살먹기(){
    if( this instanceof Cat2) {
    this.age++
    }
  }
}

class Cat2 extends Dog2 {
  constructor(타입, 칼라, 나이){
    super(타입, 칼라);
    this.age = 나이;
  }
}


class Unit {
  constructor(){
    this.체력 = 100;
    this.공격력 = 5;
  }
  get battlePoint(){
    return this.체력 + this.공격력;
  }
  set heal(a){
    this.체력 = this.체력 + a; 
  }
};

var 쎈애 = new Unit();

console.log(쎈애.battlePoint);
쎈애.heal = 50;


//

var data = {
  odd : [],
  even : [],
  setter함수 : function(...숫자들){
    숫자들.forEach((a)=>{
      if ( a % 2 == 1 ) {
        this.odd.push(a)  //홀수일때
      } else {
        this.even.push(a)  //짝수일때
      }
    });
  }
};

data.setter함수(1,2,3);

var data2 = {
  odd : [1,3],
  even : [2,4,6],
  get getter함수(){
    return [...this.odd, ...this.even ].sort()
  }
};

console.log(data2.getter함수);