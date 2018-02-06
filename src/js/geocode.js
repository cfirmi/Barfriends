
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
                "lightness": 1
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
        
            {
                "lightness": 4
            }
        ]
    }
]

COLLAPSE

 

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 14,
          styles: mapStyle,
          disableDefaultUI: true,
          gestureHandling: 'none',
          zoomControl: false
        });


        var request = {

            radius: '500',
            query: 'bars'
          };
        
          service = new google.maps.places.PlacesService(map);
          service.textSearch(request, callback);
        }
        
        function callback(results, status) {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              var place = results[i];
              createMarker(results[i]);
            }
          }
        }




        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            map.setCenter(pos);
          }, function() {
            handleLocationError(true, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, map.getCenter());
        }
      }