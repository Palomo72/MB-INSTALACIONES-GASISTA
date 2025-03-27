document.addEventListener('DOMContentLoaded', function () {
    const slideContainer = document.querySelector('.carousel-slide');
    const slides = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;

    function updateCarousel() {
        const slideWidth = slides[0].clientWidth;
        slideContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    prevBtn.addEventListener('click', function () {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    nextBtn.addEventListener('click', function () {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    // Ajustar el carrusel al tamaño de la ventana si se redimensiona
    window.addEventListener('resize', updateCarousel);
});