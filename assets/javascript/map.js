
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 40.563312, lng: -111.706370},
    zoom: 12,
    mapTypeId: 'terrain'
  });
  console.log("hello")
}
