const contenedorCarrito = document.getElementById('contenedorCarrito');
let carritoBoton = document.getElementById('carritoBoton');
let btnSuplementos = document.getElementById('btnSuplementos');
let btnEquipoGimnasio = document.getElementById('btnEquipoGimnasio');
let btnRopa = document.getElementById('btnRopa');

carritoBoton.addEventListener('click', () => {
    contenedorCarrito.classList.toggle('header__carrito__contenedor--active');
})

btnSuplementos.addEventListener('click', () => {
    let productosFiltrados = listadoProductos.filter( (producto) => {
        return producto.categoria.includes('suplemento')
    });

    vaciarContenedorProductos();
    mostrarProductos(productosFiltrados);
})

btnEquipoGimnasio.addEventListener('click', () => {
    let productosFiltrados = listadoProductos.filter( (producto) => {
        return producto.categoria.includes('equipo-gimnasio')
    });

    vaciarContenedorProductos();
    mostrarProductos(productosFiltrados);
})

btnRopa.addEventListener('click', () => {
    let productosFiltrados = listadoProductos.filter( (producto) => {
        return producto.categoria.includes('ropa-deportiva')
    });

    vaciarContenedorProductos();
    mostrarProductos(productosFiltrados);
});

let btnProductosRelampago = document.getElementById('btnProductosRelampago');

btnProductosRelampago.addEventListener('click', () => {
    let productosFiltrados = listadoProductos.filter( (producto) => {
        if (producto.oferta) {
            return producto
        }
    });

    vaciarContenedorProductos();
    mostrarProductos(productosFiltrados);
});