// Crear un arreglo vacío
let listaNombres = [];

// Obtener elementos HTML
let inputNombre = document.getElementById("nombre"); 
//sin .value para poder modificar despues el input

let btnAgregar = document.getElementById("btnAgregar");
let lista = document.getElementById("lista");
let cantidad = document.getElementById("cantidad");



// Evento del botón
btnAgregar.addEventListener("click", function() {
    let nombre = inputNombre.value.trim(); // <-- 2. Leemos su valor

    if (nombre === "") {
        alert("Ingrese un nombre");
        inputNombre.focus();
    } else {
        // Agregar nombre al array
        listaNombres.push(nombre);
        // Mostrar información
        mostrarNombres();

        // 3. Limpiamos el input y devolvemos el foco correctamente
        inputNombre.value = "";
        inputNombre.focus();
    }
});

// Función para mostrar nombres
function mostrarNombres() {
    lista.innerHTML = "";

    for (let i = 0; i < listaNombres.length; i++) {
        lista.innerHTML += "<li>" + listaNombres[i] + "</li>";
    }

    cantidad.textContent = "Total registrados: " + listaNombres.length;
}