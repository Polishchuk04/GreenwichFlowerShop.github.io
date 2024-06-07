document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav ul");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("show");
    });
});

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}

function validateForm() {
    const form = document.forms[0];
    const name = form["name"].value;
    const email = form["email"].value;
    const message = form["message"].value;

    if (!name || !email || !message) {
        alert("All fields must be filled out");
        return false;
    }

    return true;
}

function initMap() {
    const mapOptions = {
        center: { lat: 40.7128, lng: -74.0060 },
        zoom: 15
    };

    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
    const marker = new google.maps.Marker({
        position: { lat: 40.7128, lng: -74.0060 },
        map: map,
        title: "Blossom Flower Shop"
    });
}

const carousel = document.querySelector('.service-carousel');
const items = document.querySelectorAll('.carousel-item');
let scrollPosition = 0;
const scrollUnit = carousel.clientWidth;

function scrollToActiveItem(activeItem) {
    const targetScroll = activeItem * scrollUnit;
    carousel.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
    });
}
