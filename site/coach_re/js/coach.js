$(document).ready(function(){

  // 메뉴 내려오기
  $(".headerL>ul>li>a").on("mouseenter click", function(){
    //모든 하위메뉴를 안보이게 한 후
    $(".headerL>ul ul").stop().slideUp(200);
    //해당 주메뉴에 대한 하위메뉴만 보이게 한다.
    $(this).next().stop().slideDown();
  });

  $(".headerL>ul").on("mouseleave",function(){
    $(this).find("ul").stop().slideUp();
  });





});//////////all end
