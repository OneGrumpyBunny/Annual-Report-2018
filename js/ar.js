/*  **************************************************** */
/*                WRITTEN BY CHERYL VELEZ                */
/*                   RTI International                   */
/*                  Released on 2/14/2019                */    
/*        Produced for the RTI 2018 Annual Report        */
/*             https://annualreport.rti.org/             */
/*  **************************************************** */
function detectmob() { 
    if( navigator.userAgent.match(/Android/i)
        ) {
            $("#SMSLink").html('<a href="sms:?body=https://annualreport.rti.org/" target="_blank"><i class="far fa-comments"></i></a>');
        }

    if( navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        ){
            $("#SMSLink").html('<a href="sms:&body=https://annualreport.rti.org/" target="_blank"><i class="far fa-comments"></i></a>');
    }
}

$(window).on("load",function() {
    menu();
    $('.side-border').css('animation','sliderIn 1s 0s 1');

    detectmob();
});

$(window).on("resize",function() {
    $("#animBack2").css("top",$("#animBack").height());
});

var relPath = "/2018/"
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

});