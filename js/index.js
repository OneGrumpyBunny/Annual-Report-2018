/* animated background */
$(window).on("load", function() {
    if ($(window).width() > 450) { // only show on desktop
        var animation = lottie.loadAnimation({
        container: document.getElementById('animBack'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/dev/data.json'
        });
    }
    if ($(".landing-back").is(":visible")) { 
        var animation2 = lottie.loadAnimation({
        container: document.getElementById('animBack2'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/dev/data.json'
        });
        setTimeout(function() {$("#animBack2").css("top",$("#animBack").height());},800);
    }
});
