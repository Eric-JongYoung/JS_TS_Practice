// Template literals 

// backquote 문자열의 장점
// 1. 엔터키 가능
// 2. 중간에 변수 넣기 쉬움

var 변수 = '루피';

var 문자 = `안녕하세요 ${변수} 입니다.`;

var 템플릿 = `<div>${변수}</div>`;

console.log(문자);

function 함수(){
  return 10;
}


// tagged literal 
// 함수 뒤에 `` 붙여도 실행 가능.


/** 단어 순서를 변경하거나, 단어를 제거하거나, ${변수}위치를 옮기거나 */
console.log(함수`안녕하세요 루피 ${변수}`);

function 해체분석기(문자들, 변수들, 변수들2){
  console.log(문자들);
  console.log(변수들);
  console.log(변수들2);
}

// 1. 문자들을 Array 화 해줌
// 2. 파라미터2 ${변수}를 뜻함
// 3. 두번째 ${변수}를 뜻함
해체분석기`안녕하세요 ${변수} ${변수} 입니다.`;

function 해체분석기2(문자들, 변수들){
  console.log( 문자들[1] + 변수들 + 문자들[0]);
}

해체분석기2`안녕하세요 ${변수} 입니다.`;

// 연습문제

var pants = 20;
var socks = 100;

function 해체분석기3(문자들, 변수1, 변수2){
  console.log(문자들[1] + 변수1 + 문자들[0]+ 변수2);
}

해체분석기3`바지${pants} 양말${socks}`;

function 해체분석기4(문자들, 변수1, 변수2){
  if(변수1 == 0 ){
    console.log(`바지다팔렸어요.` + 변수2);
  }
}

