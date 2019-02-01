$(window).on("load",function() {
/*var backOn = 0;
	if ($(".living-our-mission").is(":visible")) {
		$(".container").addClass("living-back");
		backOn = 1;
	}
	if ($(".enhancing-health").is(":visible")) {
        $(".container").addClass("enhancing-back");
		backOn = 1;
	}
	if ($(".keeping-people-safe").is(":visible")) {
		$(".container").addClass("safe-back");
		backOn = 1;
	}
	if ($(".thrive-and-prosper").is(":visible")) {
		$(".container").addClass("thrive-back");
		backOn = 1;
	}
	if ($(".protecting-the-planet").is(":visible")) {
		$(".container").addClass("planet-back");
		backOn = 1;
	}
	if (backOn == 0) {
		$(".container").addClass("home-back");
    }*/
    /*$(".landingPage").addClass('landingPageAnim');*/
    
    /*$(".navBox").addClass("navBoxAnim");*/
});

var relPath = "/dev"
$(document).ready(function() {
		$(".about").click(function() {
			window.location.href=relPath + "/living-our-mission/";
		});
		$(".health").click(function() {
			window.location.href=relPath + "/enhancing-health-through-science-and-practice/";
		});
		$(".safe").click(function() {
			window.location.href=relPath + "/keeping-people-safe/";
		});
		$(".thrive").click(function() {
			window.location.href=relPath + "/helping-regions-thrive-and-prosper/";
		});
		$(".planet").click(function() {
			window.location.href=relPath + "/protecting-the-planet/";
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

});