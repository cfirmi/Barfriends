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



//Vibrate on Touch of button
window.navigator = window.navigator || {};
if (navigator.vibrate === undefined) {
    document.getElementById('v-unsupported').classList.remove('hidden');
    ['button-play-v-once', 'button-play-v-thrice', 'button-stop-v'].forEach(function(elementId) {
      document.getElementById(elementId).setAttribute('disabled', 'disabled');
    });
      } else {
          document.getElementById('button-play-v-one').addEventListener('click', function() {
            navigator.vibrate(1000);
            console.log('hello');
          });
          document.getElementById('button-play-v-second').addEventListener('click', function() {
            navigator.vibrate([1000]);
          });
          document.getElementById('button-stop-v').addEventListener('click', function() {
            navigator.vibrate(0);
          });

      }

});