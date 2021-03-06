/*  **************************************************** */
/*                WRITTEN BY CHELSEA GIECK               */
/*                   RTI International                   */
/*                  Released on 2/14/2019                */    
/*        Produced for the RTI 2018 Annual Report        */
/*             https://annualreport.rti.org/             */
/*  **************************************************** */


/*************** MENU ***************/
function pageJump (thisLink) {
  if ($('body').hasClass("active")) {
    // activate link
    
    if (thisLink.hasClass("aboutLink")) {
			window.location.href=relPath + "about-rti/";
    }
    if (thisLink.hasClass("healthLink")) {
			window.location.href=relPath + "enhancing-health-through-science-and-practice/";
		}
		if (thisLink.hasClass("safeLink")) {
			window.location.href=relPath + "keeping-people-safe/";
		}
		if (thisLink.hasClass("thriveLink")) {
			window.location.href=relPath + "helping-regions-thrive-and-prosper/";
		}
		if (thisLink.hasClass("planetLink")) {
			window.location.href=relPath + "protecting-the-planet/";
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
  
  $('header').click(function() {
    toggleMenu();    // header only opens menu
  });

  $('.nav-link').click(function() {
    
    if ($("body").hasClass("active")) {
      pageJump($(this));    // nav-link activates link/page jump
    } else  {
      // do nothing if body is not active
    }
    
  });
  
  
  

}

