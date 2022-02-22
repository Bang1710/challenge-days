var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

var contents = $$('.content')
var imgs = $$('.img')
var down = $('.down')
var up = $('.up')
var currentSlide = 0;

renderSlide(currentSlide)

function renderSlide(slide) {
    showSlideLeft(slide)
    showSlideRight(slide)
}

function showSlideLeft(slide) {
    contents.forEach((content, index) => {
        content.style.transform = `translateY(${100*(index - slide)}%)`;
    });
}

function showSlideRight(slide) {
    imgs.forEach((img, index) => {
        var length = imgs.length - 1;
        img.style.transform = `translateY(${-100*(length - index - slide)}%)`;
    })
}

down.addEventListener('click', function() {
    currentSlide++;

    if(currentSlide > contents.length - 1) { currentSlide = 0; }
    
    renderSlide(currentSlide)
})

up.addEventListener('click', function() {
    currentSlide--;

    if(currentSlide < 0) { currentSlide = contents.length - 1; }

    renderSlide(currentSlide)
})



