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

