// function & method Type Alias
// string 파라미터, number 리턴 이란 뜻임
var 함수 = function (a) {
    return 10;
};
var 회원정보 = {
    name: 'ko',
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () { }
};
회원정보.plusOne(1);
// callback 함수
function 함수1(a) {
    a();
}
function 함수2() {
}
함수1(함수2);
var cutZero = function (x) {
    var result = x.replace(/^0+/, "");
    return result;
};
function removeDash(x) {
    var result = x.replace(/-/g, "");
    return parseFloat(result);
}
function 만들함수(a, func1, func2) {
    var result = func1(a);
    var result2 = func2(result);
    console.log(result2);
}
만들함수('010-1111-2222', cutZero, removeDash); //1011112222 
