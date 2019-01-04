$(document).ready(function () {
  initMap();
});

function initMap() {
  var stationCoords = [];	
var tkn = "5f4bddebeaba4e6892eade4aa033e41b";
var stn = "CLN, ALT, IFF, AMB, ATB, AGD, ATH20, SBDU1, UTPLC, UTWLC, ELBUT  "
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
    center: { lat: 40.563312, lng: -111.706370 },
    zoom: 12,
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
    { lat: 40.586612, lng: -111.796307 },
    { lat: 40.590916, lng: -111.751542 },
    { lat: 40.600485, lng: -111.716019 },
    { lat: 40.608577, lng: -111.639652 },
    { lat: 40.604247, lng: -111.596774 },
    { lat: 40.575644, lng: -111.582939 },
    { lat: 40.551426, lng: -111.599886 },
    { lat: 40.515651, lng: -111.682974 },
    { lat: 40.515966, lng: -111.743036 },
    { lat: 40.522538, lng: -111.768915 },
    { lat: 40.557348, lng: -111.811932 }
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
