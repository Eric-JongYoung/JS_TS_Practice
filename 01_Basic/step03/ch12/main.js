
$('#send').on('click', function (e) {
  var 입력값 = document.getElementById('email').value;
  if (입력값 == '') {
    alert('아이디 입력안함');
    e.preventDefault();
  }
  if (/\S+@\S+\.\S+/.test(입력값)) {

  } else {
    alert('이메일형식 아님');
    e.preventDefault();
  }

});

// 비밀번호 정규식 - 비번에 영어 대문자가 적어도 1개 있는지 검사해봅시다.
$('form').on('submit', function (e) {

  var 비번 = document.getElementById('pw').value;
  if (/[A-Z]/.test(비번) == false) {
    alert('대문자없는데요')
  }

});

document.getElementById('email').addEventListener('input', function () {
  console.log('안녕');
})

$(window).on('scroll', function () {
  //진척도 바
  var 스크롤양 = document.querySelector('html').scrollTop;
  var 실제높이 = document.querySelector('html').scrollHeight;
  let now = 스크롤양 / 실제높이 * 100;


  $('.percent-line').css('width', now + '%');

});

// 스크롤바 관련

$(window).on('scroll', function () {
  if (window.scrollY > 100) {
    $('.navbar-brand').css('font-size', '20px');
  } else {
    $('.navbar-brand').css('font-size', '25px');
  }
})


// 다크모드
var cnt = 0;
$('.badge').on('click', function () {
  cnt++;
  // badge 클릭 횟수가 홀수면 내부 글자를 light 로 변경
  // badge 클릭 횟수가 짝수면 내부 글자를 dark 로 변경

  if (cnt % 2 == 1) {
    $('.badge').html('Light 🔄');
    $('#darkmode').removeClass();
  } else {
    $('.badge').html('Dark 🔄');
    $('#darkmode').addClass('dark');
  }
})
// 변수의 선언, 할당, 범위

// var 재선언 o , 재할당 o , 범위 function
var name = 'ko';

function 함수() {
  var 이름 = 'koo';
}

//모든 중괄호가 범위임
// let 재선언 x, 재할당 o, 범위 {}
let 옹 = 'wow';

// const 재선언 x, 재할당 x , 범위 {}
const 오우 = 'koo';


// 이용약관 다 읽으면 읽었다고 표시하기
// div의 스크롤바 내린양 + 눈에 보이는 div의 높이 = div 의 실제 높이
$('.lorem').on('scroll', function () {
  var 스크롤양 = document.querySelector('.lorem').scrollTop;
  var 실제높이 = document.querySelector('.lorem').scrollHeight;
  var 높이 = document.querySelector('.lorem').clientHeight;
  if (스크롤양 + 높이 == 실제높이) {
    alert('다읽었습니다!');
  }
});

//이미지
var 지금사진 = 1;
// 다음 버튼 누르면 
// 지금 보이는 사진이 1이면 2번 사진 보여주세요
$('.next').on('click', function () {
  if (지금사진 == 1) {
    $('.slide-container').css('transform', 'translateX(-100vw)');
    지금사진++;
  } else if (지금사진 == 2) {
    $('.slide-container').css('transform', 'translateX(-200vw)');
    지금사진++;
  }
});



$('.slide-1').on('click', function () {
  $('.slide-container').css('transform', 'translateX(0vw)');
});
$('.slide-2').on('click', function () {
  $('.slide-container').css('transform', 'translateX(-100vw)');
});
$('.slide-3').on('click', function () {
  $('.slide-container').css('transform', 'translateX(-200vw)');
});

// nav바
document.querySelector('.navbar-toggler').addEventListener('click', function () {
  document.querySelectorAll('.list-group')[0].classList.toggle('show');
});


//모달
//로그인 
$('#login').on('click', function () {
  $('.black-bg').addClass('show-modal');
});

$('#close').on('click', function () {
  $('.black-bg').removeClass('show-modal');
});

//모달창 뒤의 검은 배경 누르면 닫힘
// 이벤트 버블링 막기
document.querySelector('.black-bg').addEventListener('click',function(e){

  // e.target;//유저가 실제로 누른거
  // e.currentTarget; // 이벤트리스너 달린 곳 this
  // this;

  // e.preventDefault(); // 클릭 안한것 처럼
  // e.stopPropagation();

  let myfind = document.querySelector('.black-bg');  
  // 내가 실제로 누른거 == 까만배경
  if(e.target == myfind){
  myfind.classList.remove('show-modal');
  }
})