//carousel
let index = 1;
let slides = document.querySelectorAll(".party-pic");
slides[index].style.display = "block";

const carousel = () => {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (index === slides.length) {
        index = 0;
    }
    if (index < 0) {
        index = slides.length - 1;
    }
    if (index >= 0 && index < slides.length) {
        slides[index].style.display = "block";
    }
}


const next = () => {
    document.querySelector('#next').onclick = () => {
        index++;
        carousel();
        console.log('next');
    }
}
next();
const prev = () => {
    document.getElementById('prev').onclick = () => {
        index--;
        carousel();
        console.log('prev');
    }
}
prev();


//tabs
const showTabs = (e, tabs) => {
    let tabContent = document.querySelectorAll(".tab-content");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    let tabLinks = document.querySelectorAll(".tabLinks");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabs).style.display = "block";
    e.currentTarget.className += " active";
}

//map inside the info
const openStreetMap = () => {
    const myMap = L.map('open-street-map').setView([51.22561, 4.40083], 18);
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tiles = L.tileLayer(tileUrl, {attribution});
    tiles.addTo(myMap);
    const marker = L.marker([51.22561, 4.40083]).addTo(myMap);
    marker.bindPopup("<b>Becode Party</b><br/><b>On Thursday 16 August 6 PM</b>").openPopup();
}
openStreetMap();

//form validation
document.getElementById("button").disabled = true;

function emptycheck() {
    if (document.getElementById("fullname").value == "" ||
        document.getElementById("email").value == "" ||
        document.getElementById("textarea").value == "") {
        document.getElementById("button").disabled = true;
    } else {
        document.getElementById("button").disabled = false;
    }
}

document.getElementById("fullname").onkeyup = function () {
    emptycheck()
};
document.getElementById("email").onkeyup = function () {
    emptycheck()
};
document.getElementById("textarea").onkeyup = function () {
    emptycheck()
};

