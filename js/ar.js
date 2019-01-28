$(window).on("load",function() {
var backOn = 0;
	if ($(".living-our-mission").is(":visible")) {
		$("body").css("background","url('../img/living-our-mission-back.png')");
		backOn = 1;
	}
	if ($(".enhancing-health").is(":visible")) {
		$("body").css("background","url('../img/enhancing-health-back.png')");
		backOn = 1;
	}
	if ($(".keeping-people-safe").is(":visible")) {
		$("body").css("background","url('../img/keeping-people-safe-back.png')");
		backOn = 1;
	}
	if ($(".thrive-and-prosper").is(":visible")) {
		$("body").css("background","url('../img/thrive-and-prosper-back.png')");
		backOn = 1;
	}
	if ($(".protecting-the-planet").is(":visible")) {
		$("body").css("background","url('../img/protecting-the-planet-back.png')");
		backOn = 1;
	}
	if (backOn == 0) {
		$("body").css("background","url('../img/background.png')");
	}
	
});

$(document).ready(function() {
    /* mouseenter actions - these will be consolidated into one function */
    $(".about").mouseenter(function() {
        $(".about .insideBox2").css("background","rgba(15, 57, 160, 1)");
        //$(".about .insideBox3 p").css("opacity","1");
        $(".about .insideBox3").css("background","rgba(50, 59, 69, .5)");
    });
    $(".health").mouseenter(function() {
        $(".health .insideBox2").css("background","rgba(49, 96, 148, 1)");
        //$(".health .insideBox3 p").css("opacity","1");
        $(".health .insideBox3").css("background","rgba(42, 49, 57, .5)");
    });
    $(".safe").mouseenter(function() {
        $(".safe .insideBox2").css("background","rgba(120, 124, 60, 1)");
        //$(".safe .insideBox3 p").css("opacity","1");
        $(".safe .insideBox3").css("background","rgba(63, 64, 56, .5)");
    });
    $(".thrive").mouseenter(function() {
        $(".thrive .insideBox2").css("background","rgba(99, 140, 28, 1)");
        //$(".thrive .insideBox3 p").css("opacity","1");
        $(".thrive .insideBox3").css("background","rgba(60, 68, 46, .5)");
    });
    $(".planet").mouseenter(function() {
        $(".planet .insideBox2").css("background","rgba(255, 198, 41, 1)");
        //$(".planet .insideBox3 p").css("opacity","1");
        $(".planet .insideBox3").css("background","rgba(88, 77, 49, .5)");
    });
    
    /* mouseleave actions - these will be consolidated into one function */
    $(".about").mouseleave(function() {
        $(".about .insideBox2").css("background","rgba(15, 57, 160, .8)");
        //$(".about .insideBox3 p").css("opacity",".9");
        $(".about .insideBox3").css("background","rgba(50, 59, 69, .8)");
    });
    $(".health").mouseleave(function() {
        $(".health .insideBox2").css("background","rgba(49, 96, 148, .8)");
        //$(".health .insideBox3 p").css("opacity",".9");
        $(".health .insideBox3").css("background","rgba(42, 49, 57, .8)");
    });
    $(".safe").mouseleave(function() {
        $(".safe .insideBox2").css("background","rgba(120, 124, 60, .8)");
        //$(".safe .insideBox3 p").css("opacity",".9");
        $(".safe .insideBox3").css("background","rgba(63, 64, 56, .8)");
    });
    $(".thrive").mouseleave(function() {
        $(".thrive .insideBox2").css("background","rgba(99, 140, 28, .8)");
        //$(".thrive .insideBox3 p").css("opacity",".9");
        $(".thrive .insideBox3").css("background","rgba(60, 68, 46, .8)");
    });
    $(".planet").mouseleave(function() {
        $(".planet .insideBox2").css("background","rgba(255, 198, 41, .8)");
        //$(".planet .insideBox3 p").css("opacity",".9");
        $(".planet .insideBox3").css("background","rgba(88, 77, 49, .8)");
    });

});