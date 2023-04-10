const NOMBRE = document.getElementById("nombre");
const TITULO = document.getElementById("titulo");
const MAX_BUENAS = document.getElementById("max-buenas");
const SUBMIT = document.getElementById("submit");

let nombreUsuario = "";
let titulo = "Examen";
let maxBuenas = 0;

NOMBRE.addEventListener("change", function () {
	nombreUsuario = NOMBRE.value;
});

TITULO.addEventListener("change", function () {
	titulo = TITULO.value;
});

MAX_BUENAS.addEventListener("change", function () {
	maxBuenas = MAX_BUENAS.value;
});

SUBMIT.addEventListener("click", function () {
	if (nombreUsuario === "" || maxBuenas === 0) {
		alert("Rellena los campos requeridos");
	} else {
		localStorage.setItem("nombre", nombreUsuario);
		localStorage.setItem("titulo", titulo);
		localStorage.setItem("maxBuenas", maxBuenas);
		window.location.href = "./calificador.html";
	}
});
