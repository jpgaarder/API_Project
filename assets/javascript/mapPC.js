$(document).ready(function () {
    initMap();
  });
  
  function initMap() {
    var stationCoords = [];	
  var tkn = "5f4bddebeaba4e6892eade4aa033e41b";
  var stn = "CCD, CLK, CDYBK, CDSUT, C99, PCPCN, PCH, PCPD, THCU1, PCSL, PCT, PCZ, PCS, SNC, PCB, EMPUT, SNV, DVO, MBY, DVB, DVG"
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
      center: { lat: 40.665815, lng:  -111.528981},
      zoom: 11.25,
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
      { lat: 40.704033, lng:  -111.622012 },
      { lat: 40.728945, lng: -111.591140 },
      { lat: 40.727569, lng:  -111.554329 },
      { lat: 40.715053, lng:  -111.545011 },
      { lat: 40.685594, lng:  -111.533292 },
      { lat: 40.656323, lng: -111.488668},
      { lat: 40.643686, lng:  -111.445217},
      { lat: 40.594100, lng:  -111.431639 },
      { lat: 40.587805,  lng: -111.465395 },
      { lat: 40.595610, lng:  -111.543006},
      { lat: 40.610692, lng:  -111.578982 },
      { lat: 40.664421,  lng: -111.620851 },
      { lat: 40.693314, lng: -111.613568 }
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
  