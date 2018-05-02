$(".dance").hover(function () {
    $(".ask-title").css({'background-image': 'url("img/ASKMessages/messageDance.svg")', 'background-size': '1000px,1000px'});
    $("#features").css({'background': '#FF8700;'});
});
$(".message").hover(function () {
    $(".ask-title").css({'background-image': 'url("img/ASKMessages/messageMessage.svg")', 'background-size': '1000px,1000px'});
});
$(".drink").hover(function () {
    $(".ask-title").css({'background-image': 'url("img/ASKMessages/messageDrink.svg")', 'background-size': '1000px,1000px'});
});



$(document).ready(function(){
    var count = 0;
    var images = ["img/barfriendsSamples/screenshot-1-A.png","img/barfriendsSamples/screenshot-2-A.png","img/barfriendsSamples/screenshot-3-A.png", "img/barfriendsSamples/screenshot-4-A.png", "img/barfriendsSamples/screenshot-5-A.png", "img/barfriendsSamples/screenshot-6-A.png"];
    var image = $(".fader");


    setInterval(function() {
        image.fadeOut(150, function() {
            image.css("background-image", "url("+images[count++]+")");
            image.fadeIn(100);
        });
        if (count == images.length){
            count = 0;
        }
    },3000);




}) ;