// 버튼0 누르면

//버튼 0에 orange 클래스명 추가, 모든 버튼 붙은 orange 제거
//박스 0 에 show 클래스명 부착
var 버튼 = $('.tab-button');
var 콘텐츠 = $('.tab-content');


  // 반복문

  // for (var i = 0 ; i < 3 ; i++){
  //   console.log('안뇽');
  // }



// 이벤트 버블링을 이용해서 램 절약 할 수 있다.
$('.list').click(function(e){
  //지금 누른게 버튼 0 이면 버튼0에 orange 0

  // 숨겨놓은 데이터를 넣어서 해결
  openTab(e.target.dataset.id);  
})



function openTab(숫자){
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(숫자).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(숫자).addClass('show');
}

// Array 저장 방식
var car = ['소나타',50000,'white'];
car[0] ='아반떼';

//Object 저장 방식 -> 이름 꼭 붙여야함
// key - value 형태로 저장가능한게 장점
// client-side Rendering 사용 방법임!!!
// 데이터 바인딩!
var car2 = {name : '소나타', price : [50000, 3000, 4000]}
car2.name = '아반떼';

document.querySelector('.car-title').innerHTML = car2.name;
document.querySelector('.car-price').innerHTML = car2.price[0];

// select
// 유저가 선택한게 셔츠면 .form-hide 제거
$('.form-select').eq(0).on('input', function () {
  // var value = $('.form-select').eq(0).val();
  var value = this.value;
  if (value == '셔츠') {
    $('.form-select').eq(1).removeClass('form-hide');
  } else {
    $('.form-select').eq(1).addClass('form-hide');
  }
})