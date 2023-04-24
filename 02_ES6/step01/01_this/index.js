  
  
  // 'use strict';

  // this의 첫번째 뜻
  console.log(this) // window

  function 함수() {
    console.log(this); // window  / strict 모드에서는 undifined 
  }
  함수();

  var 오브젝트 = {
    data : 'ko',
    함수 : function() {
      console.log('안녕');
      // this의 두번째 뜻 - 오브젝트 내 함수안에서 쓰면 그 함수를 가지고 있는 오브젝트를 뜻함.
      console.log(this); // 나를 포함하고 있는 오브젝트 가 나옴
    }
  }
  오브젝트.함수();

  var 오브젝트2 = {
    data : {
      함수 : function () {
        console.log(this); // 여기에선 오브젝트2.data 가 나옴
      }
    }
  }
  오브젝트2.data.함수();


  var 오브젝트3 = {
    data : {
      함수 : () => {
        console.log(this); // 여기에선 window 가 나옴
      }
    }
  }
  오브젝트3.data.함수();

  // 오브젝트 안에 함수 넣을 때 신문법
  var 오브젝트4 = {
    data : {
      함수 () {
        console.log(this);
      }
    }
  }
  // 함수나 변수를 전역공간에 만들면 {window} 에 보관 된다.
  함수();
  window.함수();

// this의 3번째 의미 - constructor 
  function 기계()  {
    this.이름 = 'ko';
  }

  var 오브젝트5 = new 기계();


  // this의 4번째 뜻 - e.currentTarget
  document.getElementById('버튼').addEventListener('click', 
  function(e){
    //this; //e.curruentTarget;
    console.log(this);
    console.log(e.currentTarget);

    var 어레이 = [1, 2, 3];
    어레이.forEach(function(a){
      console.log(this); // window 로 나옴
    });
  })

  console.log('오브젝트6 테스트')

  var 오브젝트6 = {
    이름들 : ['김','이','박'],
    함수 : function(){
      console.log(this); // 오브젝트6 가 출력
      오브젝트6.이름들.forEach(function(){
        console.log(this); // window
      })
    }
  }
  오브젝트6.함수();

  console.log('오브젝트7 테스트')

  // arrow function 특징 : 내부의 this값을 변화시키지 않음. (외부 this 값 그대로 사용 가능)

  var 오브젝트7 = {
    이름들 : ['김','이','박'],
    함수 : function(){
      console.log(this); // 오브젝트7 가 출력
      오브젝트6.이름들.forEach(()=>{
        console.log(this); // 오브젝트7 가 출력
      })
    }
  }
  오브젝트7.함수();