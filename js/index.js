/* animated background */
function getIEVersion() {
    var match = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
    return match ? parseInt(match[1]) : undefined;
}
function quirks() {
        if (document.compatMode == "BackCompat") {
            document.getElementById('quirks').style.display = 'block';
        }
        if (getIEVersion() < 10) {
            document.getElementById('oldIE').style.display = 'block';
        }
    }
$(window).on("load", function() {
    quirks() // display message for IE and quirks mode

    if (getIEVersion()) {
        // IE do not show animated background
        
    } else {
        //not IE proceed with animated background
        if ($(window).width() > 450) { // only show on desktop
            var animation = lottie.loadAnimation({
            container: document.getElementById('animBack'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/2018/data.json'
            });
        
            var animation2 = lottie.loadAnimation({
            container: document.getElementById('animBack2'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/2018/data.json'
            
        });
        setTimeout(function() {$("#animBack2").css("top",$("#animBack").height());},800);
        }
    }
});
