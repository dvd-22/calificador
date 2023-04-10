const PUNTOS = document.getElementById("puntos");
const SUMAR = document.getElementById("sumar");
const RESTAR = document.getElementById("restar");
const MAX_BUENAS = localStorage.getItem("maxBuenas");
const NOMBRE = localStorage.getItem("nombre");
const TITULO = localStorage.getItem("titulo");

let buenas = 0;

SUMAR.addEventListener("click", function () {
	PUNTOS.innerHTML = parseInt(PUNTOS.innerHTML) + 1;
	localStorage.setItem("buenas", PUNTOS.innerHTML);
});

RESTAR.addEventListener("click", function () {
	PUNTOS.innerHTML = parseInt(PUNTOS.innerHTML) - 1;
	localStorage.setItem("buenas", PUNTOS.innerHTML);
});

document.getElementById("max-buenas").innerHTML = MAX_BUENAS;
document.getElementById("user").innerHTML = NOMBRE;
document.getElementById("title").innerHTML = TITULO;
