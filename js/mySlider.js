/*
    1.코드안에 상수값은 모두 전역변수 처리
    2.이벤트와 기능을 분리 (이벤트문+함수)
    3.이미 활성화된 버튼에 재이벤트 방지
*/
var btns = $(".btns li");
var panel = $(".panel");
var speed = 1000;

btns.on("click",function(e){
    e.preventDefault();
    activation(this);
});

function activation(el){
    console.log("you called me again!!!");
    var i = $(el).index();
    panel.animate({marginLeft: -100*i+"%"},speed);
    
    btns.removeClass("on");
    btns.eq(i).addClass("on");
}