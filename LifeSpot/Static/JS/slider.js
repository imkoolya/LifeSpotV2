document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    function changeSlide(index) {
        slides[currentIndex].style.opacity = 0;
        currentIndex = (index + slides.length) % slides.length;
        slides[currentIndex].style.opacity = 1;
    }

    prevButton.addEventListener('click', function () {
        changeSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', function () {
        changeSlide(currentIndex + 1);
    });
});