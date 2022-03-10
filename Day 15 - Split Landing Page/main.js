var left = document.querySelector('.split.left')
var right = document.querySelector('.split.right');

left.addEventListener('mouseover', function() {
    left.classList.add('playstation');
    right.classList.add('playstation');
});

left.addEventListener("mouseout", function() {
    left.classList.remove('playstation')
    right.classList.remove('playstation')
});

right.addEventListener('mouseover', function() {
    left.classList.add('xbox');
    right.classList.add('xbox');
});

right.addEventListener("mouseout", function() {
    left.classList.remove('xbox');
    right.classList.remove('xbox');
});