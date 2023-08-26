const header = document.querySelector('.header-main');
const tabNavigation = document.querySelector('.tab-navigation');
const tabMenu = document.querySelector('.tab-menu');
const tabBtns = document.querySelectorAll('.tab-btn');

const elementsToApplyHover = [header, tabNavigation, tabMenu, ...tabBtns];

elementsToApplyHover.forEach(element => {
    element.addEventListener('mouseenter', () => {
        const bgColor = window.getComputedStyle(element).backgroundColor;
        header.style.backgroundColor = bgColor;
        header.style.color = getContrastColor(bgColor);
    });
});

function getContrastColor(color) {
    const rgb = color.match(/\d+/g);
    const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
    return brightness > 128 ? '#000000' : '#ffffff';
}

const slider = document.querySelector('.image-slider');
const slides = document.querySelectorAll('.image-slide');
let currentIndex = 0;

function goToSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
}

// Auto play the slider
setInterval(nextSlide, 3000); // Change interval time as needed
$('.image-slider').slick({
    slidesToShow: 2, // Display two images at a time
    slidesToScroll: 1,
    autoplay: true, // Auto play the slider
    autoplaySpeed: 2000, // Auto play speed in millisecond
});

