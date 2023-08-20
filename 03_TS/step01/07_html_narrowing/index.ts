
// narrowing -1
let 제목 = document.querySelector('#title');
if (제목 != null) {
  제목.innerHTML = '반가워여'
}

// narrowing -2
let hola = document.querySelector('#hola');
if (hola instanceof Element) {
  hola.innerHTML = 'hola'
}
// narrowing -3
let hi = document.querySelector('#hi') as Element;
hi.innerHTML = 'hi'
// narrowing -4
let wow = document.querySelector('#wow');
if(wow?.innerHTML) {
  wow.innerHTML = 'wow'
}
// narrowing -5 : "strictNullChecks": false 로 한다.



let 링크 = document.querySelector('.link');
if(링크 instanceof HTMLAnchorElement) {
  링크.href = 'https://kakao.com'
}

let 버튼 = document.querySelector('#button')
버튼?.addEventListener('click', function(){
  console.log('hi')
})
