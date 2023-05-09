// async

async function 더하기(){
  return 1+1;   
}

// 성공만 가능
더하기().then(function(결과){
  console.log('성공이에여 : '+ 결과);
})

// 강제로 실패를 보내고 싶으면
async function 더하기2(){
  return Promise.reject('실패임');
}

더하기2().then(function(결과){
  console.log(결과)
})


// await -> async 안에서만 가능

async function 더하기3(){
  var 프로미스 = new Promise(function(성공, 실패){
    var 힘든연산 = 1 + 1 ;
    // 성공();
    실패('await실패'); // await은 프로미스 실패시 에러나고 멈춘다.
  });

  // 프로미스.then(function(){
  //   console.log('성공했어요.');
  // })

  // 프로미스 해결까지 기다려주셈
  try {
    var 결과 = await 프로미스;
    console.log(결과);
  } catch {
    console.log('프로미스 연산이 안되었군여');
  }
}

더하기3();


async function 버튼확인기(){
  var 프로미스 = new Promise(function(성공, 실패){
    document.getElementById('button').addEventListener('click',
      function(){
        성공('버튼누르기 성공!');
      })
    });

  var 결과 = await 프로미스;
  console.log(결과);
}
버튼확인기();