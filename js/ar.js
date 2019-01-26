$(document).ready(function() {
    $(".navBox").mouseenter(function() {
        //console.log("mouseenter");
        $(this + " .insideBox2").css("background","rgba(48, 96, 149, 1)");
        $(this + " .insideBox3 p").css("opacity","1");
        $(this + " .insideBox3").css("background","rgba(50, 59, 69, .8)");
    });
    

});