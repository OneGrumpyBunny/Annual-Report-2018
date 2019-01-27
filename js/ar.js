$(document).ready(function() {
    /* mouseenter actions - these will be consolidated into one function */
    $(".about").mouseenter(function() {
        $(".about .insideBox2").css("background","rgba(36, 136, 176, 1)");
        //$(".about .insideBox3 p").css("opacity","1");
        $(".about .insideBox3").css("background","rgba(50, 59, 69, .5)");
    });
    $(".health").mouseenter(function() {
        $(".health .insideBox2").css("background","rgba(34, 106, 160, 1)");
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
        $(".about .insideBox2").css("background","rgba(36, 136, 176, .8)");
        //$(".about .insideBox3 p").css("opacity",".9");
        $(".about .insideBox3").css("background","rgba(50, 59, 69, .8)");
    });
    $(".health").mouseleave(function() {
        $(".health .insideBox2").css("background","rgba(34, 106, 160, .8)");
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