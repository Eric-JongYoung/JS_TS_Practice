// loop

var 오브젝트 = { name : 'Ko' , age : 30 };

// 그냥 반복문
for (var i = 0 ; i < 3 ; i ++){

}

// forEach 반복문 - Array 전용
[1,2,3].forEach(a => {
  console.log(a);
});


console.log(Object.getOwnPropertyDescriptor(오브젝트, 'name'));

// for in 반복문 - Object 전용
// enumerable 한것만 반복해줌

for (var key in 오브젝트) {
  console.log(key+ " : " + 오브젝트[key]);
}
// 부모의 progotype 도 반복해줌

class 부모 {

}
부모.prototype.name = 'Eric';

var 오브젝트2 = new 부모();
for (var key in 오브젝트2) {
  // 자식이 직접 키를 가지고 있을때만 반복문 돌도록함.
  if(오브젝트2.hasOwnProperty(key)){
    console.log(key+ " : " + 오브젝트2[key]);
  }
}


// for of 반복문 - iterable 전용
// Array, 문자, arguments, NodeList, Map, Set

var 어레이 = [2,3,4,5,6,7];

for (var 자료 of 어레이) {
  console.log(자료);
}

for (var 자료 of 'afsakls') {
  console.log(자료);
}

console.log(어레이[Symbol.iterator]());


// 연습문제

//구구단
let 데이터 = [1,2,3,4,5,6,7,8,9]
for(let i of 데이터){
  for(let j of 데이터){
    console.log(`${i} x ${j} = ${i*j}`)
  }
} 


//key값 마지막 문자에 한자릿수 숫자가 섞여있으면 그걸 다 제거하고 싶습니다.

var products = [
  {
    name1 : 'chair',
    price1 : 7000,
  },
  {
    name2 : 'sofa',
    price : 5000,
  },
  {
    name1 : 'desk',
    price3 : 9000,
  },
]; 

let newValue;
let newKey;

for (let item of products) {
  for (let key in item) {
     //마지막글자를 숫자로변환했을 때 NaN이 안나오면 (숫자면)
     if (isNaN(parseInt(key.slice(-1))) == false ) {
       newValue = item[key];
       newKey = key.slice(0, -1); 
       item[newKey] = newValue;
       delete item[key]; 
     }
  }
}

console.log(products)