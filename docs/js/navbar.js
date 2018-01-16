
$(document).ready(function() { 

function hamburger() {
    var HC = document.getElementById("headerContainer");
    var HH = document.getElementById("headerHamburger");
    var x = document.getElementsByClassName("header-hamburgerX")

    toggleButton.on('click', function() {
        HH.classList.toggle('header-hamburgerX');
    })
}

function downloadOn() {
    onmouseover="this.src='../img/apple-download-selected.svg'";
    onmouseover="this.src='img/apple-download-selected.svg'";
    
}
function downloadLeave() {
    onmouseleave ="this.src='img/apple-download.svg'";
    onmouseleave ="this.src='img/apple-download.svg'";
}

var messageIcon = document.getElementsByClassName('fa-comments');
var contactBoxClosed = document.getElementsByClassName('.contactBox-closed');

$('.fa-comments').click(function() {
    $('.contactBox-closed').toggleClass('contactBox-opened')
    $('.contactBox-closed').removeClass('contactBox-closed')
    });
$('.fa-times-circle').click(function() {
    $('.contactBox-opened').toggleClass('contactBox-closed')
    $('.contactBox-opened').removeClass('contactBox-opened')
    });
});


