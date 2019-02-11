

$(window).on("load",function() {
    $.urlParam = function (name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)')
            .exec(window.location.search);
    
        return (results !== null) ? results[1] || 0 : false;
    }
    
    console.log($.urlParam('ex')); 

    if($(".about-back").is(":visible") && $.urlParam('ex') == "y") {
        expandThisID = "section1";
        slideThis = "#section1Head";
        chevron = $('i[data-section=section1');
    
        /* toggle clicked accordian and slide it into position*/

        toggleACC(chevron,expandThisID);   
    }
    if ($("landing-back").is(":visible")) {
        $("#animBack2").css("top",$("#animBack").height());
    }
});

var relPath = "/dev/"
$(document).ready(function() {
		$(".about").click(function() {
			window.location.href=relPath + "about-rti/";
		});
		$(".health").click(function() {
			window.location.href=relPath + "enhancing-health-through-science-and-practice/";
		});
		$(".safe").click(function() {
			window.location.href=relPath + "keeping-people-safe/";
		});
		$(".thrive").click(function() {
			window.location.href=relPath + "helping-regions-thrive-and-prosper/";
		});
		$(".planet").click(function() {
			window.location.href=relPath + "protecting-the-planet/";
		});

    /* mouseenter actions - these will be consolidated into one function */
	
		$(".about").mouseenter(function() {
        $(".about .insideBox2").css("background","rgba(15, 57, 160, 1)");
        $(".about .insideBox3").css("background","rgba(15, 57, 160, .5)");
    });
    $(".health").mouseenter(function() {
        $(".health .insideBox2").css("background","rgba(49, 96, 148, 1)");
        $(".health .insideBox3").css("background","rgba(49, 96, 148, .5)");
    });
    $(".safe").mouseenter(function() {
        $(".safe .insideBox2").css("background","rgba(120, 124, 60, 1)");
        $(".safe .insideBox3").css("background","rgba(120, 124, 60, .5)");
    });
    $(".thrive").mouseenter(function() {
        $(".thrive .insideBox2").css("background","rgba(99, 140, 28, 1)");
        $(".thrive .insideBox3").css("background","rgba(99, 140, 28, .5)");
    });
    $(".planet").mouseenter(function() {
        $(".planet .insideBox2").css("background","rgba(255, 198, 41, 1)");
        $(".planet .insideBox3").css("background","rgba(255, 198, 41, .5)");
    });
    
    /* mouseleave actions - these will be consolidated into one function */
    $(".about").mouseleave(function() {
        $(".about .insideBox2").css("background","rgba(15, 57, 160, .9)");
        $(".about .insideBox3").css("background","rgba(15, 57, 160, .3)");
    });
    $(".health").mouseleave(function() {
        $(".health .insideBox2").css("background","rgba(49, 96, 148, .9)");
        $(".health .insideBox3").css("background","rgba(49, 96, 148, .3)");
    });
    $(".safe").mouseleave(function() {
        $(".safe .insideBox2").css("background","rgba(120, 124, 60, .9)");
        $(".safe .insideBox3").css("background","rgba(120, 124, 60, .3)");
    });
    $(".thrive").mouseleave(function() {
        $(".thrive .insideBox2").css("background","rgba(99, 140, 28, .9)");
        $(".thrive .insideBox3").css("background","rgba(99, 140, 28, .3)");
    });
    $(".planet").mouseleave(function() {
        $(".planet .insideBox2").css("background","rgba(255, 198, 41, .9)");
        $(".planet .insideBox3").css("background","rgba(255, 198, 41, .3)");
    });
    
    // readmore / readless links on mobile view
    $(".expand").click(function() {
        $(".expand").toggleClass("hide");
        setTimeout(function() {$(".collapse").toggleClass("hide");},500);
        $(".hideMore").slideToggle( 900, "swing", function() {
		});
    });
    $(".collapse").click(function() {
        setTimeout(function(){$(".expand").toggleClass("hide");},500);
        $(".collapse").toggleClass("hide");
        $(".hideMore").slideToggle( 900, "swing", function() {
		});
    });

    // sticky active headers on mobile view 
    /*$(window).scroll(function(){
        if ($(".makeSticky").scrollTop() = 170) {
            $('.makeSticky').css("position","fixed");
        }
    });*/
});