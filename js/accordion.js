
  function slideACC () {
    if ($("section").parent().attr("class") == "innerContainerMob thriveMob") {
       divPosition = 180;  // thriveMob header is longer
    } else {
        divPosition = 150;
    }
    $('html, body').animate({
      scrollTop: $(slideThis).offset().top - divPosition
    }, 1000);
  }
  
  // close open accordions

  function closeACC() {
    $(".acc-body").each(function() {
      if ($(this).data("section") != expandThisID && $(this).is(":visible")) {
         $("#"+$(this).data("section")).slideToggle( 600, "swing", function() {
         });
         $("i[data-section=" + $(this).data("section") + ']').removeClass("on");
         $("i[data-section=" + $(this).data("section") + ']').css("transform","rotate(0deg)");
       }
     });
   
   $("#"+expandThisID+" button").removeClass("crc-close-anim");
  }

  // toggle clicked accordion
	function toggleACC (thisChevron,thisID) {
    if($(thisChevron).hasClass("on")) {
        $(thisChevron).removeClass("on");
        $(thisChevron).css("transform","rotate(0deg)");
    } else {
      
      $(thisChevron).addClass("on");
        $(thisChevron).css("transform","rotate(-180deg)");
    }
		$("#"+thisID).slideToggle( 600, "swing", function() {
      
    /* slide active accordion header up to position */

    setTimeout(slideACC(),800);
		});
  }

var expandThisID = "";
var slideThis = "";
var chevron = "";
var divPosition = 0;

$(document).ready(function() {
  
	$(".acc-head").click(function() {
    
    expandThisID = $(this).data("section");
    slideThis = "#"+expandThisID+"Head";
    //var thisHead = $('.acc-head[data-section=' + expandThisID +']');
    chevron = $('i[data-section=' + expandThisID +']');
    
    // close open accordions
    
    closeACC()

    /* toggle clicked accordian and slide it into position*/

    toggleACC(chevron,expandThisID);   

    
	});

	/* X functionality */
	$('.close').click(function() { // fa-times class
		$(this).addClass("crc-close-anim");
		var collapseThisID = $(this).data("section");
    //console.log(collapseThisID);
		var chevron = $('i[data-section=' + collapseThisID +']');
		var thisHead = $('.acc-head[data-section=' + collapseThisID +']');
		toggleACC(chevron,collapseThisID,thisHead)	
  });
  
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $(".fixed-header").css("background","rgb(24, 37, 53)");
  } else {
    $(".fixed-header").css("background","transparent");
  }
});