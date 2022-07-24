import "./popup.js";
var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

const mypopup = document.createElement('my-popup');
mypopup.style.backgroundColor = 'red';

const m1 = L.marker([51.5, -0.09]).addTo(map);
m1.bindPopup(mypopup).openPopup()


const p = document.createElement('p');
p.textContent = 'p is red';
p.style.backgroundColor = 'red';

const m2 = L.marker([51.5, -0.05]).addTo(map);
m2.bindPopup(p).openPopup()
