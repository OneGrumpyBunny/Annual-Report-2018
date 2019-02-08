/*************** MENU ***************/
function pageJump (thisLink) {
  if ($('body').hasClass("active")) {
    // activate link
    
    console.log("activating link 2");
    if (thisLink.hasClass("aboutLink")) {
      console.log("activating nav link - about");
			window.location.href=relPath + "/about-rti/";
    }
    if (thisLink.hasClass("healthLink")) {
      console.log("activating nav link - health");
			window.location.href=relPath + "/enhancing-health-through-science-and-practice/";
		}
		if (thisLink.hasClass("safeLink")) {
      console.log("activating nav link - safe");
			window.location.href=relPath + "/keeping-people-safe/";
		}
		if (thisLink.hasClass("thriveLink")) {
      console.log("activating nav link - thrive");
			window.location.href=relPath + "/helping-regions-thrive-and-prosper/";
		}
		if (thisLink.hasClass("planetLink")) {
      console.log("activating nav link - planet");
			window.location.href=relPath + "/protecting-the-planet/";
		}
  } else {
    // do nothing
  }
}

function toggleMenu () {
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
}

function menu() {
  'use strict';
  /*$('#pull').click(function() {
    console.log("PULL!");
    toggleMenu();  // pull opens and closes
  });*/
  
  
  $('header').click(function() {
    console.log("HEADER!");
    toggleMenu();    // header only opens menu
  });

  $('.nav-link').click(function() {
    console.log("NAV-LINK!");
    if ($("body").hasClass("active")) {
      pageJump($(this));    // nav-link activates link/page jump
    } else  {
      // do nothing if body is not active
    }
    
  });
  
  
  

}

/*************** ONLOAD ***************/

$(window).on('load', function () {
  menu();
  $('.side-border').css('animation','sliderIn 1s 0s 1');
});


