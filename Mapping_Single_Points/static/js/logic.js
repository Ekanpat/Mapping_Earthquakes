// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
L.circle([34.0522, -118.2437], {
   radius: 100
}).addTo(map)

//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 10,
    accessToken: API_KEY
});

// Add a map to the center of Los Angeles, California
// L.circle([34.0522, -118.2437], {
//    radius: 300,
//    color: "black",
//    fillColor: '#fffa1'
// }).addTo(map);

// Add a circle to the map
L.circleMarker([34.0522, -118.2437], {
   radius: 300,
   color: "black",
   fillColor: '#fffa1'
}).addTo(map);
// // Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

