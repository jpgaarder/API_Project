$(document).ready(function () {
  initMap();
});
function initMap() {
  // Map Options
  var options = {
    center: { lat: 40.563312, lng: -111.706370 },
    zoom: 12,
    mapTypeId: 'terrain'
  }
  var lccPoly = [
    { lat: 40.586612, lng: -111.796307 },
    { lat: 40.590916, lng: -111.751542 },
    { lat: 40.600485, lng: -111.716019 },
    { lat: 40.608577, lng: -111.639652 },
    { lat: 40.604247, lng: -111.596774 },
    { lat: 40.575644, lng: -111.582939 },
    { lat: 40.551426, lng: -111.599886 },
    { lat: 40.515651, lng: -111.682974 },
    { lat: 40.497249, lng: -111.833096 },
    { lat: 40.557348, lng: -111.811932 }
  ];
  var lccOverlay = new google.maps.Polygon({
    paths: lccPoly,
    strokeColor: '#000000',
    strokeOpacity: 0.3,
    strokeWeight: 2,
    fillColor: '#EE82EE',
    fillOpacity: 0.2
  });
  //New Map
  var map = new google.maps.Map(document.getElementById("map"), options);
  lccOverlay.setMap(map);
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
  for (var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      // icon: props.iconMarker
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
}