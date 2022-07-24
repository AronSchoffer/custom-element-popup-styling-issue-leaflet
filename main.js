import MyPopup from "./popup.js";
var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

const mypopup = document.createElement('my-popup');
mypopup.style.backgroundColor = 'red';

L.popup()
    .setLatLng([51.513, -0.09])
    .setContent(mypopup)
    .openOn(map);

const p = document.createElement('p');
p.style.backgroundColor = 'red';

L.popup()
    .setLatLng([51.5, -0.09])
    .setContent(p)
    .openOn(map);
