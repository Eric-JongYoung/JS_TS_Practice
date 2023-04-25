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


// 연습문제

var 사람 = {
  name : '손흥민',
  sayHi : function() {
    console.log('안녕 나는 '+ this.name);
  }
}
사람.sayHi();

var 자료 = {
  data : [1, 2, 3, 4, 5],
  전부더하기 : function(){
    var sum = 0;
    this.data.forEach(a => sum+=a);
    console.log(sum);
  }
}
자료.전부더하기();

document.getElementById('버튼').addEventListener('click', function(){
  setTimeout(()=>{ console.log(this.innerHTML) }, 1000); 
});