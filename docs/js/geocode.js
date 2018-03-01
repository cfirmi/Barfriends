
// Dark theme for Maps
const mapStyle = [
    {
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "stylers": [
            {
                "color": "#131314"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "color": "#131313"
            },
            {
                "lightness": 6
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
        
            {
                "lightness": 9
            }
        ]
    }
]

COLLAPSE

 

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 43.4776678, lng: -80.5820561},
          zoom: 14,
          styles: mapStyle,
          disableDefaultUI: true,
          gestureHandling: 'none',
          zoomControl: false
        });
    }

