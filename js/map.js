jQuery(function ($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "//maps.googleapis.com/maps/api/js?key=AIzaSyCM9s6NtQ38__z5POnBqZaDRLEDQeHhU6g&sensor=false&callback=initialize";
    document.body.appendChild(script);
  });
  
  function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };
  
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    map.setTilt(45);
  
    // Multiple Markers
    var markers = [
        ['Serim Yazılım Bursa Şubesi, Nilüfer', 40.222805, 28.859030],
        ['Serim Yazılım İstanbul Şubesi, DolmaBahçe', 41.026350, 29.126556]
    ];
  
    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content" style="color:black;">' +
        '<h3>Bursa</h3>' +
        '<p>Uludağ Üniversitesi Ulutek Teknoloji Geliştirme Bölgesi 16059 Bursa, Turkey .</p>' + '</div>'],
        ['<div class="info_content" style="color:black;">' +
        '<h3>İstanbul</h3>' +
        '<p>Fatih Sultan Mehmet, Balkan Cd. No:56, 34771 Ümraniye/İstanbul</p>' +
        '</div>']
    ];
  
    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
  
    // Loop through our array of markers & place each one on the map  
    for (i = 0; i < markers.length; i++) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
  
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));
  
        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }
  
    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function (event) {
        this.setZoom(8);
        google.maps.event.removeListener(boundsListener);
    });
  
  }