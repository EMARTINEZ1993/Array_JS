let productos = [];

let producto = document.getElementById("producto");
let precio = document.getElementById("precio");
let cantidad = document.getElementById("cantidad");
let formulario = document.getElementById("formulario");

let tabla = document.getElementById("tabla");
let total = document.getElementById("total");
let productoMayor = document.getElementById("productoMayor");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    let nombre = producto.value.trim();
    let valor = Number(precio.value);
    let unidades = Number(cantidad.value);

    if (nombre === "" || precio.value.trim() === "" || cantidad.value.trim() === "") {
        alert("Complete todos los campos.");
        return;
    }

    if (!Number.isFinite(valor) || valor < 0) {
        alert("Ingrese un precio válido mayor o igual a cero.");
        return;
    }

    if (!Number.isInteger(unidades) || unidades <= 0) {
        alert("La cantidad debe ser un número entero mayor que cero.");
        return;
    }

    productos.push({
        nombre: nombre,
        precio: valor,
        cantidad: unidades
    });

    producto.value = "";
    precio.value = "";
    cantidad.value = "";
    producto.focus();

    mostrarProductos();
});

function mostrarProductos() {
    tabla.innerHTML = "";

    let valorTotal = 0;
    let productoMasCostoso = productos[0];

    if (productos.length === 0) {
        let filaVacia = document.createElement("tr");
        let celdaVacia = document.createElement("td");
        celdaVacia.colSpan = 5;
        celdaVacia.textContent = "El inventario está vacío.";
        filaVacia.appendChild(celdaVacia);
        tabla.appendChild(filaVacia);
    }

    for (let i = 0; i < productos.length; i++) {
        let elemento = productos[i];
        let subtotal = elemento.precio * elemento.cantidad;
        valorTotal += subtotal;

        if (elemento.precio > productoMasCostoso.precio) {
            productoMasCostoso = elemento;
        }

        let fila = document.createElement("tr");
        let celdaNombre = document.createElement("td");
        let celdaPrecio = document.createElement("td");
        let celdaCantidad = document.createElement("td");
        let celdaSubtotal = document.createElement("td");
        let celdaAccion = document.createElement("td");
        let botonEliminar = document.createElement("button");

        botonEliminar.type = "button";
        celdaNombre.textContent = elemento.nombre;
        celdaPrecio.textContent = `$${elemento.precio.toFixed(2)}`;
        celdaCantidad.textContent = elemento.cantidad;
        celdaSubtotal.textContent = `$${subtotal.toFixed(2)}`;
        botonEliminar.textContent = "Eliminar";

        botonEliminar.addEventListener("click", function() {
            productos.splice(i, 1);
            mostrarProductos();
        });

        celdaAccion.appendChild(botonEliminar);
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaPrecio);
        fila.appendChild(celdaCantidad);
        fila.appendChild(celdaSubtotal);
        fila.appendChild(celdaAccion);
        tabla.appendChild(fila);
    }

    total.textContent = `Valor total del inventario: $${valorTotal.toFixed(2)}`;

    if (productos.length > 0) {
        productoMayor.textContent = `Producto con mayor precio unitario: ${productoMasCostoso.nombre} - $${productoMasCostoso.precio.toFixed(2)}`;
    } else {
        productoMayor.textContent = "No hay productos registrados.";
    }
}

mostrarProductos();
