
let estudiantes = [
    "Juan",
    "María",
    "Carlos",
    "Laura",
    "Andrés",
    "Camila",
    "Pedro",
    "Sofía"
];

let buscar = document.getElementById("buscar");
let btnBuscar = document.getElementById("btnBuscar");

let resultado = document.getElementById("resultado");
let lista = document.getElementById("lista");

// Mostrar todos los estudiantes
function mostrarEstudiantes() {

    lista.innerHTML = "";

    for (let i = 0; i < estudiantes.length; i++) {

        let elemento = document.createElement("li");

        elemento.textContent = estudiantes[i];

        lista.appendChild(elemento);

    }

}

// Buscar estudiante
btnBuscar.addEventListener("click", function() {

    let nombre = buscar.value.trim().toLowerCase();

    if (nombre === "") {

        resultado.textContent = "Ingrese un nombre";

    } else {

        let encontrado = estudiantes.find(function(estudiante) {

            return estudiante.toLowerCase() === nombre;

        });

        if (encontrado) {

            resultado.textContent =
                "El estudiante " + encontrado + " está registrado";

        } else {

            resultado.textContent =
                "El estudiante no se encuentra registrado";

        }

    }

});

// Mostrar lista al cargar
mostrarEstudiantes();
