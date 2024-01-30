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

let msgs = [
	"¡Uy!",
	"¡Vaya!",
	"¡Intenta otra vez!",
	"¡No te des por vencido!",
	"¡Tú puedes!",
	"Sigue practicando!",
	"¡Bien!",
	"¡Muy bien!",
	"¡Excelente!",
	"¡Felicidades!",
	"¡Wow!",
];

MESSAGE.innerHTML = msgs[Math.floor(porcentaje / 10)];

if (porcentaje < 50) {
	percent.style.color = `rgb(255,${porcentaje * 2.55 * 2},0)`;
} else {
	percent.style.color = `rgb(${255 - (porcentaje - 50) * 2.55 * 2},255,0)`;
}
