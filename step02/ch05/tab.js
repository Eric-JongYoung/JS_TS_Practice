// 버튼0 누르면

//버튼 0에 orange 클래스명 추가, 모든 버튼 붙은 orange 제거
//박스 0 에 show 클래스명 부착
var 버튼 = $('.tab-button');
var 콘텐츠 = $('.tab-content');

// 버튼.eq(0).on('click',function(){
//     버튼.removeClass('orange');
//     버튼.eq(0).addClass('orange');
//     콘텐츠.removeClass('show');
//     콘텐츠.eq(0).addClass('show');
// });

// 버튼.eq(1).on('click', function(){
//     버튼.removeClass('orange');
//     버튼.eq(1).addClass('orange');
//     콘텐츠.removeClass('show');
//     콘텐츠.eq(1).addClass('show');
//   });
  
  
// 버튼.eq(2).on('click', function(){
//     버튼.removeClass('orange');
//     버튼.eq(2).addClass('orange');
//     콘텐츠.removeClass('show');
//     콘텐츠.eq(2).addClass('show');
//   });


  // 반복문

  for (var i = 0 ; i < 3 ; i++){
    console.log('안뇽');
  }

  // let 으로 반복문 해야함.
for(let i = 0 ; i < $('.tab-button').length ; i++){
    $('.tab-button').eq(i).on('click',function(){
        $('.tab-button').removeClass('orange');
        $('.tab-button').eq(i).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(i).addClass('show');
    });
}