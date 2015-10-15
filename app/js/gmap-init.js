var gmap = (function(){

  var $el = $('#map')[0];
  var $address = "Put pazdigrada 8, Split";
  var options = {
        center: { 
          lat: -34.397, 
          lng: 150.64
        },
        zoom: 16,
        disableDefaultUI: true
      };

  // Initialize Google Map
  function initMap(){
    console.log('dsdsd');
    var map = new google.maps.Map($el, options);
    var geocoder = new google.maps.Geocoder();

    setGeocode(geocoder, map);  
  }
  

  function setGeocode(geocoder, map) {
    geocoder.geocode({'address': $address}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          map.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
          });
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    }

  return {
    init: initMap
  }

}());