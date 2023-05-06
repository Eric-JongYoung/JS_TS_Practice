// Array 정렬 연습
var 어레이 = [7, 3, 2, 5, 2, 40];
어레이.sort();
console.log(어레이);

// Array 숫자 정렬 - 오름차순
어레이.sort(function(a,b){
  return a - b
});
console.log(어레이);

//알파벳 정렬
var 어레이2 = ['a','d','c'];
어레이2.sort();
console.log(어레이2);


var products = [
  { id: 0, price: 70000, title: 'Blossom Dress' },
  { id: 1, price: 50000, title: 'Springfield Shirt' },
  { id: 2, price: 60000, title: 'Black Monastery' }
];


// 가, 다 일경우 양수
// 다, 나 일경우 음수
// 가, 나 일경우 양수
var arr = ['가','다','나'];
arr.sort(function(a, b) {
  if( a < b ) {
    return 1;
  } else {
    return -1;
  } 
});
console.log(arr);

// 다나가 순 정렬
$('#sort1').click(function() {
  products.sort(function(a , b) {
    if(a.title < b.title) {
      return 1;
    } else  {
      return -1;
    }
  })
  
  $('.row').html('');
  products.forEach((a, i) => {
  var 템플릿 =
    `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${a.title}</h5>
      <p>가격 : ${a.price}</p>
    </div>`;
  $('.row').append(템플릿);
 })
});


// 가격순 정렬
$('#price').click(function(){
  products.sort(function(a,b){
    return a.price - b.price
  });
  
  $('.row').html('');

  products.forEach((a, i) => {
  var 템플릿 =
    `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${a.title}</h5>
      <p>가격 : ${a.price}</p>
    </div>`;
  $('.row').append(템플릿);
  })
})

// filter 함수
var 어레이3 = [7,3,4,2,50,70,100];

// filter 는 원본을 안건들여서 새로운 변수에 넣어야함
var 새어레이 = 어레이3.filter(function(a){
  return a < 5
});
console.log(새어레이);

// map 함수 - 동일하게 변하게 하도록
var 어레이4 = [7,3,4,2,50,70,100];

// filter 는 원본을 안건들여서 새로운 변수에 넣어야함
var 새어레이2 = 어레이4.map(function(a){
  return a * 5
});
console.log(새어레이2);

//6만원 이하 상품 보기
$('#filter').click(function() {
  var newProduct = products.filter(function(a){
    return a.price <= 60000;
  });
  
  //같은 filter arrow function
  var newProduct2 = products.filter((a) => a.price <= 60000);
  


  $('.row').html('');

  newProduct.forEach((a, i) => {
  var 템플릿 =
    `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${a.title}</h5>
      <p>가격 : ${a.price}</p>
    </div>`;
  $('.row').append(템플릿);
  })
});


products.forEach((a, i) => {
  var 템플릿 =
    `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${a.title}</h5>
      <p>가격 : ${a.price}</p>
    </div>`;
  $('.row').append(템플릿);
})

let cnt = 0;
//더보기
$('#more').click(function () {
  cnt++;
  if(cnt==1){
  $.get('https://codingapple1.github.io/js/more1.json')
    .done((data) => {
      data.forEach((a, i) => {
        var 템플릿 =
          `<div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${a.title}</h5>
            <p>가격 : ${a.price}</p>
            </div>`;
        $('.row').append(템플릿);
      })
    })
  }else if(cnt ==2){
    $.get('https://codingapple1.github.io/js/more2.json')
    .done((data) => {
      data.forEach((a, i) => {
        var 템플릿 =
          `<div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${a.title}</h5>
            <p>가격 : ${a.price}</p>
            </div>`;
        $('.row').append(템플릿);
      })
    })
  }
})