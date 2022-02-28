var joke = document.querySelector('.dad-joke');
var btn = document.querySelector('.btn');
var id = document.querySelector('.id');

addEventListener('click', createJoke);

createJoke()
async function createJoke() {
	// Default options are marked with *
	const response = await fetch('https://icanhazdadjoke.com/', {
		headers: {
			Accept: "application/json",
		},
	});
	const data = await response.json(); // parses JSON response into native JavaScript objects
    joke.innerHTML = data.joke;
    id.innerHTML = data.id;
}

