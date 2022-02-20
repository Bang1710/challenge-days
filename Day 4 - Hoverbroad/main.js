var container = document.querySelector(".container");

renderSquare();

function renderSquare() {
	for (let i = 0; i < 600; i++) {
		var element = document.createElement("div");
		container.appendChild(element);
		element.classList.add("square");
	}
}

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
	var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
	square.addEventListener("mouseover", function () {
		this.style.backgroundColor = randomColor;
		this.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`;
	});

	square.addEventListener("mouseout", function () {
        setTimeout(() => {
            square.style.backgroundColor = "#1d1d1d";
            square.style.boxShadow = "0 0 2px #000";
        }, 1500)
	});
});
