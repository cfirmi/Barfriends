$(".dance").hover(function () {
    $(".ask-title").css({'background-image': 'url("img/DANCE-white.svg")', 'background-size': '1000px,1000px'});
    $("#features").css({'background': '#FF8700;'});
});
$(".message").hover(function () {
    $(".ask-title").css({'background-image': 'url("img/anything.svg")', 'background-size': '1000px,1000px'});
});
$(".drink").hover(function () {
    $(".ask-title").css({'background-image': 'url("img/drink.svg")', 'background-size': '1000px,1000px'});
});



$(document).ready(function(){
    var count = 0;
    var images = ["img/iphone-x1.png","img/iphone-x2.png","img/iphone-x3.png", "img/iphone-x4.png", "img/iphone-x5.png"];
    var image = $(".fader");


    setInterval(function() {
        image.fadeOut(200, function() {
            image.css("background-image", "url("+images[count++]+")");
            image.fadeIn(100);
        });
        if (count == images.length){
            count = 0;
        }
    },2000);



}) ;