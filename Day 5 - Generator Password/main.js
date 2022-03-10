var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var result = $('.password-value');
var copy = $('.password-copy');
var length = $('#input-length');
var upper = $('#input-upper');
var lower = $('#input-lower');
var number = $('#input-number');
var symbol = $('#input-symbol');
var createBtn = $('.btn-create');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};


createBtn.addEventListener('click', function() {
    var hasLength = +length.value;
    var hasLower = lower.checked;
    var hasUpper = upper.checked;
    var hasNumber = number.checked;
    var hasSymbol = symbol.checked;

    result.innerHTML = generatorPassword(hasLower, hasUpper, hasNumber, hasSymbol, hasLength)
});

function generatorPassword(lower, upper, number, symbol, length) {
    let resultGeneratorPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter((item) => Object.values(item)[0]); //Convert to boolean

    if(typesCount === 0) {
        return `Let's choose a option`;
    }

    for (let i = 0; i < length; i++) {
        typesArr.forEach((type) => {
            nameFunc = Object.keys(type)
            resultGeneratorPassword += randomFunc[nameFunc]()
        })
    }

    return resultGeneratorPassword.slice(0, length)
}

copy.addEventListener('click', function() {
    const input = document.createElement('input')
    const password = result.innerText

    if(!password) { return alert(`Don't create password`) }

    input.value = password
    document.body.appendChild(input)

    input.select()
    input.remove()
    alert('Password copied to clipboard!')
})


function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

