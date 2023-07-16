var user = {
  name : 'ko',
  // age : {value : 30}
};

// consele.log(user.age)
// console.log(user.age.value)

//왼쪽이 비어 있으면 오른쪽 안해줌.
// Optional Chaining
// ?. 왼쪽이 null, undefined면 점안찍어주고, undefined 남겨줌
// console.log(user?.age)
console.log(user.age?.value); // 에러 안남.

document.querySelector('#a')?.innerHTML


var hello;

// data가 늦게 오는 경우에 ??로 데이터 오기전까지 로딩중으로 보여줌
console.log(hello ?? '로딩중')