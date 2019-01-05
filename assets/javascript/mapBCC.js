$(document).ready(function () {
    initMap();
  });
  
  function initMap() {
    var stationCoords = [];	
  var tkn = "5f4bddebeaba4e6892eade4aa033e41b";
  var stn = "PKCU1, BRC, SOLSM, BRW, SOL, SOLAP, SOLBS, SOLMB, SOLHP, REY, UTSTR, UTTPD, UTCDF, SPC, MLDU1"
  $.getJSON('https://api.synopticdata.com/v2/stations/latest',
      {
          // specify the request parameters here
          stid: stn,
          within: 1440,
          token: tkn
      },
      function (data) {
      
          var stations = data.STATION
          for (var i = 0; i < stations.length; i++) {
          
        stationCoords.push({ 
          coords: { lat: parseFloat(stations[i].LATITUDE), lng: parseFloat(stations[i].LONGITUDE)}, 
          content: "<h6>" + stations[i].NAME + "</h6>" + "<h6>" + stations[i].ELEVATION + " ft. </h6>",
          iconMarker: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 5 }
        });
      }
      for (var i = 0; i < stationCoords.length; i++) {
        addMarker(stationCoords[i]);
        console.log("pppooooppp");
      }
    
      console.log(stationCoords);
    });
    // Map Options
    
    var options = {
      center: { lat: 40.617740, lng: -111.664229 },
      zoom: 11.5,
      mapTypeId: 'terrain',
      disableDefaultUI: true
    }
   /// Outer polygon border
    var outerCoords = [
      {lat: 40.931473, lng: -112.212300},
      {lat: 40.246844, lng: -112.234798},
      {lat: 40.264784,  lng:  -111.149219},
      {lat: 40.904906, lng: -111.256241}
    ];
  /// Inner polygon hole
    var innerCoords = [
      { lat: 40.641278,  lng: -111.796626 },
      { lat: 40.661338,  lng: -111.748771 },
      { lat: 40.684232, lng: -111.674365 },
      { lat: 40.679006, lng:  -111.616170 },
      { lat: 40.673528, lng: -111.598744 },
      { lat: 40.652429,  lng: -111.585262 },
      { lat: 40.644600,  lng:  -111.568933 },
      { lat: 40.612791,  lng: -111.540934 },
      { lat: 40.588002, lng:  -111.543505 },
      { lat: 40.576241, lng:  -111.553624 },
      { lat: 40.570764, lng:  -111.588895 },
      { lat: 40.573206, lng:  -111.603736 },
      { lat: 40.594589, lng:  -111.632991 },
      { lat: 40.586637,  lng:  -111.672550 },
      { lat: 40.579596, lng: -111.745834 },
      { lat: 40.577903, lng: -111.781620 },
      { lat: 40.586182, lng:  -111.792042}
    ];
  
    // Construct the polygon, including both paths.
    var lccPoly = new google.maps.Polygon({
      paths: [outerCoords, innerCoords],
      strokeColor: '#000000',
        strokeOpacity: 0.3,
        strokeWeight: 2,
        fillColor: '#EE82EE',
        fillOpacity: 0.4
    });
  
  
    //New Map
    var map = new google.maps.Map(document.getElementById("map"), options);
    lccPoly.setMap(map);
    
    var markers = [
      {
        coords: { lat: 40.5763, lng: -111.6383 },
        iconMarker: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 5
        },
        content: "<h6>Alta Collins Snow Stake</h6>" 
      },
      {
        coords: { lat: 40.589, lng: -111.637 },
        iconMarker: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 8
        },
        content: "<h6>Alta Base</h6>"
      }
    ];
  
    //loop through markers
    for (var i = 0; i < stationCoords.length; i++) {
      addMarker(stationCoords[i]);
      console.log("pppooooppp");
    }
  
  
    function addMarker(props) {
      var marker = new google.maps.Marker({
        position: props.coords,
        map: map,
        
      });
      // check for custom icon
      if (props.iconMarker) {
        marker.setIcon(props.iconMarker);
      }
      // checks content
      if (props.content) {
        var infoWindow = new google.maps.InfoWindow({
          content: props.content
        });
  
        marker.addListener("click", function () {
          infoWindow.open(map, marker);
        });
  
      }
    }
    console.log(markers);
  }
  