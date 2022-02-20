const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const tabs = $$('.tab-item')
const tabPanes = $$('.tab-pane')
const line = $('.tabs .line')


tabs.forEach(function(tab, index) {
    tab.addEventListener('click', function() {
        const pane = tabPanes[index]
        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active')
        
        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";
        
        this.classList.add('active')
        pane.classList.add('active')
    })
})