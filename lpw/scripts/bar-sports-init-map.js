function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45, lng: -110},
    zoom: 3
  });
  page = "Bar Sports";
  map.addListener('click', function(event) {
    mapFunctions.closeAllInfoWindows();
    mapFunctions.infoWindows = [];
    if (mapFunctions.currentMarker) {
      mapFunctions.shrinkMarker(mapFunctions.currentMarker);
    }
  });
  mapFunctions.createAllMarkers(barSportsData, page);
  listFunctions.generateList();
}
