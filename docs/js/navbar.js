// $('.header-hamburger').click(function() {
//     hamburger();
// }) 
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
    
};
function downloadLeave() {
    onmouseleave ="this.src='img/apple-download.svg'";
    onmouseleave ="this.src='img/apple-download.svg'";
};


})