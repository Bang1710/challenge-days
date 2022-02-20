var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

var mySlides = $$('.mySlide')
var prev = $('.prev')
var next = $('.next')
var dots = $$('.dot')
var currentSlide = 0;

renderSlide(currentSlide)

function renderSlide(slide) {
    dotActive(slide)
    changeSlide(slide)
}

function dotActive(slide) {
    dots.forEach(dot => {
        dot.classList.remove('active')
    });
    document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('active')
}

function changeSlide(slide) {
    mySlides.forEach((mySlide, index) => {
        mySlide.style.transform = `translateX(${100*(index - slide)}%)`;
    });
}

next.addEventListener('click', function() {
    currentSlide++;
    if(currentSlide > mySlides.length -1) {currentSlide = 0}
    renderSlide(currentSlide)
});

prev.addEventListener('click', function() {
    currentSlide--;
    if(currentSlide < 0) { currentSlide = mySlides.length - 1 }
    renderSlide(currentSlide)
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
        renderSlide(index)
    })
});


