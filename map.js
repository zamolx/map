var map = new L.Map('mapid', {
    center: new L.LatLng(43.5833, 7.1167),
    zoom: 15
});

// create a new tile layer
var tileUrl = 'https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=6a90935563194b429342f8cc7b62df6d',
    layer = new L.TileLayer(tileUrl, {maxZoom: 18});

// add the layer to the map
map.addLayer(layer);