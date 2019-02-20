/* animated background */
function getIEVersion() {
    var match = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
    return match ? parseInt(match[1]) : undefined;
}

$(window).on("load", function() {
    if (getIEVersion()) {
        console.log("IE");
        //do nothing because it's IE
    } else {
        console.log("Not IE");
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
