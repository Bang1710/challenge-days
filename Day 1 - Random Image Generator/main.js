const container = document.querySelector('.container')
const btn = document.querySelector('.btn-random')

const unsplashURL = 'https://source.unsplash.com/random/'

renderImage()

btn.addEventListener('click', function() {
    removeCurrentImage()
    renderImage() 
})


function removeCurrentImage() {
    var imgCurrent = document.querySelectorAll('img')
    imgCurrent.forEach(img => {
        container.removeChild(img)
    })
}

function renderImage() {
    for(let i = 0; i < Math.floor(Math.random()*(100 - 10)); i++) {
        const img = document.createElement('img')
        var random = (Math.floor(Math.random() * 10) + 1)*(Math.floor(Math.random() * 10) + 1)
        img.src = `${unsplashURL}${random}`
        container.appendChild(img)
    }
}