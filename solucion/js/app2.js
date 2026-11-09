
// Arreglo donde se guardan los números ingresados.
let listaNumeros = [];

// Referencias a los elementos del formulario y de los resultados.
let formulario = document.getElementById("formulario");
let numero = document.getElementById("numero");

let lista = document.getElementById("lista");
let suma = document.getElementById("suma");
let promedio = document.getElementById("promedio");
let mayor = document.getElementById("mayor");
let menor = document.getElementById("menor");

// Agrega el número ingresado cuando se envía el formulario.
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    // Verifica que el campo no esté vacío antes de procesarlo.
    if (numero.value.trim() === "") {
        alert("Ingrese un número");
    } else {

        // Convierte el valor a número y lo guarda en el arreglo.
        let valor = parseFloat(numero.value);

        listaNumeros.push(valor);
        numero.value = "";
        // Actualiza la lista y los cálculos mostrados.
        mostrarResultados();
    }

});

function mostrarResultados() {

    // Limpia la lista para volver a mostrar todos los números.
    lista.innerHTML = "";

    // Inicializa los valores que se usarán en los cálculos.
    let total = 0;
    let numMayor = listaNumeros[0];
    let numMenor = listaNumeros[0];

    // Recorre los números, los agrega a la lista y calcula suma, máximo y mínimo.
    for (let i = 0; i < listaNumeros.length; i++) {

        lista.innerHTML += "<li>" + listaNumeros[i] + "</li>";

        total += listaNumeros[i];

        if (listaNumeros[i] > numMayor) {
            numMayor = listaNumeros[i];
        }

        if (listaNumeros[i] < numMenor) {
            numMenor = listaNumeros[i];
        }

    }

    // Calcula el promedio y actualiza los resultados en la página.
    let media = total / listaNumeros.length;

    suma.textContent = "Suma: " + total;
    promedio.textContent = "Promedio: " + media.toFixed(2);
    mayor.textContent = "Número mayor: " + numMayor;
    menor.textContent = "Número menor: " + numMenor;
}
