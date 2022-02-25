var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

var slides = $$('.slide');
var left = $('.left')
var right = $('.right')
var currentSlide = 0;
var length = slides.length - 1;
var dots = $$('.dot')

dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
        $('.dot.active').classList.remove('active')
        this.classList.add('active')
        showSlide(index)
    })
})  


function showSlide(slideIndex) {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${200*slideIndex}%)`
    });
    $('.dot.active').classList.remove('active')
    dots[slideIndex].classList.add('active')
}

right.addEventListener('click', function() {
    currentSlide++;
    if((currentSlide + 7) > length) {currentSlide = 0}
    showSlide(currentSlide);
})

left.addEventListener('click', function() {
    currentSlide--;
    if(currentSlide < 0) {currentSlide = length - 7}
    showSlide(currentSlide);
})




