// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//         40.7, -94.5
//     ],
//     zoom: 4
// });

//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
L.circle([34.0522, -118.2437], {
   radius: 100
}).addTo(map)

//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
//  Add a marker to the map for Los Angeles, California.
<<<<<<< HEAD
// let map = L.map('mapid').setView([34.0522, -118.2437],14);
=======
let map = L.map('mapid').setView([34.0522, -118.2437],14);
>>>>>>> b4e3eb99133aec7e40135ad6c40e4d38453cc5cf

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

<<<<<<< HEAD
=======
// Add a map to the center of Los Angeles, California
// L.circle([34.0522, -118.2437], {
//    radius: 300,
//    color: "black",
//    fillColor: '#fffa1'
// }).addTo(map);
>>>>>>> b4e3eb99133aec7e40135ad6c40e4d38453cc5cf

// Add a circle to the map
L.circleMarker([34.0522, -118.2437], {
   radius: 300,
   color: "black",
   fillColor: '#fffa1'
}).addTo(map);
// // Then we add our 'graymap' tile layer to the map.
// streets-v11.addTo(map);
// We create the tile layer that will be the background of our map.
<<<<<<< HEAD
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}')
=======
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}')
>>>>>>> b4e3eb99133aec7e40135ad6c40e4d38453cc5cf

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
       radius: city.population
})
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});