const MAX_BUENAS = localStorage.getItem("maxBuenas");
const BUENAS = localStorage.getItem("buenas");
const NOMBRE = localStorage.getItem("nombre");
const TITLE = localStorage.getItem("titulo");
const MESSAGE = document.getElementById("message");

let porcentaje = (BUENAS * 100) / MAX_BUENAS;
let titulo = document.getElementById("titulo");
let nombre = document.getElementById("nombre");
let percent = document.getElementById("percent");
let result = document.getElementById("result");

result.innerHTML = `${BUENAS}/${MAX_BUENAS}`;
titulo.innerHTML = TITLE;
nombre.innerHTML = NOMBRE;
percent.innerHTML = `${porcentaje.toFixed(2)}%`;

if (porcentaje >= 85) {
	percent.style.color = "green";
	MESSAGE.innerHTML = "¡Felicidades!";
} else if (porcentaje >= 65) {
	percent.style.color = "#a99804";
	MESSAGE.innerHTML = "¡Bien!";
} else if (porcentaje >= 40) {
	percent.style.color = "orange";
	MESSAGE.innerHTML = "¡Puedes mejorar!";
} else {
	percent.style.color = "red";
	MESSAGE.innerHTML = "¡Sigue intentando!";
}
