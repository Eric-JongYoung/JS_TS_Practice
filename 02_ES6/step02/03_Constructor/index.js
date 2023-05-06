// Constructor

// this : Constructor 에서 새로 생성되는 object( instance )

function Student(){
  this.name = 'Ko'; // this는 새로성성되는 object를 뜻함.
  this.age = 15;
}

var student1 = new Student();
var student2 = new Student();


var student3 = {
  name : 'Park',
  age : 17,
  sayHi : function(){
    console.log('안녕하세요 ' + this.name + ' 입니다.');
  }
}
student3.sayHi();

// 같은 내용을 Constructor 로 만들기

function Student2(){
  this.name = 'Kim';
  this.age = 17;
  this.sayHi = function(){
    console.log('안녕하세요 ' + this.name + ' 입니다.');
  }
}
var student4 = new Student2();

student4.sayHi();

// Parameter 넣어서 Constructor 만들기
function Student3(name, age){
  this.name = name;
  this.age = age;
  this.sayHi = function(){
    console.log('안녕하세요 ' + this.name + ' 입니다.');
  }
}

var student5 = new Student3('Eric', 30);

student5.sayHi();

// 연습문제

function Product(상품명, 가격){
  this.name = 상품명;
  this.price = 가격;
  this.부가세 = function(){
    console.log(this.price * 0.1)
  }
}

var product1 = new Product('shirts', 50000);
var product2 = new Product('pants', 60000);


function 사람(이름, 나이){
  this.name = 이름;
  this.age = 나이;
  this.sayHi = function(){
    console.log('안녕 내 이름은 '+ this.name +'이고, 나이는 '+ this.age + '이야~');
  }
}
var 사람1 = new 사람('kim',20);

사람1.sayHi();