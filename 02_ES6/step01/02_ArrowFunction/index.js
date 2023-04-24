// Arrow Function
var 함수 = (a) => {
  return a + 10;
}
함수(1);

// parameter 하나이면 소괄호 생략가능
var 함수2 = a => a * 10;

함수2(10);

[1,2,3].forEach(function(a){
  console.log(a);
});

[1,2,3].forEach( a => console.log(a));

document.getElementById('버튼').addEventListener('click', (e) => {
  console.log(this); // window 로 나옴
  console.log(e.currentTarget);
});

var 오브젝트 = {
  함수 : () => {
    console.log(this); // window
  }
}
오브젝트.함수();