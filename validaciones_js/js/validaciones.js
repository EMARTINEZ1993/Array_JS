
// ==================================================
// BLOQUE 1. VALIDAR NOMBRE
// ==================================================

// 1. Capturar el elemento HTML
const nombre = document.getElementById("nombre");

// 2. Crear la función de validación
function validarNombre() {

    let valor = nombre.value.trim();

    if (valor.length < 3) {

        document.getElementById("errorNombre").textContent =
            "El nombre debe tener mínimo 3 caracteres.";

        return false;

    } else {

        document.getElementById("errorNombre").textContent =
            "Nombre válido.";

        return true;
    }
}

// 3. Ejecutar la validación en tiempo real
nombre.addEventListener("input", validarNombre);


// ==================================================
// BLOQUE 2. VALIDAR APELLIDOS
// ==================================================

// 1. Capturar el elemento HTML
const apellidos = document.getElementById("apellidos");

// 2. Crear la función de validación
function validarApellidos() {

    let valor = apellidos.value.trim();

    if (valor.length < 3) {

        document.getElementById("errorApellidos").textContent =
            "Los apellidos deben tener mínimo 3 caracteres.";

        return false;

    } else {

        document.getElementById("errorApellidos").textContent =
            "Apellidos válidos.";

        return true;
    }
}

// 3. Ejecutar la validación en tiempo real
apellidos.addEventListener("input", validarApellidos);


// ==================================================
// BLOQUE 3. VALIDAR DOCUMENTO
// ==================================================

// 1. Capturar el elemento HTML
const documento = document.getElementById("documento");

// 2. Crear la función de validación
function validarDocumento() {

    let valor = documento.value.trim();

    if (!/^\d{6,10}$/.test(valor)) {

        document.getElementById("errorDocumento").textContent =
            "Ingrese un documento entre 6 y 10 números.";

        return false;

    } else {

        document.getElementById("errorDocumento").textContent =
            "Documento válido.";

        return true;
    }
}

// 3. Ejecutar la validación en tiempo real
documento.addEventListener("input", validarDocumento);


// ==================================================
// BLOQUE 4. VALIDAR CORREO ELECTRÓNICO
// ==================================================

// 1. Capturar el elemento HTML
const correo = document.getElementById("correo");

// 2. Crear la función de validación
function validarCorreo() {

    let valor = correo.value.trim();

    let expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!expresion.test(valor)) {

        document.getElementById("errorCorreo").textContent =
            "Ingrese un correo electrónico válido.";

        return false;

    } else {

        document.getElementById("errorCorreo").textContent =
            "Correo válido.";

        return true;
    }
}

// 3. Ejecutar la validación en tiempo real
correo.addEventListener("input", validarCorreo);


// ==================================================
// BLOQUE 5. VALIDAR TELÉFONO
// ==================================================

// 1. Capturar el elemento HTML
const telefono = document.getElementById("telefono");

// 2. Crear la función de validación
function validarTelefono() {

    let valor = telefono.value.trim();

    if (!/^\d{10}$/.test(valor)) {

        document.getElementById("errorTelefono").textContent =
            "El teléfono debe tener exactamente 10 números.";

        return false;

    } else {

        document.getElementById("errorTelefono").textContent =
            "Teléfono válido.";

        return true;
    }
}

// 3. Ejecutar la validación en tiempo real
telefono.addEventListener("input", validarTelefono);


// ==================================================
// BLOQUE 6. VALIDAR EDAD
// ==================================================

// 1. Capturar el elemento HTML
const edad = document.getElementById("edad");

// 2. Crear la función de validación
function validarEdad() {

    let valor = Number(edad.value);

    if (
        edad.value.trim() === "" ||
        !Number.isInteger(valor) ||
        valor < 18 ||
        valor > 60
    ) {

        document.getElementById("errorEdad").textContent =
            "La edad debe estar entre 18 y 60 años.";

        return false;

    } else {

        document.getElementById("errorEdad").textContent =
            "Edad válida.";

        return true;
    }
}

// 3. Ejecutar la validación en tiempo real
edad.addEventListener("input", validarEdad);


// ==================================================
// BLOQUE 7. VALIDAR CONTRASEÑA
// ==================================================

// 1. Capturar el elemento HTML
const contrasena = document.getElementById("contrasena");

// 2. Crear la función de validación
function validarContrasena() {

    let valor = contrasena.value;

    let expresion = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!expresion.test(valor)) {

        document.getElementById("errorContrasena").textContent =
            "Mínimo 8 caracteres, una mayúscula y un número.";

        return false;

    } else {

        document.getElementById("errorContrasena").textContent =
            "Contraseña válida.";

        return true;
    }
}

// 3. Ejecutar la validación en tiempo real
contrasena.addEventListener("input", validarContrasena);


// ==================================================
// BLOQUE 8. CONFIRMAR CONTRASEÑA
// ==================================================

// 1. Capturar el elemento HTML
const confirmar = document.getElementById("confirmar");

// 2. Crear la función de validación
function validarConfirmar() {

    let valor = confirmar.value;

    if (valor === "" || valor !== contrasena.value) {

        document.getElementById("errorConfirmar").textContent =
            "Las contraseñas no coinciden.";

        return false;

    } else {

        document.getElementById("errorConfirmar").textContent =
            "Las contraseñas coinciden.";

        return true;
    }
}

// 3. Ejecutar la validación en tiempo real
confirmar.addEventListener("input", validarConfirmar);


// 4. Volver a comprobar la confirmación
// cuando se modifica la contraseña original
contrasena.addEventListener("input", validarConfirmar);


// ==================================================
// BLOQUE 9. VALIDAR PROGRAMA
// ==================================================

// 1. Capturar el elemento HTML
const programa = document.getElementById("programa");

// 2. Crear la función de validación
function validarPrograma() {

    let valor = programa.value;

    if (valor === "") {

        document.getElementById("errorPrograma").textContent =
            "Seleccione un programa de formación.";

        return false;

    } else {

        document.getElementById("errorPrograma").textContent =
            "Programa seleccionado.";

        return true;
    }
}

// 3. Ejecutar la validación cuando cambia la selección
programa.addEventListener("change", validarPrograma);


// ==================================================
// BLOQUE 10. VALIDAR TÉRMINOS Y CONDICIONES
// ==================================================

// 1. Capturar el elemento HTML
const terminos = document.getElementById("terminos");

// 2. Crear la función de validación
function validarTerminos() {

    if (!terminos.checked) {

        document.getElementById("errorTerminos").textContent =
            "Debe aceptar los términos y condiciones.";

        return false;

    } else {

        document.getElementById("errorTerminos").textContent =
            "Términos aceptados.";

        return true;
    }
}

// 3. Ejecutar la validación cuando cambia el checkbox
terminos.addEventListener("change", validarTerminos);


// ==================================================
// BLOQUE 11. VALIDAR TODO EL FORMULARIO
// ==================================================

// 1. Capturar el botón y el formulario
const formulario = document.getElementById("formulario");
const btnRegistrar = document.getElementById("btnRegistrar");

// 2. Crear la función de validación general
function validarFormulario() {

    let resultado =
        validarNombre() &&
        validarApellidos() &&
        validarDocumento() &&
        validarCorreo() &&
        validarTelefono() &&
        validarEdad() &&
        validarContrasena() &&
        validarConfirmar() &&
        validarPrograma() &&
        validarTerminos();

    btnRegistrar.disabled = !resultado;

    return resultado;
}


// ==================================================
// BLOQUE 12. ACTUALIZAR EL ESTADO DEL BOTÓN
// ==================================================

// Comprobar todos los campos cada vez que cambia uno
formulario.addEventListener("input", validarFormulario);

formulario.addEventListener("change", validarFormulario);


// ==================================================
// BLOQUE 13. ENVIAR EL FORMULARIO
// ==================================================

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    if (validarFormulario()) {

        document.getElementById("mensajeFinal").textContent =
            "¡Estudiante registrado correctamente!";

        document.getElementById("mensajeFinal").style.color = "green";

        // Limpiar el formulario
        formulario.reset();

        // Limpiar estilos de los campos
        document.querySelectorAll("input, select").forEach(function(campo) {

            campo.classList.remove("error", "exito");

        });

        // Limpiar mensajes
        document.querySelectorAll("small").forEach(function(elemento) {

            elemento.textContent = "";
            elemento.className = "";

        });

        // Deshabilitar nuevamente el botón
        btnRegistrar.disabled = true;
    }

});
