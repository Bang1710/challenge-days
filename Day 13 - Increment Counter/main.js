const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        var data = +counter.getAttribute('data-target')
        var current = +counter.innerText;
        const increment = data / 400;

        if (current < data ) {
            counter.innerText = `${Math.floor(current + increment)}`;
            setTimeout(updateCounter, 0.5);
        } else {
            current.innerText = data;
        }
    }

    updateCounter();
});
