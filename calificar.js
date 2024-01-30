const PREGUNTAS = document.getElementById("preguntas-parent");
const MAX_BUENAS = localStorage.getItem("maxBuenas");
const NOMBRE = localStorage.getItem("nombre");
const TITULO = localStorage.getItem("titulo");

document.getElementById("user").innerHTML = NOMBRE;
document.getElementById("title").innerHTML = TITULO;

let buenas = 0;
let contadorDeBuenas = document.querySelector(".correctas");
let maxBuenasSpan = document.querySelector(".max-buenas");
contadorDeBuenas.innerText = `${buenas}`;
maxBuenasSpan.innerText = `${MAX_BUENAS}`;

document.getElementById("terminar").addEventListener("click", terminar);

function createDivsWithQuestions(n, contadorDeBuenas) {
	let parentDiv = document.createElement("div");
	parentDiv.className = "preguntas";

	let isMarkedCorrect = new Array(n).fill(false);

	for (let i = 1; i <= n; i++) {
		let childDiv = document.createElement("div");

		let questionText = document.createTextNode(`Pregunta ${i}`);
		childDiv.appendChild(questionText);

		let radioDiv = document.createElement("div");

		let rightOption = document.createElement("input");
		rightOption.type = "radio";
		rightOption.id = `right${i}`;
		rightOption.name = `question${i}`;
		rightOption.value = "Right";
		rightOption.addEventListener("change", function () {
			if (this.checked) {
				if (!isMarkedCorrect[i - 1]) {
					buenas++;
					isMarkedCorrect[i - 1] = true;
				}
				contadorDeBuenas.innerText = `${buenas}`;
			}
		});
		radioDiv.appendChild(rightOption);

		let rightLabel = document.createElement("label");
		rightLabel.htmlFor = `right${i}`;
		rightLabel.innerText = "✔";
		radioDiv.appendChild(rightLabel);

		let wrongOption = document.createElement("input");
		wrongOption.type = "radio";
		wrongOption.id = `wrong${i}`;
		wrongOption.name = `question${i}`;
		wrongOption.value = "Wrong";
		wrongOption.addEventListener("change", function () {
			if (this.checked) {
				if (isMarkedCorrect[i - 1]) {
					buenas--;
					isMarkedCorrect[i - 1] = false;
				}
				contadorDeBuenas.innerText = `${buenas}`;
			}
		});
		radioDiv.appendChild(wrongOption);

		let wrongLabel = document.createElement("label");
		wrongLabel.htmlFor = `wrong${i}`;
		wrongLabel.innerText = "✖";
		radioDiv.appendChild(wrongLabel);

		childDiv.appendChild(radioDiv);
		parentDiv.appendChild(childDiv);
	}

	return parentDiv;
}

//the terminar function should ask the user if they are sure they want to finish the test, and if they do, it should save the number of correct answers in the local storage and redirect to the result page
function terminar() {
	let terminar = confirm(
		"¿Estás seguro de que quieres terminar de calificar?"
	);
	if (terminar) {
		localStorage.setItem("buenas", buenas);
		window.location.href = "resultado.html";
	}
}

PREGUNTAS.append(createDivsWithQuestions(MAX_BUENAS, contadorDeBuenas));
