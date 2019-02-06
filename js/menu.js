/*************** MENU ***************/

function menu() {
  'use strict';
   $('#pull').click(function() {
    $('body').toggleClass('active');
    if($("body.active").is(":visible")){
      $('.side-line').addClass('on');
      $('.side-border').addClass('off');
    } else{
      $('.side-line').removeClass('on');
      $('.side-border').removeClass('off');
    }  
});
}

/*************** ONLOAD ***************/

$(window).on('load', function () {
  menu();
  $('.side-border').css('animation','sliderIn 1s 0s 1');
});


