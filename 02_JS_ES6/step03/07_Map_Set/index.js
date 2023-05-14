// Map 

// 자료간의 연관성을 표현

var person = new Map();
person.set('name', 'Eric');
person.set('age', 20);

// Object 자료형은 자료 이름으로 글자만 가능하지만,
// Map 자료현은 다 가능
person.set([1,2,3], 'Numbers');

// 자료 꺼내기
person.get('age');

// 자료 삭제
person.delete('age');

// 자료 갯수 세기
person.size;

for( var key of person.keys()){
  console.log(key);
}

// Map 자료형에 직접 자료 집어 넣기

var human = new Map([
  ['name', 'Eric'],
  ['age', 22]
]);


// Set

var 출석부 = ['john', 'tom', 'andy', 'tom'];

// 중복자료 허용하지 않음

var 출석부2 = new Set(['john', 'tom', 'andy', 'tom']);

출석부2.add('sally');

출석부2.has('john');

출석부2.delete('andy');

출석부2.size;


// Set 자료형 <-> Array 자료형

var 출석부3 = ['john', 'tom', 'andy', 'tom'];

var 출석부4 = new Set(출석부3);

출석부5 = [...출석부4];

