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
let submitBtn = document.getElementById("submit-btn");
submitBtn.disabled = true;
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const textArea = document.getElementById("text-area");

function validate() {
    if (firstName.value === "" || lastName.value === "" || email.value === "" || phone.value === "" || textArea.value === "") {
        submitBtn.disabled = true;
    } else {
        submitBtn.disabled = false;
    }
}

firstName.onkeyup = function () {
    validate()
};
lastName.onkeyup = function () {
    validate()
};
email.onkeyup = function () {
    validate()
};
phone.onkeyup = function () {
    validate()
};
textArea.onkeyup = function () {
    validate()
};


//counter
let number = '1';
window.setInterval(() => {
    number++;
    document.getElementById("counter-number").innerHTML = number;
    console.log(number)
}, 500);
