// narrowing -1
var 제목 = document.querySelector('#title');
if (제목 != null) {
    제목.innerHTML = '반가워여';
}
// narrowing -2
var hola = document.querySelector('#hola');
if (hola instanceof Element) {
    hola.innerHTML = 'hola';
}
// narrowing -3
var hi = document.querySelector('#hi');
hi.innerHTML = 'hi';
// narrowing -4
var wow = document.querySelector('#wow');
if (wow === null || wow === void 0 ? void 0 : wow.innerHTML) {
    wow.innerHTML = 'wow';
}
// narrowing -5 : "strictNullChecks": false 로 한다.
var 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com';
}
var 버튼 = document.querySelector('#button');
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () {
    console.log('hi');
});
