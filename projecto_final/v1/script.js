// Import OpenLayers modules (use this if you want modular approach)
// import Map from 'ol/Map';
// import View from 'ol/View';
// import TileLayer from 'ol/layer/Tile';
// import OSM from 'ol/source/OSM';
// import { fromLonLat } from 'ol/proj';

// Initialize the map
const map = new ol.Map({
    target: 'map', // The ID of the div element where the map will be rendered
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM() // Using OpenStreetMap as tile source
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([-0.1276, 51.5074]), // Default to London (Longitude: -0.1276, Latitude: 51.5074)
        zoom: 10
    })
});

// Add a button event listener to center the map on New York when clicked
document.getElementById('center-map').addEventListener('click', function() {
    // Center map on New York (Longitude: -74.0060, Latitude: 40.7128)
    map.getView().animate({
        center: ol.proj.fromLonLat([-74.0060, 40.7128]),
        zoom: 12
    });
});
