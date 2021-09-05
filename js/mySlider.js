$(".btns li").on("click",function(e){
    e.preventDefault();
    var i = $(this).index();
    $(".panel").animate({marginLeft: -100*i+"%"},1000);
    
    $(".btns li").removeClass("on");
    $(".btns li").eq(i).addClass("on");
});

/*
1.css에서 #slider프레임을 제외한 안쪽의 크기를 퍼센트로 설정
2.js에서 위의 모션 구문을 퍼센트로 변경
*/

/*
    0 ==> 0% (-100*0)+"%"
    1 ==> -100% (-100*1)+"%"
    2 ==> -200% (-100*2)+"%"
    3 ==> -300% (-100*3)+"%"
    4 ==> -400% (-100*4)+"%"
*/







