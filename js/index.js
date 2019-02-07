/* animated background */
var animation = lottie.loadAnimation({
    container: document.getElementById('animBack'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data.json'
});
var animation2 = lottie.loadAnimation({
    container: document.getElementById('health-container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data.json'
})