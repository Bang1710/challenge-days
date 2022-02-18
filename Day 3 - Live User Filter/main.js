var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var input = $('.input-search')
var liElements = $$('li')
var fullName = $$('.content h2')
var address = $$('.content h4')

input.addEventListener('keyup', function() {
    var inputValue = this.value.toLowerCase()

    liElements.forEach((li, index) => {
        var fullNameValue = fullName[index].innerHTML.toLowerCase();
        var addressValue = address[index].innerHTML.toLowerCase();

        if(fullNameValue.indexOf(inputValue) > -1 || addressValue.indexOf(inputValue) > -1) {
            liElements[index].style.display = 'flex';
        } else {
            liElements[index].style.display = 'none';
        }
    })
});


