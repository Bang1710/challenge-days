const quizData = [
	{
		question: " Question 1: Which language runs in a web browser?",
		a: "A: Java",
		b: "B: C",
		c: "C: Python",
		d: "D: JavaScript",
		correct: "d",
	},
	{
		question: " Question 2: What does CSS stand for?",
		a: "A: Central Style Sheets",
		b: "B: Cascading Style Sheets",
		c: "C: Cascading Simple Sheets",
		d: "D: Cars SUVs Sailboats",
		correct: "b",
	},
	{
		question: " Question 3: What does HTML stand for ?",
		a: "A: Hypertext Markup Language",
		b: "B: Hypertext Markdown Language",
		c: "C: Hyperloop Machine Language",
		d: "D: Helicopters Terminals Motorboats Lamborgini",
		correct: "a",
	},
	{
		question: " Question 4: What year was JavaScript launched ?",
		a: "A: 1996",
		b: "B: 1995",
		c: "C: 1994",
		d: "D: none of the above",
		correct: "b",
	},
];

const quiz = document.querySelector(".container");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.querySelector(".question-content");
const answer_a = document.querySelector("#answer-a");
const answer_b = document.querySelector("#answer-b");
const answer_c = document.querySelector("#answer-c");
const answer_d = document.querySelector("#answer-d");
const submitBtn = document.querySelector(".submit");
var labelAnswer = document.querySelectorAll("label");
var labelActive = document.querySelectorAll("label.active");
var error = document.querySelector('.error-caption')

let currentQuiz = 0;
let score = 0;

renderQuiz();

function addClassActive() {
	labelActive.forEach((currentActive) => {
		currentActive.classList.add("active");
	});
}

function removeClassActive() {
	labelActive.forEach((currentActive) => {
		currentActive.classList.remove("active");
	});
}

function deleteAnswers() {
	answerEls.forEach((answer) => {
		answer.checked = false;
	});
}

function renderQuiz() {
	deleteAnswers();

	const currentQuizData = quizData[currentQuiz];

	questionEl.innerText = currentQuizData.question;
	answer_a.innerText = currentQuizData.a;
	answer_b.innerText = currentQuizData.b;
	answer_c.innerText = currentQuizData.c;
	answer_d.innerText = currentQuizData.d;
}

labelAnswer.forEach((label) => {
	label.onclick = function () {
		removeClassActive();
		this.classList.add("active");
        error.style.display = 'none';
	};
});

function getAnswerChecked() {
	let answer;
	answerEls.forEach((answerCurrent) => {
		if (answerCurrent.checked) {
			answer = answerCurrent.id;
		}
	});
	return answer;
}

submitBtn.addEventListener("click", function () {
	addClassActive();
	let answer = getAnswerChecked();

	if (answer) {
		if (answer == quizData[currentQuiz].correct) {
			score++;
		}
		currentQuiz++;

		if (currentQuiz < quizData.length) {
			renderQuiz();
		} else {
			quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button class="btn-reload" onclick="location.reload()">Reload</button>
            `;
		}
	} else {
        error.style.display = 'block';
    }
});












// function getSelected() {
//     let answer;

//     answerEls.forEach(answerEl => {
//         if(answerEl.checked) {
//             answer = answerEl.id
//         }
//     })

//     return answer;
// }

// submitBtn.addEventListener('click', () => {
//     addClassActive()
//     const answer = getSelected()

//     if(answer) {
//         if(answer == quizData[currentQuiz].correct) {
//             score++;
//         }

//         currentQuiz++

//         if(currentQuiz < quizData.length) {
//             renderQuiz()
//         } else {
//             quiz.innerHTML = `
//                 <h2>You answered ${score}/${quizData.length} questions correctly</h2>

//                 <button onclick="location.reload()">Reload</button>
//             `
//         }
//     }
// })
