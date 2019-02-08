/* animated background */
$(window).on("load", function() {
    if ($(window).width() > 414) { // only show on desktop
        var animation = lottie.loadAnimation({
        container: document.getElementById('animBack'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/dev/data.json'
        });
    }
});
