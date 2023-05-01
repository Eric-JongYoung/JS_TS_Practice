// default parameter/arguemnts

// default로 값을 줄 수 있음
function add(a, b = 10){
  console.log(a + b);
}

function add2(a, b = a *2){
  console.log(a + b);
}

add(1);
add(1,2);

add2(1);
add2(1,2);

function 임시함수(){
  return 999;
}

function 함수add(a, b = 임시함수()){
  console.log(a + b);
}

함수add(1);


// Arguements

function 함수(a, b, c){
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}

함수(11,22,33);

function 함수2(a,b,c){
  for( var i = 0 ; i < arguments.length ; i++){
    console.log(arguments[i]);
  }
}
함수2(2,3,4);