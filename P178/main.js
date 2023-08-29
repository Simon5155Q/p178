var latitude = 60;
var longitude = 70;
var img = document.querySelector("#marker1")

mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';
var map = new mapboxgl.Map({
    container:'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [latitude, longitude],
    zoom:15
})
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {enableHighAccuracy: true},
        trackUserLocation: true
    })
)

var marker = new mapboxgl.Marker({
    element:img,
}).setLngLat([78.0421,27.1751]).addTo(map)



