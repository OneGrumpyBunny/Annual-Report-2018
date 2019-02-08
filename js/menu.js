/*************** MENU ***************/

function menu() {
  'use strict';
   //$('#pull').click(function() {
  $('header').click(function() {
    $('body').toggleClass('active');
    if($("body.active").is(":visible")){
      $('.side-line').addClass('on');
      $('.side-border').addClass('off');
     $(".fixed-header").css("opacity","0.2");
     $(".innerContainerMob").css("opacity","0.2");
    } else{
      $('.side-line').removeClass('on');
      $('.side-border').removeClass('off');
     $(".fixed-header").css("opacity","1");
     $(".innerContainerMob").css("opacity","1");
    }  
});
}

/*************** ONLOAD ***************/

$(window).on('load', function () {
  menu();
  $('.side-border').css('animation','sliderIn 1s 0s 1');
});


