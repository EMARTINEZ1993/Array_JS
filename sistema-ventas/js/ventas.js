
// ========================================
// 1. ARREGLO DE OBJETOS
// ========================================

let productos = [
    {
        id: 1,
        nombre: "Teclado",
        categoria: "Accesorios",
        precio: 85000,
        stock: 15
    },
    {
        id: 2,
        nombre: "Mouse",
        categoria: "Accesorios",
        precio: 45000,
        stock: 20
    },
    {
        id: 3,
        nombre: "Monitor",
        categoria: "Tecnología",
        precio: 650000,
        stock: 4
    }
];


// ========================================
// 2. CAPTURAR ELEMENTOS DEL HTML
// ========================================

const formulario = document.getElementById("formularioProducto");

const idProducto = document.getElementById("idProducto");
const nombre = document.getElementById("nombre");
const categoria = document.getElementById("categoria");
const precio = document.getElementById("precio");
const stock = document.getElementById("stock");

const tablaProductos = document.getElementById("tablaProductos");
const mensaje = document.getElementById("mensaje");

const btnGuardar = document.getElementById("btnGuardar");
const btnCancelar = document.getElementById("btnCancelar");

const buscar = document.getElementById("buscar");
const filtroCategoria = document.getElementById("filtroCategoria");


// ========================================
// 3. FUNCIONES AUXILIARES
// ========================================

// Formatear valores como pesos colombianos
function formatoMoneda(valor) {
    return valor.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    });
}


// ========================================
// 4. READ - MOSTRAR PRODUCTOS
// ========================================

function mostrarProductos(lista = productos) {

    tablaProductos.innerHTML = "";

    if (lista.length === 0) {
        mensaje.textContent = "No se encontraron productos.";
        return;
    }

    mensaje.textContent = "";

    for (let i = 0; i < lista.length; i++) {

        let producto = lista[i];

        let fila = document.createElement("tr");

        // Crear celdas
        let datos = [
            producto.id,
            producto.nombre,
            producto.categoria,
            formatoMoneda(producto.precio),
            producto.stock
        ];

        for (let j = 0; j < datos.length; j++) {
            let celda = document.createElement("td");
            celda.textContent = datos[j];
            fila.appendChild(celda);
        }

        // Crear celda de acciones
        let celdaAcciones = document.createElement("td");

        let botonEditar = document.createElement("button");
        botonEditar.textContent = "Editar";
        botonEditar.className = "editar";
        botonEditar.dataset.id = producto.id;

        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = "eliminar";
        botonEliminar.dataset.id = producto.id;

        celdaAcciones.appendChild(botonEditar);
        celdaAcciones.appendChild(botonEliminar);

        fila.appendChild(celdaAcciones);

        tablaProductos.appendChild(fila);
    }
}


// ========================================
// 5. CREATE - REGISTRAR PRODUCTOS
// ========================================

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    // Obtener valores del formulario
    let nombreProducto = nombre.value.trim();
    let categoriaProducto = categoria.value;
    let precioProducto = parseFloat(precio.value);
    let stockProducto = Number(stock.value);

    // Validaciones
    if (nombreProducto === "") {
        alert("Ingrese el nombre del producto.");
        return;
    }

    if (categoriaProducto === "") {
        alert("Seleccione una categoría.");
        return;
    }

    if (!Number.isFinite(precioProducto) || precioProducto <= 0) {
        alert("El precio debe ser mayor que cero.");
        return;
    }

    if (!Number.isInteger(stockProducto) || stockProducto < 0) {
        alert("El stock debe ser un número entero igual o mayor que cero.");
        return;
    }


    // Si existe un ID, se actualiza el producto
    if (idProducto.value !== "") {

        actualizarProducto(
            Number(idProducto.value),
            nombreProducto,
            categoriaProducto,
            precioProducto,
            stockProducto
        );

    } else {

        // Generar nuevo ID
        let nuevoId = 1;

        for (let i = 0; i < productos.length; i++) {
            if (productos[i].id >= nuevoId) {
                nuevoId = productos[i].id + 1;
            }
        }

        // Crear objeto
        let nuevoProducto = {
            id: nuevoId,
            nombre: nombreProducto,
            categoria: categoriaProducto,
            precio: precioProducto,
            stock: stockProducto
        };

        // Agregar objeto al arreglo
        productos.push(nuevoProducto);

        alert("Producto registrado correctamente.");
    }

    // Limpiar formulario y actualizar información
    limpiarFormulario();
    actualizarSistema();

});


// ========================================
// 6. UPDATE - CARGAR PRODUCTO PARA EDITAR
// ========================================

function cargarProducto(id) {

    let producto = productos.find(function(elemento) {
        return elemento.id === id;
    });

    if (producto) {

        idProducto.value = producto.id;
        nombre.value = producto.nombre;
        categoria.value = producto.categoria;
        precio.value = producto.precio;
        stock.value = producto.stock;

        btnGuardar.textContent = "Actualizar producto";
        btnCancelar.hidden = false;

        formulario.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// ========================================
// 7. UPDATE - ACTUALIZAR PRODUCTO
// ========================================

function actualizarProducto(id, nuevoNombre, nuevaCategoria, nuevoPrecio, nuevoStock) {

    let posicion = productos.findIndex(function(elemento) {
        return elemento.id === id;
    });

    if (posicion !== -1) {

        productos[posicion].nombre = nuevoNombre;
        productos[posicion].categoria = nuevaCategoria;
        productos[posicion].precio = nuevoPrecio;
        productos[posicion].stock = nuevoStock;

        alert("Producto actualizado correctamente.");
    }
}


// ========================================
// 8. DELETE - ELIMINAR PRODUCTO
// ========================================

function eliminarProducto(id) {

    let posicion = productos.findIndex(function(elemento) {
        return elemento.id === id;
    });

    if (posicion !== -1) {

        let confirmar = confirm("¿Desea eliminar este producto?");

        if (confirmar) {

            productos.splice(posicion, 1);

            alert("Producto eliminado correctamente.");

            actualizarSistema();
        }
    }
}


// ========================================
// 9. EVENTOS DE LOS BOTONES
// ========================================

tablaProductos.addEventListener("click", function(event) {

    let id = Number(event.target.dataset.id);

    if (event.target.classList.contains("editar")) {
        cargarProducto(id);
    }

    if (event.target.classList.contains("eliminar")) {
        eliminarProducto(id);
    }

});


// ========================================
// 10. CANCELAR EDICIÓN
// ========================================

btnCancelar.addEventListener("click", function() {
    limpiarFormulario();
});


// ========================================
// 11. LIMPIAR FORMULARIO
// ========================================

function limpiarFormulario() {

    formulario.reset();

    idProducto.value = "";

    btnGuardar.textContent = "Registrar producto";

    btnCancelar.hidden = true;
}


// ========================================
// 12. BUSCAR PRODUCTOS
// ========================================

buscar.addEventListener("input", function() {
    filtrarProductos();
});


// ========================================
// 13. FILTRAR POR CATEGORÍA
// ========================================

filtroCategoria.addEventListener("change", function() {
    filtrarProductos();
});


function filtrarProductos() {

    let texto = buscar.value.toLowerCase().trim();
    let categoriaSeleccionada = filtroCategoria.value;

    let resultado = productos.filter(function(producto) {

        let coincideNombre = producto.nombre.toLowerCase().includes(texto);

        let coincideCategoria =
            categoriaSeleccionada === "" ||
            producto.categoria === categoriaSeleccionada;

        return coincideNombre && coincideCategoria;
    });

    mostrarProductos(resultado);
}


// ========================================
// 14. TOTAL DE PRODUCTOS
// ========================================

function calcularTotalProductos() {

    let total = productos.length;

    document.getElementById("totalProductos").textContent = total;
}


// ========================================
// 15. VALOR TOTAL DEL INVENTARIO
// ========================================

function calcularValorInventario() {

    let total = productos.reduce(function(acumulado, producto) {

        return acumulado + (producto.precio * producto.stock);

    }, 0);

    document.getElementById("valorInventario").textContent =
        formatoMoneda(total);
}


// ========================================
// 16. PRODUCTO MÁS COSTOSO
// ========================================

function productoMasCostoso() {

    if (productos.length === 0) {

        document.getElementById("productoCostoso").textContent =
            "Sin productos";

        return;
    }

    let mayor = productos[0];

    for (let i = 1; i < productos.length; i++) {

        if (productos[i].precio > mayor.precio) {
            mayor = productos[i];
        }
    }

    document.getElementById("productoCostoso").textContent =
        mayor.nombre;
}


// ========================================
// 17. PRODUCTOS CON POCO STOCK
// ========================================

function calcularPocoStock() {

    let resultado = productos.filter(function(producto) {

        return producto.stock <= 5;

    });

    document.getElementById("pocoStock").textContent =
        resultado.length;
}


// ========================================
// 18. ACTUALIZAR TODO EL SISTEMA
// ========================================

function actualizarSistema() {

    mostrarProductos();

    calcularTotalProductos();

    calcularValorInventario();

    productoMasCostoso();

    calcularPocoStock();

    filtrarProductos();
}


// ========================================
// 19. INICIAR APLICACIÓN
// ========================================

actualizarSistema();
