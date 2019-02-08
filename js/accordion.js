
	function toggleCRC (thisChevron,thisID,thisHead) {
    if($(thisChevron).hasClass("on")) {
        $(thisChevron).removeClass("on");
        $(thisChevron).css("transform","rotate(0deg)");
    } else {
      
      $(thisChevron).addClass("on");
        $(thisChevron).css("transform","rotate(-180deg)");
    }
		$("#"+thisID).slideToggle( 600, "swing", function() {
		});
	}
$(document).ready(function() {
  
  /* open accordian */
	$(".acc-head").click(function() {
    
    var expandThisID = $(this).data("section");
       
    var divPosition = $("#"+expandThisID).offset().top + 235;
    $('html, body').delay(800).animate({scrollTop: divPosition}, "slow");

    var thisHead = $('.acc-head[data-section=' + expandThisID +']');
    var chevron = $('i[data-section=' + expandThisID +']');
    // close open chevrons
    $(".crc-chevron").each (function() {
      if ($(this).hasClass("on")) {
      }
    })
    // close open accordions
    
     $(".acc-body").each(function() {
       if ($(this).data("section") != expandThisID && $(this).is(":visible")) {
          $("#"+$(this).data("section")).slideToggle( 600, "swing", function() {
          });
          $("i[data-section=" + $(this).data("section") + ']').removeClass("on");
          $("i[data-section=" + $(this).data("section") + ']').css("transform","rotate(0deg)");
        }
      });
    
    $("#"+expandThisID+" button").removeClass("crc-close-anim");
    
    toggleCRC(chevron,expandThisID,thisHead);   
    
	});

	/* X functionality */
	$('.close').click(function() { // fa-times class
		$(this).addClass("crc-close-anim");
		var collapseThisID = $(this).data("section");
    //console.log(collapseThisID);
		var chevron = $('i[data-section=' + collapseThisID +']');
		var thisHead = $('.acc-head[data-section=' + collapseThisID +']');
		toggleCRC(chevron,collapseThisID,thisHead)	
  });
  
});

/*$(window).scroll(function () {
  if ($(".acc-body").is(":visible")) {
      $(this).prev("div").addClass("makeSticky");
  }
});*/