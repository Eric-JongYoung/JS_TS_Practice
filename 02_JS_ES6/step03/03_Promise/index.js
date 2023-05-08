// Promise

var 프로미스 = new Promise(function(성공, 실패){
  성공();
  //실패();
}); // 성공/실패 판정 기계

프로미스.then(function(){
  // 프로미스가 성공일 경우 실항할 코드

}).catch(function(){
  // 실패했을겨우 실행될 코드

}).finally(function(){
  // 다 끝나고나서 실행
})

var 연습 = new Promise(function(성공, 실패){
  var 어려운연산 = 1 + 1;  
  setTimeout(function(){
    성공(어려운연산);
  }, 1000);
  //실패();
});

연습.then(function(파라미터){
  console.log('성공했어여! : '+파라미터);
}).catch(function(){
  console.log('실패했어여!');
})


// Promise의 3가지 상태 
//pending - 성공실패 작성안하면 , resolved - 성공하면 , rejected - 실패하면

// 프로미스는 동기를 비동기적 처리가 가능하게 바꿔주는 마법의 문법이 아님
// 그냥 이쁘게 쓰려고 쓴느거

// 예시

// jquery의 ajax

// $.ajax().done(function(){}).fail();

// fetch().then().catch();




// 연습문제

// var 이미지로딩 = new Promise(function(성공, 실패){
//   var img = document.querySelector('#test');
//   img.addEventListener('load', function(){
//     성공();
//   });
//   img.addEventListener('error', function(){
//     실패();
//   });
// });

// 이미지로딩.then(function(){
//   console.log('로딩성공');
// }).catch(function(){
//   console.log('로딩실패');
// })