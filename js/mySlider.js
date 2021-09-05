/*
    addClass() : 클래스명 추가
    removeClass() : 클래스명 제거
    toggleClass() : 클래스가 없으면 추가, 있으면 제거
    hasClass() : 클래스명이 있으면 true반환, 없으면 false반환

    1.코드안에 상수값은 모두 전역변수 처리
    2.이벤트와 기능을 분리 (이벤트문+함수)
    3.이미 활성화된 버튼에 재이벤트 방지
    4.모션중 재이벤트 방지 (다음주)
*/
var btns = $(".btns li");
var panel = $(".panel");
var speed = 1000;

btns.on("click",function(e){
    e.preventDefault();

    var isOn = $(this).hasClass("on");   
    if(isOn) return;    
    activation(this);
});

function activation(el){  
    console.log("called!!!");
    var i = $(el).index();
    panel.animate({marginLeft: -100*i+"%"},speed);
    
    btns.removeClass("on");
    btns.eq(i).addClass("on");
}