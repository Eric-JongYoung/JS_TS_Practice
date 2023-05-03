// Reference Data Type

// primitive 
var 변수 = '123';

// reference data 
// Array, Object -> 변수에 값이 저장 안된다. reference 가 저장됨

var 어레이 = [1,2,3];

var 이름1 = '고';
var 이름2 = 이름1;
이름1 = '박';

var 이름3 = { name : "고"};
var 이름4 = 이름3;
이름3.name = '박';

var 이름5 = { name : "고"};
var 이름6 = { name : "고"};

if (이름5 == 이름6) {
  console.log('true');
} else {
  console.log('false');
}

var 이름7 = { name : "고"};

function 변경 (obj) {
  obj.name = 'Park';
}

변경(이름7);

var 이름8 = { name : "고"};

function 변경2 (obj) {
  obj= { name : 'Park' };
}
변경2(이름8); // 안바뀌네?
// 안바뀌는 이유는 
// 변경2( obj = 이름8); 이라는 의미여서 안바뀐거임.